
const express = require('express');
const { FeedBackForm } = require('../Controller/contactUsController');

const feedBackRoutes = express.Router();    

feedBackRoutes.post('/feedBack',FeedBackForm);

module.exports = feedBackRoutes;