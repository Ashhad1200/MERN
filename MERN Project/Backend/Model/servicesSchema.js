const mongoose = require("mongoose");

const servicesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const Services = mongoose.model("services", servicesSchema);

module.exports = Services;
