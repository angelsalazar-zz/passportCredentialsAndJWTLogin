import './config'
import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import passport from 'passport'

import api from './routes'
import './services/passport.service';

const app = express();

app.use(morgan('dev'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.use(passport.initialize());

app.use('/api/v1', api(express));

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server running on port ${process.env.PORT}`);
  }
})
