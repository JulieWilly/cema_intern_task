const RegisterPatient = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Register Patients</h1>
      <hr className="border-0 h-0.5 mt-8 mb-4 bg-black" />

      <form
        action=""
        className="mt-4 w-11/12  mx-auto bg-white p-6 rounded-lg shadow-xl bg-secondary "
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
              Medical History (e.g. chronic conditions, surgeries)
            </label>
            <textarea
              id="medicalHistory"
              placeholder="Enter medical history"
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
              Admission Date (if admitted)
            </label>
            <input
              id="admissionDate"
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
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
