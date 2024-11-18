import { useListComments } from '../Hooks/useGetComments';
import LoadingScreen from './Loader';
import { useDeleteComment } from '../Hooks/delete';

const Comments = () => {
    // Fetching comments data
    const { data: comments, isLoading, isError, error } = useListComments();
    // Handling delete mutation
    const { mutate, isLoading: isDeleting } = useDeleteComment();

    // Display loader during data fetch
    if (isLoading) {
        return <LoadingScreen />;
    }

    // Display error if fetching fails
    if (isError) {
        return <p className="text-center text-red-500">Error: {error.message}</p>;
    }

    // Function to handle deletion with confirmation
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this comment?")) {
            mutate(id, {
                onSuccess: () => {
                    alert("Comment successfully deleted.");
                },
                onError: (err) => {
                    console.error("Failed to delete comment:", err);
                    alert("Failed to delete comment.");
                },
            });
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-semibold mb-6 text-center">Comments</h2>
            <ul className="space-y-4">
                {comments.map((comment) => (
                    <li
                        key={comment._id}
                        className="bg-white shadow-md p-4 rounded-lg flex flex-col gap-4"
                    >
                        <div>
                            <h3 className="text-lg font-bold text-gray-800">
                                {comment.name}
                            </h3>
                            <p className="text-gray-600">Email: {comment.email}</p>
                        </div>
                        <textarea
                            className="w-full border border-gray-300 text-black rounded-md p-2 resize-none"
                            readOnly
                            value={comment.message}
                            rows={4}
                        />
                        <button
                            onClick={() => handleDelete(comment._id)}
                            disabled={isDeleting}
                            className={`text-white px-4 py-2 rounded-md ${
                                isDeleting
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-red-500 hover:bg-red-600'
                            }`}
                        >
                            {isDeleting ? 'Deleting...' : 'Delete'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Comments;
