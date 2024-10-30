import { Link } from "react-router-dom";
import { useListUsers } from "../Hooks/useUsers";
import LoadingScreen from "./Loader";

const UsersList = () => {
  const { data: users, isLoading, isError, error } = useListUsers();
  
  if (isLoading)
    return <LoadingScreen/>;
  if (isError)
    return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Users List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {users.map((user) => (
        <div key={user._id} className="bg-gray-100 p-4 rounded-md shadow-md transition-shadow hover:shadow-lg">
          <Link to={`/userDetails/${user._id}`}>
            <span className="text-black font-semibold">Username : </span>
            <span className="text-black">{user.username} </span>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
};

export default UsersList;
