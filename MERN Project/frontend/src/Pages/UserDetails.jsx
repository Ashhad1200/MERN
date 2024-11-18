import { useParams, useNavigate } from "react-router-dom";
import { useUser } from "../Hooks/useUsers";
import LoadingScreen from "../Components/Loader";
import { useDeleteUser } from "../Hooks/delete";

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useUser(id);
  const { mutate, isLoading: isDeleting, error: deleteError } = useDeleteUser();

  // Handle deletion with confirmation
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      mutate(data._id, {
        onSuccess: () => {
          alert("User successfully deleted.");
          navigate("/users"); // Redirect to users list after deletion
        },
        onError: (err) => {
          console.error("Failed to delete user:", err);
        },
      });
    }
  };

  // Display loading state
  if (isLoading) {
    return (
      <div className="text-center text-gray-500">
        <LoadingScreen />
      </div>
    );
  }

  // Display error state
  if (isError) {
    return (
      <div className="text-center text-red-500">
        <p>Error: {error.message || "Something went wrong."}</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md text-black mt-36">
      <h1 className="text-3xl font-bold mb-4">User Details</h1>
      <div className="space-y-4">
        <p>
          <strong className="font-semibold">ID:</strong> {data._id}
        </p>
        <p>
          <strong className="font-semibold">Username:</strong> {data.username}
        </p>
        <p>
          <strong className="font-semibold">Email:</strong> {data.email}
        </p>
        <p>
          <strong className="font-semibold">Phone:</strong> {data.phone}
        </p>
        <p>
          <strong className="font-semibold">Admin:</strong>{" "}
          {data.isAdmin ? "Yes" : "No"}
        </p>
      </div>

      {/* Display Delete Error */}
      {deleteError && (
        <div className="text-center text-red-500 mt-4">
          Failed to delete user: {deleteError.message || "Unknown error."}
        </div>
      )}

      {/* Delete Button */}
      <div className="flex justify-end mt-6">
        <button
          className={`w-full bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600 active:scale-95 transform transition-transform ${
            isDeleting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleDelete}
          disabled={isDeleting}
        >
          {isDeleting ? "Deleting..." : "Delete User"}
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
