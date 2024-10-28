import { useEffect, useState } from "react";
import { useSendFeedback } from "../Hooks/useSendFeedback";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [visible, setVisible] = useState(false); // Start with notifications hidden
  const feedbackMutation = useSendFeedback();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    feedbackMutation.mutate(formData, {
      onSuccess: (data) => {
        setSuccessMessage(data.success); // Assuming data contains a success message
        setErrorMessage("");
        // Clear the form
        setFormData({
          name: "",
          email: "",
          message: "",
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
      setVisible(true); // Show notification when there's a message

      const timer = setTimeout(() => {
        setVisible(false);
        setErrorMessage(""); // Clear error message after hiding
        setSuccessMessage(""); // Clear success message after hiding
      }, 5000); // Hide after 5 seconds

      return () => clearTimeout(timer); // Cleanup timer on unmount or message change
    }
  }, [errorMessage, successMessage]);

  return (
    <div className="max-w-lg mx-auto mt-9 bg-gray-800 shadow-lg rounded-lg p-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">
        Contact Us
      </h2>

      {visible && errorMessage && (
        <div
          className="flex items-center p-4 mb-4 text-sm text-red-500 bg-red-100 rounded-lg"
          role="alert"
        >
          <svg
            className="w-5 h-5 mr-2"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM9 15H11V13H9v2zM9 11H11V5H9v6z" />
          </svg>
          <span className="font-medium">Error: {errorMessage}!</span>
        </div>
      )}

      {visible && successMessage && (
        <div
          className="flex items-center p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg"
          role="alert"
        >
          <svg
            className="w-5 h-5 mr-2"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM9 15H11V13H9v2zM9 11H11V5H9v6z" />
          </svg>
          <span className="font-medium">Success: {successMessage}!</span>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block text-sm font-medium text-white">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 text-black"
          />
        </div>
        <div className="mb-5">
          <label className="block text-sm font-medium text-white">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 text-black"
          />
        </div>
        <div className="mb-5">
          <label className="block text-sm font-medium text-white">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 text-black"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
