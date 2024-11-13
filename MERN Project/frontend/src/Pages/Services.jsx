import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Our Services</h1>
          <p className="text-lg md:text-xl text-gray-300">
            Discover a range of services tailored to help you succeed.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-gray-800 shadow-lg p-6 rounded-xl text-center transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">Consulting</h3>
            <p className="text-gray-400">
              Our experts provide strategic guidance to drive your business forward.
            </p>
          </div>
          {/* Service 2 */}
          <div className="bg-gray-800 shadow-lg p-6 rounded-xl text-center transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">Custom Development</h3>
            <p className="text-gray-400">
              Tailored solutions designed to meet your unique business needs.
            </p>
          </div>
          {/* Service 3 */}
          <div className="bg-gray-800 shadow-lg p-6 rounded-xl text-center transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">Cloud Solutions</h3>
            <p className="text-gray-400">
              Scalable cloud services to ensure your business stays connected and agile.
            </p>
          </div>
          {/* Service 4 */}
          <div className="bg-gray-800 shadow-lg p-6 rounded-xl text-center transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">Data Analytics</h3>
            <p className="text-gray-400">
              Unlock insights from data to make informed, strategic decisions.
            </p>
          </div>
          {/* Service 5 */}
          <div className="bg-gray-800 shadow-lg p-6 rounded-xl text-center transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">Cybersecurity</h3>
            <p className="text-gray-400">
              Comprehensive security solutions to protect your business from cyber threats.
            </p>
          </div>
          {/* Service 6 */}
          <div className="bg-gray-800 shadow-lg p-6 rounded-xl text-center transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">24/7 Support</h3>
            <p className="text-gray-400">
              Around-the-clock support to help you with any challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-purple-800 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Enhance Your Business?</h2>
        <p className="mb-8 text-lg text-gray-300">
          Contact us today to discuss how we can support your goals.
        </p>
        <Link to="/contact">
          <button className="bg-gray-900 text-purple-400 font-bold py-3 px-6 rounded-lg hover:bg-gray-800 transition">
            Contact Us
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Services;
