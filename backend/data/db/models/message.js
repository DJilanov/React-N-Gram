const mongoose = require('mongoose');
const uuid = require('uuid');

module.exports = mongoose.model(
  'Message', 
  {
    _id: { 
      type: String, 
      default: uuid.v4
    },
    text: {
      type: String
    },
    deleted: {
      type: Boolean,
      default: false
    }
  }
);