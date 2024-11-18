const express = require("express");
const { servicesForm, GetServices, DeleteService } = require("../Controller/servicesController");


const servicesRoutes = express.Router();

servicesRoutes.post("/addServices", servicesForm);
servicesRoutes.get("/allServices", GetServices);
servicesRoutes.delete("/allServices/:id", DeleteService);

module.exports = servicesRoutes;
