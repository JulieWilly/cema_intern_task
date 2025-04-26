import axios from "axios";
import { useNavigate } from "react-router-dom";
import { VITE_API_URL_BASE } from "../../config/config";
import { useEffect, useState } from "react";
import { useFormik } from "formik";

const Dashboard = () => {
    const navigate=useNavigate();
    const [patients, setPatients] = useState([]);

    const getPatients = async () => {
      try {
        const getData = await axios.get(`${VITE_API_URL_BASE}/patient/get-patients`).catch((error) => {
          console.error("Error fetching patients data:", error);
        }); 
        const patients = getData.data.data;
        if(getData.status === 200) {
          setPatients(patients);
        }
        if(patients.status === 400) {
          console.log("Failed to fetch patients data", patients.data);
        }
      } catch (error) {
        console.log('Error fetching details', error)
      }
    }
  const handleNavigate = (id) =>{
    navigate(`/${id}/details`)
  }

  useEffect(() => {
    getPatients();
  }, [])

  const handleSubmit = async (values) => {

    console.log("Search input:", values);
    const searchPatient = await axios.get(
      `${VITE_API_URL_BASE}/search-patients`, {
        params: {
          searchInput: values.search_input.trim() ,
        },
      }
    );
    const patients = searchPatient.data.data;
    console.log('data', patients);
  }
  const formik = useFormik({
    initialValues:{
      searchInput: "",
    },
    onSubmit: handleSubmit
  });
  return (
    <div>
      <h1 className="text-3xl font-bold">Cema Dashboard</h1>
      <hr className="border-0 h-0.5 mt-8 mb-4 bg-black" />

      <h2 className=" pb-4 text-2xl tracking-wide font-semibold">
        Patients Details
      </h2>
      <form action="" onSubmit={formik.handleSubmit}>
        <div className="mb-4 flex items-center">
          <div className="">
            <input
              id="search_input"
              type="text"
              placeholder="Search..."
              name="search_input"
              onChange={formik.handleChange}
              value={formik.values.search_input}
              className=" px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="ml-2 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Search
          </button>
        </div>
      </form>

      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-blue-100 text-left">
            <th className="px-4 py-2 border-b font-medium text-gray-700">
              Full Name
            </th>
            <th className="px-4 py-2 border-b font-medium text-gray-700">
              Email Address
            </th>
            <th className="px-4 py-2 border-b font-medium text-gray-700">
              Phone Number
            </th>
            <th className="px-4 py-2 border-b font-medium text-gray-700">
              Gender
            </th>
            <th className="px-4 py-2 border-b font-medium text-gray-700">
              Age
            </th>
            <th className="px-4 py-2 border-b font-medium text-gray-700">
              National ID
            </th>

            <th className="px-4 py-2 border-b font-medium text-gray-700">
              Admission Date
            </th>
            <th className="px-4 py-2 border-b font-medium text-gray-700">
              Details
            </th>
          </tr>
        </thead>
        <tbody>
          {patients &&
            patients.map((patient, key) => (
              <tr className="bg-white" key={key}>
                <td className="px-4 py-2 border-b">{patient.full_name}</td>
                <td className="px-4 py-2 border-b">{patient.email_address}</td>
                <td className="px-4 py-2 border-b">
                  +254 {patient.phone_number}
                </td>
                <td className="px-4 py-2 border-b">{patient.gender}</td>
                <td className="px-4 py-2 border-b">{patient.age}</td>
                <td className="px-4 py-2 border-b">{patient.national_id}</td>

                <td className="px-4 py-2 border-b">{patient.admission_date}</td>
                <td className="px-2 py-2 border-b  ">
                  <span
                    className="text-sm bg-primary p-2 rounded-sm text-white cursor-pointer"
                    onClick={() => handleNavigate(patient.id)}
                  >
                    View More
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard