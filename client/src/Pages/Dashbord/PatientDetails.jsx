import axios from "axios";
import { useParams } from "react-router-dom"
import { VITE_API_URL_BASE } from "../../config/config";
import { useEffect, useState } from "react";
import { useFormik } from "formik";

const PatientDetails = () => {
const [details, setDetails] = useState([]);
  const { id } = useParams()

  const getPatientDetails = async () => {
    try {
      const getData = await axios.get(`${VITE_API_URL_BASE}/patient/get-patient/${id}`).catch((error) => {  
        console.error("Error fetching patient data:", error);
      });
      const patientDetails = getData.data.data[0];
      if (getData.status === 200) {
        console.log("Patient details fetched successfully", patientDetails);
        setDetails(patientDetails);
      }
      if (getData.status === 404) {
        console.log("No patients found", getData.data.message);
      }
    } catch (error) {
      console.log("Error fetching patient details", error); 
    }
  }



  useEffect(() => {
    // map details.
    const updateFields = () => {
      if (details) {
        formik.setValues({
          full_name: details.full_name,
          email_address: details.email_address,
          phone_number: details.phone_number,
          gender: details.gender,
          age: details.age,
          address: details.address,
          national_id: details.national_id,
          next_of_kin_contact: details.next_of_kin_contact,
          medical_history: details.medical_history,
          current_medication: details.current_medication,
          marital_status: details.marital_status,
          occupation: details.occupation,
          admission_date: details.admission_date,
        });
      }
    };
    updateFields();
  },[details])

  useEffect(() => {
    getPatientDetails();  
  }, [id]);

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
        program_id:""
      },
    });


  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-center mb-8">
        <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-white text-3xl font-bold">
          JD
        </div>
      </div>

      <form
        action=""
        className="mt-4 w-11/12  mx-auto bg-white p-6 rounded-lg shadow-xl"
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
              value={formik.values.full_name}
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
              value={formik.values.email_address}
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
              value={formik.values.phone_number}
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
              value={formik.values.gender}
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
              value={formik.values.age}
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
              value={formik.values.address}
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
              value={formik.values.national_id}
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
              value={formik.values.next_of_kin_contact}
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
              value={formik.values.medical_history}
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
              value={formik.values.current_medication}
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
              value={formik.values.marital_status}
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
              value={formik.values.occupation}
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
              value={formik.values.admission_date}
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
              {details.programs_id?.map((program, key) => (
                <div key={key}>
                  <option value={program.id}>{program}</option>
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
      {/* <form>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="emailAddress"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email Address
        </label>
        <input
          id="emailAddress"
          type="email"
          placeholder="Email address"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="phoneNumber"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Phone Number
        </label>
        <input
          id="phoneNumber"
          type="text"
          placeholder="Phone number"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="gender"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Gender
        </label>
        <input
          id="gender"
          type="text"
          placeholder="Gender"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
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
          type="text"
          placeholder="Age"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="address"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Address
        </label>
        <input
          id="address"
          type="text"
          placeholder="Address"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="patientID"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          National ID / Patient ID
        </label>
        <input
          id="patientID"
          type="text"
          placeholder="Enter National ID or Patient ID"
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
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="medicalHistory"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Medical History
        </label>
        <input
          id="medicalHistory"
          type="text"
          placeholder="Enter medical history"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="currentMedications"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Current Medications
        </label>
        <input
          id="currentMedications"
          type="text"
          placeholder="Enter current medications"
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
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="admissionDate"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Admission Date
        </label>
        <input
          id="admissionDate"
          type="date"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </div>

    <div className="flex justify-center mt-6">
      <button
        type="submit"
        className="py-2 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Update Details
      </button>
    </div>
  </form> */}
    </div>
  );
}

export default PatientDetails;