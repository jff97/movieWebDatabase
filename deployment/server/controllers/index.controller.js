var express = require('express');
const db = require('../db/db.js');

async function getAllMovies(req, res, next) {
    const allMovies = db.raw('SELECT * FROM Movie')
    .catch((err) => {
        err.status = 400;
        error.message = "Failed to fetch users";
        next(err);
    });
    
    res.json(allMovies);
    //req.body(allMovies)
    //console.log(allMovies);

    allMovies.then(function(result) {
        console.log(result);
        //res.json(allMovies);
    });
    //console.log(req);
}

function test (req, res, next) {
    res.json('index', { title: 'Express' });
    console.log("hello");

    
}

module.exports = {
    getAllMovies, test
};