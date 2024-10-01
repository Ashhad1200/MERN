const express = require('express');
const Home = require('../Controller/homeController');

const homeRoutes = express.Router();    


homeRoutes.get('/',Home)

module.exports = homeRoutes;