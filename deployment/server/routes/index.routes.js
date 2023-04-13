var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const db = require('../db/db.js');
const { getAllMovies, test } = require('../controllers/index.controller.js');
// const db = require('../db/db');

router.use(bodyParser.json());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json('index', { title: 'Express' });
  console.log('hello');
});

router.post('/', async function(req, res) {
  const { sql } = req.body;

  //process the data
  const query = db.raw(sql);

  //prep response data
  const responseData = {
    result: query,
    message: 'Processed successfully'
  };

  res.json(responseData);
});

router.get('/movies', getAllMovies);
//router.post('/movies', getAllMovies);

module.exports = router;
