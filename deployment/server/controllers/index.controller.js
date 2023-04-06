const db = require('../db/db');

function getAllMovies(req, res, next) {
    const allMovies = db.raw('SELECT * FROM Movie');

    res.json(allMovies);
    console.log(allMovies);
}

module.exports = {
    getAllMovies
};