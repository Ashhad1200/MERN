const Services = require("../Model/servicesSchema");

const servicesForm = async (req, res) => {
    try {
        const { name, description } = req.body;

        const servicesFormCreated = await Services.create({
            name,
            description
        });

        return res.status(201).json({
            success: "Service Added successfully",
            servicesDetails: servicesFormCreated
        });

    } catch (error) {
        console.error("Submission error:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

const DeleteService = async (req, res) => {
    const { id } = req.params;
    try {
      const result = await Services.findByIdAndDelete(id); // Use the correct model name
      if (!result) {
        return res.status(404).json({ message: "Services not found" });
      }
      res
        .status(200)
        .json({ message: "Services deleted successfully", deletedServices: result });
    } catch (error) {
      console.error("Error deleting Services:", error);
      res
        .status(500)
        .json({ message: "Failed to delete Services", error: error.message });
    }
  };


const GetServices = async (req, res) => {
    try {
        const services = await Services.find();
        res.status(200).json(services);
    } catch (err) {
        console.error('Error fetching Services:', err);
        res.status(500).json({ message: 'Error fetching Services' });
    }
};

module.exports = { servicesForm, GetServices, DeleteService };
