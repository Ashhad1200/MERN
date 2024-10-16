import { useState } from "react";

const Login = () => {


  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
  };


  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-black text-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="bg-gray-800 shadow-lg rounded-lg p-8">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Login to your account
          </h2>

          <form className="space-y-6 mt-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium leading-6 text-white">
                Username
              </label>
              <div className="mt-2">
                <input
                  name="username"
                  type="text"
                  required
                  value={user.username}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-black placeholder-gray-400 shadow-sm ring-1 ring-inset ring-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 p-2"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium leading-6 text-white">
                Password
              </label>
              <div className="mt-2">
                <input
                  name="password"
                  type="password"
                  required
                  value={user.password}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-black placeholder-gray-400 shadow-sm ring-1 ring-inset ring-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 p-2"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>
        <div className="text-sm font-light text-[#6B7280] ">Don't have an account? <a href="/register" className="font-medium text-[#4F46E5] hover:underline">Register</a>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
