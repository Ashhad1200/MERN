const express = require('express');
const { Login, Registration, GetUsers } = require('../Controller/authController');

const authRoutes = express.Router();

authRoutes.post('/login',Login)

authRoutes.post('/registration',Registration)

authRoutes.get('/users',GetUsers)

module.exports = authRoutes;