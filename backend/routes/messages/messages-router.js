const { Router } = require('express');

const attachTo = (app, repository) => {
  const router = new Router();
  const validator = require('./messages-validator')();
  const messagesController = require('./messages-controller')(repository);

  router
    .get('/messages', messagesController.getMessages)
    .patch('/message', validator.verifyEditMessage, messagesController.editMessage)
    .post('/message', validator.verifyCreateMessage, messagesController.createMessage)
    .delete('/message', validator.verifyDeleteMessage, messagesController.deleteMessage)

  app.use('/api', router);
};

module.exports = { attachTo };
