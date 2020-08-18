const express = require('express');
const PostController = require('./controllers/PostController');
const UserController = require('./controllers/UserController');
const passport = require('passport');

const routes = express.Router();

routes.post('/create-post', PostController.createPost);
routes.get('/get-posts', PostController.getPosts);

routes.post('/create-user', UserController.createUser);
routes.get('/get-users', UserController.getUsers);
routes.get('/get-user', UserController.findByEmail);

routes.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/'
}));

module.exports = routes;
