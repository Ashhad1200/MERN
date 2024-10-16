import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-lg mx-auto p-8 rounded-lg shadow-lg border border-gray-300 bg-white mt-9">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3"
          />
        </div>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3"
          />
        </div>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3"
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
