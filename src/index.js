const express = require('express');
const routes = require('./routes');
require('dotenv').config()

const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const userController = require('./controllers/UserController');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const cors = require('cors');

const app = express();

passport.use(new LocalStrategy({
  usernameField: 'email',
},
    function(email, password, done) {
        console.log(email, password);
        userController.findByEmail(email).then(async (user) => {
            if (!user) {
                console.log("Usuario nao encotrado")
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

passport.serializeUser((user, done) => done(null, user.user_id));
passport.deserializeUser((id, done) => userController.findById(id, (err, user) => {
    console.log(id, user, err)
    if(err){
        return done(null, err);
    } else {
        return done(null, user);
    }
}));

app.use(express.json());
app.use(cors());
app.use(express.static("public"));
app.use(session({ secret: process.env.secret, resave: false, saveUninitialized: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

app.listen(3333);
