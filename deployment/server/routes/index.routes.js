var express = require('express');
var router = express.Router();
const { getAllMovies, test } = require('../controllers/index.controller.js');
// const db = require('../db/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json('index', { title: 'Express' });
  console.log('hello');
});

router.get('/movies', getAllMovies);
//router.post('/movies', getAllMovies);

module.exports = router;
