import { useProfile } from "../Hooks/useGetProfile";

const Home = () => {
  const { data, isLoading, isError, error } = useProfile();
  console.log(data);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">Welcome to Our App</h1>
    </div>
  );
};

export default Home;
