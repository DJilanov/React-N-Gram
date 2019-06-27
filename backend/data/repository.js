// Add all of the used models to the db
const db = {
  'Message': require('./db/models/message')
};

const init = () => {
  const create = request => 
    db[request.modelName].create(request.newObject);

  const find = request =>
    db[request.modelName].find(request.options);

  const update = request => {
    // Remove the ID from the requester as soemthign we must not update
    let keys = Object.keys(request.updatedRecord).filter(key => key !== '_id');
    let setter = {};
    for(let counter = 0; counter < keys.length; counter++) {
      setter[keys[counter]] = request.updatedRecord[keys[counter]]
    }
    return db[request.modelName].findOneAndUpdate(
      request.updatedRecord._id, { 
        $set: setter
      }, {
        new: true,
        returnOriginal: false
      }
    );
  }

  const remove = request =>
    db[request.modelName].deleteOne({ _id: request.record._id })

  return {
    create,
    find,
    update,
    remove
  };
};

module.exports = { init };
