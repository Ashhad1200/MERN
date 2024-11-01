import React from 'react';
import { Link } from 'react-router-dom';
import { useListUsers } from '../Hooks/useUsers';
import { useListComments } from '../Hooks/useGetComments';

const Home = () => {
  const { data: users } = useListUsers();
  const { data: comments} = useListComments();
  const userCount = users ? users.length : 0;
  const commentsCount = comments ? comments.length : 0;
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">Welcome to Our App</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Card for View Users */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-4 text-black">View Users</h2>
          <h4 className="text-xl mb-4 text-black">Total Users: {userCount}</h4>
          <p className="text-gray-700">Browse and manage users in the application.</p>
          <Link to="/users" className="mt-4 inline-block text-blue-500 hover:underline">
            Go to Users
          </Link>
        </div>

        {/* Card for View Comments */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-4 text-black">View Comments</h2>
          <h4 className="text-xl mb-4 text-black">Total Comments: {commentsCount}</h4>
          <p className="text-gray-700">Review and respond to comments from users.</p>
          <Link to="/comments" className="mt-4 inline-block text-blue-500 hover:underline">
            Go to Comments
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
