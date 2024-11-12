const express = require('express');
const User = require("../Controller/userController");

const userRoutes = express.Router();

userRoutes.get('/userProfile' , User);

module.exports = userRoutes;
