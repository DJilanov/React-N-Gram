const { Router } = require('express');

const attachTo = (app, repository) => {
  const router = new Router();
  // const validator = require('./ngrams-validator')();
  const ngramsController = require('./ngrams-controller')(repository);

  router
    .get('/ngrams', ngramsController.getNgrams)

  app.use('/api', router);
};

module.exports = { attachTo };
