
const LoadingScreen = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative flex flex-col justify-center items-center text-center">
        <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
        <img
          src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
          className="rounded-full h-28 w-28 z-10"
          alt="Loading Avatar"
        />
        <p className="mt-6 text-lg font-semibold text-purple-700 z-10">
          Please wait, loading...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
