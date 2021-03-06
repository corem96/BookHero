/* jshint esversion: 6 */
const express = require('express');
const path = require('path');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');
const createError = require('http-errors');
const cors = require('cors');
const config = require('./config');

// Router
const home = require('./routes/home');
const heroes = require('./routes/heroes');
const mongooseLoader = require('./config/mongooseLoader');

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
const app = express();

app.set('config', config);
app.use(cors());
// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

try {
  const mongoDb = mongooseLoader.getConnection();
  console.log(mongoDb);
  // mongoDb.on('connected', () => {
  //   console.log(`mongoose successfully connected`);
  // });
} catch(err) {
  console.log(err);
}

app.use('/', home);
app.use('/api/heroes', heroes);

// catch 404 and forward to error handler
app.use((req, res, next) => next(createError(404)));

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({error: err});
});

module.exports = app;
