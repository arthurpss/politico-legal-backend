const UserController = require('./UserController');
const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

module.exports = {
    async authenticateUser() {
        passport.use(new LocalStrategy(
            function(email, password, done) {
                // const {userEmail, password} = await connection('user').select('email, password').from('user');
                UserController.findByEmail(email, function(err, user) {
                    if (err) {
                        return done(err);
                    }
                    if (!user) {
                        return done(null, false);
                    }
                    try {
                        bcrypt.compare(password, user.hashPassword) ?
                            done(null, user) :
                            done(null, false)
                    } catch(e) {
                        return done(e);
                    }
                    
                    return done(null, user);
                });
            },
        ));
    },
};