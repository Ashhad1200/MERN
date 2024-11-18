import { useEffect, useState } from "react";
import { useSendFeedback } from "../Hooks/useSendFeedback";
import { useProfile } from "../Hooks/useGetProfile";

const ContactForm = () => {
  const { data } = useProfile();
  const { userDetails } = data || {};
  const { username, email } = userDetails || {};

  const [formData, setFormData] = useState({
    name: username || "",
    email: email || "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const feedbackMutation = useSendFeedback();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Client-side validation
    if (!formData.message.trim()) {
      setErrorMessage("Message cannot be empty.");
      setVisible(true);
      return;
    }

    setIsLoading(true);
    feedbackMutation.mutate(formData, {
      onSuccess: (data) => {
        setSuccessMessage(data.success || "Message sent successfully!");
        setErrorMessage("");
        setFormData((prevData) => ({
          ...prevData,
          message: "",
        }));
        setIsLoading(false);
      },
      onError: (error) => {
        setSuccessMessage("");
        setErrorMessage(error.message || "Something went wrong. Please try again.");
        setIsLoading(false);
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
    <div className="max-w-lg mx-auto mt-9 bg-gray-800 shadow-lg rounded-lg p-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">
        Contact Us
      </h2>

      {visible && errorMessage && (
        <div
          className="fixed top-4 right-4 sm:right-auto sm:left-4 p-4 mb-4 text-sm text-red-500 bg-red-100 border border-red-200 rounded-lg shadow-md"
          role="alert"
        >
          <span className="font-medium">Error: {errorMessage}</span>
        </div>
      )}

      {visible && successMessage && (
        <div
          className="fixed top-4 right-4 sm:right-auto sm:left-4 p-4 mb-4 text-sm text-green-700 bg-green-100 border border-green-200 rounded-lg shadow-md"
          role="alert"
        >
          <span className="font-medium">Success: {successMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block text-sm font-medium text-white">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            disabled
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 text-black"
          />
        </div>
        <div className="mb-5">
          <label className="block text-sm font-medium text-white">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            disabled
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
          disabled={isLoading}
          className={`w-full bg-indigo-600 text-white py-2 rounded-md transition duration-200 ${
            isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-indigo-700"
          }`}
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
