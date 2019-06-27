const modelName = 'Message';

const messageController = (repository) => {
  const createMessage = async (req, res) => {
    const messageData = req.body;
    return repository.create({ modelName, newObject: messageData })
      .then((response) => {
        if (response.ok !== 0) {
          res.status(200).send(response._doc);
        } else {
          res.status(400).send(
            {
              error: response,
              isSuccessful: false,
              message: 'Provide a correct portfolio ID!'
            }
          );
        }
      })
      .catch(error => console.log(error));
  };

  const editMessage = async (req, res) => {
    const messageData = req.body;
    return repository.update({ modelName, updatedRecord: messageData })
      .then((response) => {
        if (response.ok !== 0) {
          res.status(200).send(response._doc);
        } else {
          res.status(400).send(
            {
              error: response,
              isSuccessful: false,
              message: 'Provide a correct portfolio ID!'
            }
          );
        }
      })
      .catch(error => console.log(error));
  };

  const deleteMessage = async (req, res) => {
    const messageData = req.body;
    // Currently we use the delete as flag, not as real delete so we just update the element.
    if (messageData.forced) {
      return repository.remove({ modelName, record: messageData })
        .then((response) => {
          if (response.ok !== 0) {
            res.status(200).send(response._doc);
          } else {
            res.status(400).send(
              {
                error: response,
                isSuccessful: false,
                message: 'Provide a correct portfolio ID!'
              }
            );
          }
        })
        .catch(error => console.log(error));
    } else {
      return repository.update({ modelName, updatedRecord: messageData })
        .then((response) => {
          if (response.ok !== 0) {
            res.status(200).send(response._doc);
          } else {
            res.status(400).send(
              {
                error: response,
                isSuccessful: false,
                message: 'Provide a correct portfolio ID!'
              }
            );
          }
        })
        .catch(error => console.log(error));
    }
  };

  const getMessages = async (req, res) => {
    return repository.find({ modelName })
      .then((response) => {
        if (response.ok !== 0) {
          res.status(200).send(response);
        } else {
          res.status(400).send(
            {
              error: response,
              isSuccessful: false,
              message: 'Provide a correct portfolio ID!'
            }
          );
        }
      })
      .catch(error => console.log(error));
  };

  return {
    createMessage,
    editMessage,
    deleteMessage,
    getMessages
  };
};

module.exports = messageController;
