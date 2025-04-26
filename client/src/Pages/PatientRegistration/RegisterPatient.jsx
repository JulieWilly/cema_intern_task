import { useFormik } from "formik";
import axios from 'axios'
import {VITE_API_URL_BASE} from '../../config/config.js'
import { useEffect, useState } from "react";

const RegisterPatient = () => {
  const [programs, setPrograms] = useState([]); 
  const handleSubmit =async (values) => {
    // post data to the server

    // stringify 
    const programs_json_ids = JSON.stringify(values.programs_id);
    try {
      console.log("Form values:", values); 
      const registerPatient = await axios.post(
        `${VITE_API_URL_BASE}/patient/register-client`,
        {
          full_name: values.full_name,
          email_address: values.email_address,
          phone_number: values.phone_number,
          age: values.age,
          gender: values.gender,
          address: values.address,
          national_id: values.national_id,
          next_of_kin_contact: values.next_of_kin_contact,
          medical_history: values.medical_history,
          current_medication: values.current_medication,
          marital_status: values.marital_status,
          occupation: values.occupation,
          admission_date: values.admission_date,
          programs_id: programs_json_ids,
        } // replace with your API endpoint
      );

      if (registerPatient.status === 200) {
        console.log("Patient registered successfully:", registerPatient.data);
        alert("Patient registered successfully");
      }
      if (registerPatient.status === 400) {
        console.log("Failed to register patient:", registerPatient.data);
        alert("Failed to register patient");
      }
      
    } catch (error) {
      console.error("Error submitting form:", error); 

    }
  };

  const getPrograms = async () => {
    try {
      const programs = await axios.get(
        `${VITE_API_URL_BASE}/program/get-programs`
      );
      const programsData = programs.data.data;
      if (programs.status === 200) {
        setPrograms(programsData); 
      }
    
    } catch (error) {
      console.log('Error fetching programs', error);
    }
  }
  const formik = useFormik({
    initialValues: {
      full_name: "",
      email_address: "",
      phone_number: "",
      gender: "",
      age: "",
      address: "",
      national_id: "",
      next_of_kin_contact: "",
      medical_history: "",
      current_medication: "",
      marital_status: "",
      occupation: "",
      admission_date: "",
      programs_id: "",
    },
    onSubmit: handleSubmit,
  });


  useEffect(()=> {
getPrograms();
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-bold">Register Patients</h1>
      <hr className="border-0 h-0.5 mt-8 mb-4 bg-black" />

      <form
        action=""
        className="mt-4 w-11/12  mx-auto bg-white p-6 rounded-lg shadow-xl"
        onSubmit={formik.handleSubmit}
      >
        <h1 className="text-center text-xl font-bold tracking-wide mb-4">
          Enter patients details
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Enter full name"
              name="full_name"
              value={formik.full_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              id="fullName"
              type="email"
              placeholder="Email address"
              name="email_address"
              value={formik.email_address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number
            </label>
            <input
              id="phoneNumber"
              type="number"
              placeholder="Phone Number"
              name="phone_number"
              value={formik.phone_number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Gender
            </label>
            <select
              id="gender"
              type="text"
              placeholder="Gender"
              name="gender"
              value={formik.gender}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value=""></option>
              <option value="1">Male</option>
              <option value="2">Female</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Age
            </label>
            <input
              id="age"
              type="number"
              placeholder="Age"
              name="age"
              value={formik.age}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Address
            </label>
            <input
              id="address"
              type="text"
              name="address"
              value={formik.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="nationalId"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              National ID / Patient ID
            </label>
            <input
              id="nationalId"
              type="text"
              placeholder="Enter National ID or Patient ID"
              name="national_id"
              value={formik.national_id}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="emergencyContact"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Next of Kin / Emergency Contact
            </label>
            <input
              id="emergencyContact"
              type="text"
              placeholder="Enter emergency contact"
              name="next_of_kin_contact"
              value={formik.next_of_kin_contact}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="medicalHistory"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Medical History (e.g. chronic conditions, surgeries)
            </label>
            <textarea
              id="medicalHistory"
              placeholder="Enter medical history"
              name="medical_history"
              value={formik.medical_history}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows="4"
            ></textarea>
          </div>

          <div className="mb-4">
            <label
              htmlFor="medications"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Current Medications
            </label>
            <input
              id="medications"
              type="text"
              placeholder="Enter current medications"
              name="current_medication"
              value={formik.current_medication}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="maritalStatus"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Marital Status
            </label>
            <input
              id="maritalStatus"
              type="text"
              placeholder="Enter marital status"
              name="marital_status"
              value={formik.marital_status}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="occupation"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Occupation
            </label>
            <input
              id="occupation"
              type="text"
              placeholder="Enter occupation"
              name="occupation"
              value={formik.occupation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="admissionDate"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Admission Date (if admitted)
            </label>
            <input
              id="admissionDate"
              type="date"
              name="admission_date"
              value={formik.admission_date}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Enroll to program ( Hold Ctrl Cmd to select multiple.)
            </label>
            <select
              id="programs_id"
              type="text"
              placeholder="Gender"
              name="programs_id"
              value={formik.values.programs_id}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              multiple
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {programs?.map((program, key) => (
                <div key={key}>
                  <option value={program.id}>{program.program_name}</option>
                </div>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-4 mt-6">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPatient;
