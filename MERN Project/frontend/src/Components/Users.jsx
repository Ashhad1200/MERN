import { Link } from "react-router-dom";
import { useListUsers } from "../Hooks/useUsers";
import LoadingScreen from "./Loader";

const UsersList = () => {
  const { data: users, isLoading, isError, error } = useListUsers();
  if (isLoading) return <LoadingScreen />;
  if (isError)
    return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-white">Users List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user) => (
          <div
            className="flex flex-col rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow p-6"
            key={user._id}
          >
            <div className="flex flex-col items-center text-center space-y-3">
              <h3 className="text-xl font-semibold text-gray-800">{user.username}</h3>
              <p className="text-gray-600">{user.email}</p>
              <Link to={`/userDetails/${user._id}`} className="w-full">
                <button className="mt-4 w-full bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-purple-700 active:scale-95 transform transition-transform">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
