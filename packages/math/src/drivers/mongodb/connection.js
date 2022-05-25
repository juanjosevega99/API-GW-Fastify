const Mongoose = require('mongoose');

const config = require('../../../config/mongodb');
const Logger = require('../../utils/logger');

Mongoose.Promise = global.Promise;

const db = Mongoose.createConnection(config.uri, {
  useNewUrlParser: true,
  auth: {
    user: config.user,
    password: config.pass
  }
});

db.on('error', function (err) {
  Logger.error(`[mongodb]: Connection error event ${err.message}`);
  process.exit(1);
});

db.once('open', () => Logger.info('[mongodb]) Connection opened'));
db.once('connected', () =>
  Logger.debug('[mongodb]) Connection connection opened')
);
db.once('disconnected', () =>
  Logger.debug('[mongodb]) Connection was disconnected')
);

process.on('SIGINT', function () {
  db.close(function () {
    Logger.info('[mongodb]: Connection was forced to disconnect');

    process.exit(1);
  });
});

module.exports = db;
