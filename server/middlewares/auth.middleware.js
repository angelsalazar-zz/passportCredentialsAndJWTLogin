import passport from 'passport'

export const credentialsAuth = passport.authenticate('local', {
  failureRedirect: '/login'
});

export const jwtAuth = passport.authenticate('jwt', {
  session : false
});
