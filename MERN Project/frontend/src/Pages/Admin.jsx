import { Link } from "react-router-dom";
import { useListUsers } from "../Hooks/useUsers";
import { useListComments } from "../Hooks/useGetComments";
import { useGetServices } from "../Hooks/useGetServices";
import { FaUsers, FaComments, FaServicestack } from "react-icons/fa";

const Admin = () => {
  const { data: users, isLoading: isLoadingUsers, error: errorUsers } = useListUsers();
  const { data: comments, isLoading: isLoadingComments, error: errorComments } = useListComments();
  const { data: services, isLoading: isLoadingServices, error: errorServices } = useGetServices();

  const userCount = users ? users.length : 0;
  const commentsCount = comments ? comments.length : 0;
  const servicesCount = services ? services.length : 0;

  if (isLoadingUsers || isLoadingComments || isLoadingServices) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold text-purple-700">Loading data, please wait...</p>
      </div>
    );
  }

  if (errorUsers || errorComments || errorServices) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold text-red-600">
          Error loading data. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col items-center py-8">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
        <nav className="flex flex-col space-y-4">
          <Link to="/users" className="text-lg hover:bg-gray-700 p-2 rounded flex items-center">
            <FaUsers className="mr-2" /> Users
          </Link>
          <Link to="/comments" className="text-lg hover:bg-gray-700 p-2 rounded flex items-center">
            <FaComments className="mr-2" /> Comments
          </Link>
          <Link to="/addServices" className="text-lg hover:bg-gray-700 p-2 rounded flex items-center">
            <FaServicestack className="mr-2" /> Add Services
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center bg-gray-100 p-8">
        <h1 className="text-4xl font-bold mb-12 text-gray-800">Welcome to the Admin Panel</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
          {/* Card for Users */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center">
              <FaUsers className="text-blue-500 text-3xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold mb-2 text-gray-800">View Users</h2>
                <h4 className="text-lg text-gray-600">Total Users: {userCount}</h4>
              </div>
            </div>
            <p className="text-gray-700 mt-4">Browse and manage users in the application.</p>
            <Link to="/users" className="mt-4 inline-block text-blue-500 hover:underline">
              Go to Users
            </Link>
          </div>

          {/* Card for Comments */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center">
              <FaComments className="text-green-500 text-3xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold mb-2 text-gray-800">View Comments</h2>
                <h4 className="text-lg text-gray-600">Total Comments: {commentsCount}</h4>
              </div>
            </div>
            <p className="text-gray-700 mt-4">Review and respond to comments from users.</p>
            <Link to="/comments" className="mt-4 inline-block text-green-500 hover:underline">
              Go to Comments
            </Link>
          </div>

          {/* Card for Services */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center">
              <FaServicestack className="text-purple-500 text-3xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold mb-2 text-gray-800">View Services</h2>
                <h4 className="text-lg text-gray-600">Total Services: {servicesCount}</h4>
              </div>
            </div>
            <p className="text-gray-700 mt-4">Manage and view available services.</p>
            <Link to="/services" className="mt-4 inline-block text-purple-500 hover:underline">
              Go to Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
