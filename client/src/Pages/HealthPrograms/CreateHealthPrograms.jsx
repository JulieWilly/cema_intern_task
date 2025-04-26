import { useFormik } from "formik";
import { VITE_API_URL_BASE } from "../../config/config";
import axios from "axios";


const CreateHealthPrograms = () => {

  const handleSubmit = async (values) => { 
  try {
      const registerProgram = await axios.post(
        `${VITE_API_URL_BASE}/program/register-program`,
        {
          program_name: values.program_name,
          program_description: values.program_description,
          program_code: values.program_code,
          start_date: values.start_date,
          end_date: values.end_date,
          program_status: values.program_status,
          program_manager: values.program_manager,
          treatment_details: values.treatment_details,
        }
      );

      if(registerProgram.status === 200) {
        alert("Program registered successfully");
      }
      if(registerProgram.status === 400) {
        alert("Failed to register program");
      }
  } catch (error) {
    console.error("Error submitting form:", error);
  }
   }


  const formik = useFormik({
    initialValues:{
      program_name: "",
      program_description: "",
      program_code: "",
      start_date: "",
      end_date: "",
      program_status: "",
      program_manager: "",
      treatment_details: "",
    },
    onSubmit: handleSubmit
  })

  return (
    <div>
      <h1 className="text-3xl font-bold">Register New Patient</h1>
      <hr className="border-0 h-0.5 mt-8 mb-4 bg-black" />

      <form
        className="mt-4 w-11/12  mx-auto bg-white p-6 rounded-lg shadow-xl"
        onSubmit={formik.handleSubmit}
      >
        <h1 className="text-center text-xl font-bold tracking-wide mb-8">
          Enter Program Details
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="mb-4">
            <label
              htmlFor="programName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Program Name
            </label>
            <input
              id="programName"
              type="text"
              placeholder="Enter program name"
              name="program_name"
              value={formik.program_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="programDescription"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Program Description
            </label>
            <textarea
              id="programDescription"
              placeholder="Enter program description"
              name="program_description"
              value={formik.program_description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows="4"
            ></textarea>
          </div>

          <div className="mb-4">
            <label
              htmlFor="programCode"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Program Code / ID
            </label>
            <input
              id="programCode"
              type="text"
              placeholder="Enter program code or ID"
              name="program_code"
              value={formik.program_code}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="startDate"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Start Date
            </label>
            <input
              id="startDate"
              type="date"
              name="start_date"
              value={formik.start_date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="endDate"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              End Date
            </label>
            <input
              id="endDate"
              type="date"
              name="end_date"
              value={formik.end_date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="programStatus"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Program Status
            </label>
            <select
              id="programStatus"
              name="program_status"
              value={formik.program_status}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select Status</option>
              <option value="1">Active</option>
              <option value="2">Completed</option>
              <option value="3">Ongoing</option>
              <option value="4">Suspended</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="programManager"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Program Manager / Coordinator
            </label>
            <input
              id="programManager"
              type="text"
              placeholder="Enter program manager's name"
              name="program_manager"
              value={formik.program_manager}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="treatmentDetails"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Treatment / Intervention Details
            </label>
            <textarea
              id="treatmentDetails"
              placeholder="Enter treatment or intervention details"
              name="treatment_details"
              value={formik.treatment_details}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows="4"
            ></textarea>
          </div>
        </div>

        <div className="mb-4 mt-6">
          <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateHealthPrograms