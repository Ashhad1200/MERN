import React from 'react';
import { useListComments } from '../Hooks/useGetComments';

const Comments = () => {
    const { data: comments, isLoading, isError, error } = useListComments();

    if (isLoading) {
        return <p className="text-center text-blue-500">Loading comments...</p>;
    }

    if (isError) {
        return <p className="text-center text-red-500">Error: {error}</p>;
    }

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-semibold mb-6 text-center">Comments</h2>
            <ul className="space-y-4">
                {comments.map((comment) => (
                    <li key={comment._id} className="bg-white shadow-md p-4 rounded-lg">
                        <h3 className="text-lg font-bold text-gray-800">{comment.name}</h3>
                        <p className="text-gray-600">Email: {comment.email}</p>
                        <textarea
                            className="w-full border border-gray-300 text-black rounded-md p-2 mt-2 resize-none"
                            readOnly
                            value={comment.message}
                            rows={4}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Comments;
