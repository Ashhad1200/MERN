import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useRegister } from "../Hooks/useRegister";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [visible, setVisible] = useState(true);
  const registerMutation = useRegister();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

     const handleSubmit = (event) => {
        event.preventDefault();
        registerMutation.mutate(user, {
            onSuccess: (data) => {
                setSuccessMessage(data.success);
                setErrorMessage("");
                setUser({
                    username: "",
                    email: "",
                    password: "",
                    phone: "",
                });
            },
            onError: (error) => {
                setSuccessMessage("");
                setErrorMessage(error.message);
            },
        });
    };

  useEffect(() => {
    if (errorMessage || successMessage) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setErrorMessage("");
        setSuccessMessage("");
      }, 5000); 

      return () => clearTimeout(timer);
    }
  }, [errorMessage, successMessage]);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-black text-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="bg-gray-800 shadow-lg rounded-lg p-8">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Register your account
          </h2>

          {visible && errorMessage && (
            <div className="fixed top-4 right-4 p-4 mb-4 text-sm text-red-500 bg-red-100 border border-red-200 rounded-lg shadow-md" role="alert">
              <svg className="w-5 h-5 mr-2 inline" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM9 15H11V13H9v2zM9 11H11V5H9v6z" />
              </svg>
              <span className="font-medium">Error: {errorMessage}!</span>
            </div>
          )}

          {visible && successMessage && (
            <div className="fixed top-4 right-4 p-4 mb-4 text-sm text-green-700 bg-green-100 border border-green-200 rounded-lg shadow-md" role="alert">
              <svg className="w-5 h-5 mr-2 inline" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM9 15H11V13H9v2zM9 11H11V5H9v6z" />
              </svg>
              <span className="font-medium">Success: {successMessage}!</span>
            </div>
          )}

          <form className="space-y-6 mt-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium leading-6 text-white">Username</label>
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
              <label className="block text-sm font-medium leading-6 text-white">Email address</label>
              <div className="mt-2">
                <input
                  name="email"
                  type="email"
                  required
                  value={user.email}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-black placeholder-gray-400 shadow-sm ring-1 ring-inset ring-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 p-2"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium leading-6 text-white">Password</label>
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
              <label className="block text-sm font-medium leading-6 text-white">Phone</label>
              <div className="mt-2">
                <input
                  name="phone"
                  type="tel"
                  required
                  value={user.phone}
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
                Register
              </button>
            </div>
          </form>
          <div className="text-sm font-light text-[#6B7280]">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-[#4F46E5] hover:underline">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
