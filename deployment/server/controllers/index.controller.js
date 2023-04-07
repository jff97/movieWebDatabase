var express = require('express');
var bodyParser = require("body-parser");
const db = require('../db/db.js');


async function getAllMovies(req, res, next) {
    const allMovies = db.raw('SELECT * FROM Movie')
    .catch((err) => {
        err.status = 400;
        error.message = "Failed to fetch users";
        next(err);
    });
    
    res.json(allMovies);

    allMovies.then(function(result) {
        console.log(result);
    });
}

function test (req, res, next) {
    res.json('index', { title: 'Express' });
    console.log("hello");

    
}

module.exports = {
    getAllMovies, test
};