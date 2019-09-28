const { Hero, validate } = require('../models/hero');
const mongooseLoader = require('../config/mongooseLoader');
const express = require('express');
const router = express.Router();

const mongoDbConn = mongooseLoader.getConnection();
mongoDbConn
  .then(ans => console.log(ans))
  .catch(err => console.log(err));

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
