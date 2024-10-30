import { useParams } from 'react-router-dom';
import { useUser } from '../Hooks/useUsers';

const UserDetails = () => {
    const { id } = useParams();
    const { data, isLoading, isError, error } = useUser(id);

    if (isLoading) {
        return <div className="text-center text-gray-500">Loading...</div>;
    }

    if (isError) {
        return <div className="text-center text-red-500">Error: {error.message}</div>;
    }

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md text-black mt-36" >
            <h1 className="text-3xl font-bold mb-4">User Details</h1>
            <div className="space-y-4">
                <p><strong className="font-semibold">ID:</strong> {data._id}</p>
                <p><strong className="font-semibold">Username:</strong> {data.username}</p>
                <p><strong className="font-semibold">Email:</strong> {data.email}</p>
                <p><strong className="font-semibold">Phone:</strong> {data.phone}</p>
                <p><strong className="font-semibold">Admin:</strong> {data.isAdmin ? 'Yes' : 'No'}</p>
            </div>
        </div>
    );
};

export default UserDetails;
