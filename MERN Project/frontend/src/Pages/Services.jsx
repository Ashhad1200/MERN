import { Link } from "react-router-dom";
import { useGetServices } from "../Hooks/useGetServices";
import LoadingScreen from "../Components/Loader";

const Services = () => {
  const { data: services, isLoading: isLoadingServices, error: errorServices } = useGetServices();

  if (isLoadingServices) {
    return <LoadingScreen/>;
  }

  if (errorServices) {
    return <div>Error: {errorServices.message}</div>;
  }

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
          {/* Map through services and render them dynamically */}
          {services.map((service) => (
            <div
              key={service.id} // assuming each service has a unique 'id' field
              className="bg-gray-800 shadow-lg p-6 rounded-xl text-center transition-transform transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">
                {service.name} {/* Displaying the service name */}
              </h3>
              <p className="text-gray-400">
                {service.description} {/* Displaying the service description */}
              </p>
            </div>
          ))}
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
