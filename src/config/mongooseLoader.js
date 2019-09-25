/* jshint esversion: 6 */
const mongoose = require('mongoose');
const config = require('./index');

async function mongoDbConnection() {
  try {
    return await mongoose.connect(config.db.dbUrl, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
  } catch (error) {
    return new Error(`Something went wrong: ${error}`);
  }
}

module.exports.getConnection = mongoDbConnection;