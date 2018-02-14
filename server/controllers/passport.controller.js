import passport from 'passport'
import jwt from 'jsonwebtoken'

export const auth = passport.authenticate('local', {
  failureRedirect: '/login'
});

export const createJWT = (req, res) => {
  const token = jwt.sign({
    id : req.user.id
  }, process.env.JWT_SECRET , {
    expiresIn : 60 * 60
  });

  res.json({
    message : 'authenticated',
    token
  });
}

export const getAuthUser = (req, res) => {
  res.json({
    user : req.user
  })
}

export const logOut = (req, res) => {
  req.logOut();

  res.status(204).json()
}
