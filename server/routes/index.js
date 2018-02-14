import { credentialsAuth, jwtAuth } from '../middlewares/auth.middleware'

import * as PassportCtrl from '../controllers/passport.controller';


export default (express) => {
  const api = express.Router();
  api.route('/')
    .get((req, res) => {
      res.json({
        message : 'hello world'
      })
    });

  api.route('/login')
    .post(credentialsAuth, PassportCtrl.createJWT);

  api.route('/user')
    .get(jwtAuth, PassportCtrl.getAuthUser);

  api.route('/logout')
    .get(jwtAuth, PassportCtrl.logOut);

  return api;
}
