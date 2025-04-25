
const PatientDetails = () => {
  return (
<div className="max-w-4xl mx-auto px-4 py-8">
  <div className="flex justify-center mb-8">
    <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-white text-3xl font-bold">
      JD
    </div>
  </div>

  <form>
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
  </form>
</div>

  )
}

export default PatientDetails