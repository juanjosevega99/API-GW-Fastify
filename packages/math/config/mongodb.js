const prefix = require('./environment');

module.exports = {
  uri: process.env[`${prefix}MONGO_URI`],
  user: process.env[`${prefix}MONGO_USER`],
  password: process.env[`${prefix}MONGO_PASS`]
};
