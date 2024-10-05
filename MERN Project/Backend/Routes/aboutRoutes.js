const express = require('express');
const About = require('../Controller/aboutController');

const aboutRoutes = express.Router();    

aboutRoutes.get('/aboutPage',About);

module.exports = aboutRoutes;