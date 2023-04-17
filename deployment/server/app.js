var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var db = require('./db/db.js');

var indexRouter = require('./routes/index.routes.js');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//quey 1
app.post('/data', async (req, res) => {
  const inputData = req.body.data; //data from the request body
  //process the data (db code)
  const query = 'SELECT avg(Actor.Age) FROM Movie JOIN ActsIn JOIN Actor ON Movie.MovieId = ActsIn.MovieId AND ActsIn.ActorId = Actor.ActorId WHERE Movie.Title = ?';
  try {
    const avgAge = await db.raw(query, [inputData]); // returns [object Object]
    console.log(avgAge);
    const avgAgeString = JSON.stringify(avgAge);
    const outputData = `Processed data: ${avgAgeString}`;
    res.send(outputData); //send as response
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error'); // handle error response
  }
});

//query 2
app.post('/data', async (req, res) => {
  const inputData1 = req.body.data1;
  const inputData2 = req.body.data2; //data from the request body
  //process the data (db code)
  const query = '';
  try {
    const between = await db.raw(query, [inputData1], [inputData2]); // returns [object Object]
    console.log(between);
    const betweenString = JSON.stringify(between);
    const outputData = `Processed data: ${betweenString}`;
    res.send(outputData); //send as response
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error'); // handle error response
  }
});

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err });
});

module.exports = app;
