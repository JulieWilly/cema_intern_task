import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate=useNavigate();
  const handleNavigate = () =>{
    navigate("/id/details")
  }
  return (
    <div>
      <h1 className="text-3xl font-bold">Cema Dashboard</h1>
      <hr className="border-0 h-0.5 mt-8 mb-4 bg-black" />

      <h2 className=" pb-4 text-2xl tracking-wide font-semibold">
        Patients Details
      </h2>
      <div className="mb-4 flex items-center">
        <div className="">
          <input
            id="searchInput"
            type="text"
            placeholder="Search..."
            className="border border-black px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button
          type="button"
          className="ml-2 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </div>

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
          <tr className="bg-white">
            <td className="px-4 py-2 border-b">John Doe</td>
            <td className="px-4 py-2 border-b">jamesBond@gmail.com</td>
            <td className="px-4 py-2 border-b">+254 223099923</td>
            <td className="px-4 py-2 border-b">Male</td>
            <td className="px-4 py-2 border-b">20</td>
            <td className="px-4 py-2 border-b">299329923</td>

            <td className="px-4 py-2 border-b">dd/mm/yyyy</td>
            <td className="px-2 py-2 border-b  ">
              <span
                className="text-sm bg-primary p-2 rounded-sm text-white cursor-pointer"
                onClick={() => handleNavigate()}
              >
                View More
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard