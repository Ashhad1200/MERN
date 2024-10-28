
const express = require('express');
const { FeedBackForm, GetUserComments } = require('../Controller/contactUsController');

const feedBackRoutes = express.Router();

feedBackRoutes.post('/feedBack', FeedBackForm);
feedBackRoutes.get('/allComments', GetUserComments);

module.exports = feedBackRoutes;