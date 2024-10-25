import { useParams } from 'react-router-dom';

import { useUser } from '../Hooks/useUsers';

const UserDetails = () => {
    const { id } = useParams();
    const { data, isLoading, isError, error } = useUser(id);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>User Details</h1>
            <p><strong>ID:</strong> {data._id}</p>
            <p><strong>Username:</strong> {data.username}</p>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Phone:</strong> {data.phone}</p>
            <p><strong>Admin:</strong> {data.isAdmin ? 'Yes' : 'No'}</p>
        </div>
    );
};

export default UserDetails;

