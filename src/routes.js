const express = require('express');
const PostController = require('./controllers/PostController');
const UserController = require('./controllers/UserController');
const passport = require('passport');

// eslint-disable-next-line new-cap
const routes = express.Router();

routes.post('/post', PostController.createPost);

routes.post('/create', UserController.createUser);
routes.get('/get', UserController.getUsers);
routes.get('/getByEmail', UserController.findByEmail);

routes.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/'
}));

module.exports = routes;
