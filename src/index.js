const express = require('express');
const routes = require('./routes');

const passport = require('passport');
const session = require("express-session");
const bodyParser = require("body-parser");
const userController = require('./controllers/UserController');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;

const app = express();

app.use(express.json());
app.use(routes);

passport.use(new LocalStrategy({
    usernameField: 'email'
},
    function(email, password, done) {
        console.log(email, password);
        userController.findByEmail(email).then(async (err, user) => {
            if (err) {
                return done(err, {message: "Erro"});
            }
            if (!user) {
                console.log("Usuario nao encontrado")
                return done(null, false, { message: 'Usuário não existe' });
            }
            console.log("Usuario encontrado")
            try {
                if(await bcrypt.compare(password, user.hashPassword)){
                    console.log("Login realizado")
                    return done(null, user)
                } else {
                    return done(null, false, { message: 'Senha incorreta' })
                } 
            } catch(e) {
                return done(e);
            }
        });        
    },
));

passport.serializeUser((user, cb) => cb(null, user.id));
  
passport.deserializeUser((id, cb) => userController.findById(id, (err, user) =>
    err ? cb(err) : cb(null, user)
));

app.use(express.static("public"));
app.use(session({ secret: 'segredo', resave: false, saveUninitialized: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

app.listen(3333);
