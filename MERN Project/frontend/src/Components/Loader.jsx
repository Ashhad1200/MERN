import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="loader border-t-4 border-b-4 border-blue-500 rounded-full w-16 h-16 animate-spin mb-4"></div>
        <p className="text-lg font-semibold text-gray-700">Loading, please wait...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;