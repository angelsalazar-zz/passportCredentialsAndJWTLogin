import passport from 'passport'
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt'
import { Strategy as LocalStrategy } from 'passport-local'


const localStrategyHandler = async (email, password, done) => {
  try {
    if (email !== 'demo@demo.com' &&
        password !== '123456') {
      return done({ message : 'Incorrect username and password' })
    }

    done(null, {
      id : '123',
      email : 'demo@demo.com',
      name : 'Tester'
    });
  } catch (e) {
    const error = e.message;
    done({ error }, null);
  }
}

const jwtStrategyHandler = (jwtPayload, done) => {
  if (jwtPayload.id !== '123') {
    return done({ message : 'invalid' });
  }

  done(null, {
    id : '123',
    email : 'demo@demo.com',
    name : 'Tester'
  })
}


passport.serializeUser((user, done) => {
    done(null, user.id)
});

passport.deserializeUser((id, done) => {
  done(null, {
    id : '123',
    email : 'demo@demo.com',
    name : 'Tester'
  })
});

passport.use(new LocalStrategy ({
  usernameField : 'email',
  passwordField : 'password',
  session : false
}, localStrategyHandler));

passport.use(new JWTStrategy ({
  jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey : process.env.JWT_SECRET
}, jwtStrategyHandler))
