import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-100">
            Welcome to Our Platform
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            Discover the most innovative solutions to streamline your workflow.
          </p>
          <Link to="/login">
            <button className="bg-purple-600 text-gray-100 font-bold py-3 px-6 rounded-lg hover:bg-purple-700 transition">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 shadow-lg p-6 rounded-xl text-center">
            <h3 className="text-xl font-semibold text-gray-100 mb-4">User-Friendly Interface</h3>
            <p className="text-gray-400">
              Our platform is designed with simplicity in mind, allowing you to get more done with ease.
            </p>
          </div>
          <div className="bg-gray-800 shadow-lg p-6 rounded-xl text-center">
            <h3 className="text-xl font-semibold text-gray-100 mb-4">Secure & Reliable</h3>
            <p className="text-gray-400">
              Security is our top priority. We ensure your data is protected with advanced encryption.
            </p>
          </div>
          <div className="bg-gray-800 shadow-lg p-6 rounded-xl text-center">
            <h3 className="text-xl font-semibold text-gray-100 mb-4">24/7 Customer Support</h3>
            <p className="text-gray-400">
              Our dedicated team is available around the clock to help you with any issues.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-purple-800 py-16 text-center text-gray-100">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="mb-8 text-lg text-gray-300">
          Join thousands of satisfied users and experience the difference.
        </p>
        <Link to="/login">
          <button className="bg-gray-900 text-purple-400 font-bold py-3 px-6 rounded-lg hover:bg-gray-800 transition">
            Join Us Today
          </button>
        </Link>
      </section>
    </div>
  );
};

export default About;
