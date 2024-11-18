import { useDeleteService } from '../Hooks/delete';
import { useGetServices } from '../Hooks/useGetServices';
import LoadingScreen from './Loader';

const ViewServices = () => {
    // Fetching services data
    const { data: services, isLoading, isError, error } = useGetServices();
    const { mutate, isLoading: isDeleting } = useDeleteService();

    // Display loader during data fetch
    if (isLoading) {
        return <LoadingScreen />;
    }

    // Display error if fetching fails
    if (isError) {
        return (
            <div className="container mx-auto py-16 text-center">
                <p className="text-red-500 text-xl">Error: {error.message}</p>
            </div>
        );
    }

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this Service?")) {
            mutate(id, {
                onSuccess: () => {
                    alert("Service successfully deleted.");
                },
                onError: (err) => {
                    console.error("Failed to delete Service:", err);
                    alert("Failed to delete Service.");
                },
            });
        }
    };

    return (
        <section className="container mx-auto py-16 px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-purple-500">
                Our Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {/* Map through services and render them dynamically */}
                {services.map((service) => (
                    <div
                        key={service._id} // assuming each service has a unique '_id' field
                        className="bg-gray-800 shadow-lg p-6 rounded-xl text-center transition-transform transform hover:scale-105"
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-purple-400">
                            {service.name} {/* Displaying the service name */}
                        </h3>
                        <p className="text-gray-400">
                            {service.description} {/* Displaying the service description */}
                        </p>

                        <button
                            onClick={() => handleDelete(service._id)}
                            disabled={isDeleting}
                            className={`text-white px-4 py-2 rounded-md w-full mt-6 ${
                                isDeleting
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-red-500 hover:bg-red-600'
                            }`}
                        >
                            {isDeleting ? 'Deleting...' : 'Delete'}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ViewServices;
