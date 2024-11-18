
const express = require('express');
const { FeedBackForm, GetUserComments, DeleteComment } = require('../Controller/contactUsController');

const feedBackRoutes = express.Router();

feedBackRoutes.post('/feedBack', FeedBackForm);
feedBackRoutes.get('/allComments', GetUserComments);
feedBackRoutes.delete('/allComments/:id', DeleteComment);
module.exports = feedBackRoutes;