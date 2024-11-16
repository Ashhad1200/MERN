import { useNavigate } from 'react-router-dom';

const UnauthorizedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Access Denied</h1>
        <p className="text-gray-700 mb-6">
          You don't have permission to view this page.
        </p>
        <button
          onClick={() => navigate('/login')}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Go to Login
        </button>
        <button
          onClick={() => navigate('/')}
          className="ml-4 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
