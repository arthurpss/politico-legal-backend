const express = require('express');
const routes = require('./routes');
const passport = require('passport');

const app = express();

app.use(express.json());
app.use(routes);
app.use(passport.initialize());
app.use(passport.session());

app.listen(3333);
