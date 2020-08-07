const express = require('express');
const PostController = require('./controllers/PostController');
const UserController = require('./controllers/UserController');
// const SessionController = require('./controllers/SessionController');
const passport = require('passport');
// const initializePassport = require('./controllers/authentication');

// eslint-disable-next-line new-cap
const routes = express.Router();

routes.post('/post', PostController.createPost);

routes.post('/create', UserController.createUser);
routes.get('/get', UserController.getUsers);
routes.get('/getByEmail', UserController.findByEmail);

// initializePassport(passport);
// routes.post('/login/autenticacao', passport.authenticate('local', {
//   successRedirect: '/',
//   failureRedirect: '/login',
//   failureMessage: true,
// }));
// routes.post('/login',x)

module.exports = routes;
