const express = require('express');
const { Login, Registration } = require('../Controller/authController');

const authRoutes = express.Router();

authRoutes.get('/login',Login)

authRoutes.get('/registration',Registration)

module.exports = authRoutes;