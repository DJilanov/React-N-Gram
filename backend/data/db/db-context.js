const mongoose = require('mongoose');
// Initialize the database connector
const init = databaseConfig => new Promise((resolve) => {
  connectDb(databaseConfig, resolve);
});

const connectDb = (databaseConfig, resolve) => {
  // If the connection throws an error
  mongoose.connection.on('error', (err) => {
    console.log('[dbConnector]Mongoose default connection error: ' + err);
    mongoose.disconnect();
  });

  // When the connection is disconnected try to reconnect manually
  mongoose.connection.on('disconnected', () => {
    console.log('[dbConnector]Mongoose default connection disconnected');
    mongoose.connect(databaseConfig.dbAddress, { useNewUrlParser: true });
  });

  // If the Node process ends, close the Mongoose connection
  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('[dbConnector]Mongoose default connection disconnected through app termination');
      process.exit(0);
    });
  });
  // get database
  mongoose.connect(databaseConfig.dbAddress, { useNewUrlParser: true } ,(err) => {
    // if we failed to connect, abort
    if (err) {
      throw err;
    }
    resolve(true);
  })
}

module.exports = {
  init
};
