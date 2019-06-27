const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const init = async (repository) => {
  const app = express();

  // Cors
  app.use(cors());

  // Logger
  app.use(morgan('dev', {
    skip: (req, res) => res.statusCode < 400,
  }));

  // static folder for testing
  // app.use('/static', express.static(path.join(__dirname, '..', '..', '..', 'client/build')));

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cookieParser());

  // Routers
  require('./../../routes/messages/messages-router').attachTo(app, repository);

  // Errors handlers
  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    next(createError(404));
  });
  app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    next();
  });

  return app;
};

module.exports = { init };
