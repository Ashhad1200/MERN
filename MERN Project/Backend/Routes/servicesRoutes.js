const express = require("express");
const { servicesForm, GetServices } = require("../Controller/servicesController");


const servicesRoutes = express.Router();

servicesRoutes.post("/addServices", servicesForm);
servicesRoutes.get("/allServices", GetServices);

module.exports = servicesRoutes;
