var express = require('express');
var router = express.Router();
const db = require('../database/queries');
const database = require('../database');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WEBISH' });
});

module.exports = router;
