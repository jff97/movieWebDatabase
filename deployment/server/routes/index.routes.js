var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const db = require('../db/db.js');
const { getAllMovies, test } = require('../controllers/index.controller.js');
// const db = require('../db/db');

router.use(bodyParser.json());

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('hello');
});

router.post('/api', async function(req, res) {
  try {
    const { sql } = req.body;

    //process the data
    const query = db.raw(sql);

    //prep response data
    const responseData = {
      result: query,
      message: 'Processed successfully'
    };

    res.json(responseData);
  } catch (err) {
    //handle the error
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
  
});

router.get('/movies', getAllMovies);
//router.post('/movies', getAllMovies);

module.exports = router;
