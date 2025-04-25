
const CreateHealthPrograms = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Register New Patient</h1>
      <hr className="border-0 h-0.5 mt-8 mb-4 bg-black" />

      <form className="mt-4 w-11/12  mx-auto bg-white p-6 rounded-lg shadow-xl bg-secondary ">
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="active">Active</option>
              <option value="completed">Completed</option>
              <option value="ongoing">Ongoing</option>
              <option value="suspended">Suspended</option>
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows="4"
            ></textarea>
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
}

export default CreateHealthPrograms