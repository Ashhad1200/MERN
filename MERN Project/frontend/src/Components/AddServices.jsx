import { useState } from "react";
import { useAddServices } from "../Hooks/useAddServices"; // Ensure this hook is properly implemented

const AddServices = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const addServiceMutation = useAddServices();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call mutation to add the service
    addServiceMutation.mutate(formData, {
      onSuccess: () => {
        setFormData({
          name: "",
          description: "",
        });
      },
      onError: (error) => {
        console.error("Error adding service:", error);
        // Optionally, display an error message to the user
      },
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-4">Add Services</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
              placeholder="Enter service name"
            />
          </div>

          {/* Description Field */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
              placeholder="Enter service description"
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:outline-none"
          >
            Add Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddServices;
