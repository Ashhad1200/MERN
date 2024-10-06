const express = require('express');
const User = require("../Controller/userController");

const userRoutes = express.Router();

userRoutes.get('/:id', User);

module.exports = userRoutes;
