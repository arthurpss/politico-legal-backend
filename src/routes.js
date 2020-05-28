const express = require('express');
const PostController = require('./controllers/PostController');
const UserController = require('./controllers/UserController');
// eslint-disable-next-line new-cap
const routes = express.Router();

routes.post('/post', PostController.create);
routes.get('/lista', UserController.get);
routes.post('/create', UserController.create);

module.exports = routes;
