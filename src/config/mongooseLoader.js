/* jshint esversion: 6 */
const mongoose = require('mongoose');
const { db } = require('./index');

async function mongoDbConnection() {
  console.log(`trying to connect at: ${db.dbUrl}`);
  try {
    return await mongoose.connect(db.dbUrl, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
  } catch (error) {
    return new Error(`Something went wrong: ${error}`);
  }
}

module.exports.getConnection = mongoDbConnection;