const express = require('express');
const PostController = require('./controllers/PostController');

// eslint-disable-next-line new-cap
const routes = express.Router();

routes.post('/post', PostController.create);

module.exports = routes;
