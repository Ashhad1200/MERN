import { Link } from "react-router-dom";
import { useListUsers } from "../Hooks/useUsers";

const UsersList = () => {
  const { data: users, isLoading, isError, error } = useListUsers();
  console.log(users)
  if (isLoading)
    return <p className="text-center text-blue-500">Loading users...</p>;
  if (isError)
    return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Users List</h2>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user._id} className="bg-gray-100 p-2 rounded-md">
            <Link to={`/userDetails/${user._id}`}>
            <span className="text-black">{user.username}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
