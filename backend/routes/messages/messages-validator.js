const validator = require('validator');

const messageValidator = () => {
  const verifyCreateMessage = (req, res, next) => {
    const payload = req.body;

    if (!payload || typeof payload.text !== 'string' || !validator.isLength(payload.text, { min: 1, max: 256 })) {
      return res.status(400).send({ isSuccessful: false, message: 'Invalid text!' });
    }

    if (!payload || typeof payload.deleted !== 'boolean') {
      return res.status(400).send({ isSuccessful: false, message: 'Invalid deleted type!' });
    }

    return next();
  };
  const verifyEditMessage = (req, res, next) => {
    const payload = req.body;

    if (!payload || !payload.hasOwnProperty('_id') || typeof payload._id !== 'string' || !validator.isLength(payload._id, { min: 35, max: 37 })) {
      return res.status(400).send({ isSuccessful: false, message: 'Provide a correct portfolio ID!' });
    }

    if (!payload || typeof payload.text !== 'string' || !validator.isLength(payload.text, { min: 1, max: 256 })) {
      return res.status(400).send({ isSuccessful: false, message: 'Invalid text!' });
    }

    if (!payload || typeof payload.deleted !== 'boolean') {
      return res.status(400).send({ isSuccessful: false, message: 'Invalid deleted type!' });
    }

    return next();
  };
  const verifyDeleteMessage = (req, res, next) => {
    const payload = req.body;

    if (!payload || !payload.hasOwnProperty('_id') || typeof payload._id !== 'string' || !validator.isLength(payload._id, { min: 35, max: 37 })) {
      return res.status(400).send({ isSuccessful: false, message: 'Provide a correct portfolio ID!' });
    }

    if (!payload || typeof payload.deleted !== 'boolean') {
      return res.status(400).send({ isSuccessful: false, message: 'Invalid deleted type!' });
    }

    return next();
  };

  return {
    verifyCreateMessage,
    verifyEditMessage,
    verifyDeleteMessage
  };
};

module.exports = messageValidator;
