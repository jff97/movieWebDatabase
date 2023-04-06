var express = require('express');
var router = express.Router();
const { getAllMovies } = require('../controllers/index.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/movies', getAllMovies);

module.exports = router;
