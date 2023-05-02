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

//query 1
app.post('/data1', async (req, res) => {
  const inputData = req.body.data; //data from the request body
  //process the data (db code)
  const query = 'SELECT avg(Actor.Age) FROM Movie JOIN ActsIn JOIN Actor ON Movie.MovieId = ActsIn.MovieId AND ActsIn.ActorId = Actor.ActorId WHERE Movie.Title = ?';
  try {
    const avgAge = await db.raw(query, [inputData]); // returns [object Object]
    console.log(avgAge);
    const avgAgeString = JSON.stringify(avgAge);
    const outputData = `${avgAgeString}`;
    res.send(outputData); //send as response
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error'); // handle error response
  }
});

//query 2
app.post('/data2', async (req, res) => {
  const inputData1 = req.body.data1;
  console.log(inputData1);
  const inputData2 = req.body.data2; //data from the request body
  console.log(inputData2);
  //process the data (db code)
  const query = 'SELECT Movie.Title FROM Movie WHERE ReleaseYear BETWEEN ? AND ? ORDER BY Movie.Title ASC';
  try {
    const between = await db.raw(query, [inputData1, inputData2]); // returns [object Object]
    console.log(between);
    const betweenString = JSON.stringify(between);
    const outputData = `${betweenString}`;
    res.send(outputData); //send as response
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error'); // handle error response
  }
});

//query 3
app.post('/data3', async (req, res) => {
  const inputData = req.body.data; //data from the request body
  //process the data (db code)
  const query = 'SELECT DISTINCT Actor.FirstName, Actor.LastName, Actor.DOB, Actor.Nationality FROM Actor JOIN ActsIn JOIN Movie JOIN Produces JOIN ProductionStudio ON Actor.ActorId = ActsIn.ActorId AND ActsIn.MovieId = Movie.MovieId AND Movie.MovieId = Produces.MovieId AND Produces.StudioId = ProductionStudio.StudioId WHERE ProductionStudio.StudioName = ?';
  try {
    const actsInProd = await db.raw(query, [inputData]); // returns [object Object]
    console.log(actsInProd);
    const actsInProdString = JSON.stringify(actsInProd);
    const outputData = `${actsInProdString}`;
    res.send(outputData); //send as response
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error'); // handle error response
  }
});

//query 4
app.post('/data4', async (req, res) => {
  const inputData1 = req.body.data1;
  console.log(inputData1);
  const inputData2 = req.body.data2; //data from the request body
  console.log(inputData2);
  //process the data (db code)
  const query = 'SELECT GenreName, SUM(TicketsSold) AS TotalTicketSales FROM Genre JOIN Describes JOIN Movie ON Genre.GenreId = Describes.GenreId AND Movie.MovieId = Describes.MovieId GROUP BY Genre.GenreId ORDER BY TotalTicketSales DESC LIMIT (? - ?) OFFSET ?';
  try {
    const offset = await db.raw(query, [inputData2, inputData1, inputData1]); // returns [object Object]
    console.log(offset);
    const offsetString = JSON.stringify(offset);
    const outputData = `${offsetString}`;
    res.send(outputData); //send as response
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error'); // handle error response
  }
});

//query 5
app.post('/data5', async (req, res) => {
  const inputData1 = req.body.data1;
  console.log(inputData1);
  const inputData2 = req.body.data2; //data from the request body
  console.log(inputData2);
  //process the data (db code)
  const query = '';
  try {
    const grossing = await db.raw(query); // returns [object Object]
    console.log(grossing);
    const grossingString = JSON.stringify(grossing);
    const outputData = `${grossingString}`;
    res.send(outputData); //send as response
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error'); // handle error response
  }
});

//query 6
app.post('/data6', async (req, res) => {
  const inputData = req.body.data; //data from the request body
  //process the data (db code)
  const query = 'SELECT Actor.FirstName, Actor.LastName, COUNT(*) AS MovieCount FROM Actor JOIN ActsIn  ON Actor.ActorId = ActsIn.ActorId GROUP BY Actor.ActorId HAVING COUNT(*) = ( SELECT MAX(MovieCount) FROM ( SELECT COUNT(*) AS MovieCount FROM ActsIn GROUP BY ActorID ))';
  try {
    const queryData = await db.raw(query); // returns [object Object]
    console.log(queryData);
    const queryDataString = JSON.stringify(queryData);
    const outputData = `${queryDataString}`;
    res.send(outputData); //send as response
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error'); // handle error response
  }
});

//query 7
app.post('/data7', async (req, res) => {
  const inputData = req.body.data; //data from the request body
  //process the data (db code)
  const query = 'SELECT * FROM Movie';
  try {
    const queryData = await db.raw(query); // returns [object Object]
    console.log(queryData);
    const queryDataString = JSON.stringify(queryData);
    const outputData = `${queryDataString}`;
    res.send(outputData); //send as response
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error'); // handle error response
  }
});

//query 8
app.post('/data8', async (req, res) => {
  const inputData = req.body.data; //data from the request body
  //process the data (db code)
  const query = 'SELECT * FROM Actor';
  try {
    const queryData = await db.raw(query); // returns [object Object]
    console.log(queryData);
    const queryDataString = JSON.stringify(queryData);
    const outputData = `${queryDataString}`;
    res.send(outputData); //send as response
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error'); // handle error response
  }
});

//query 9
app.post('/data9', async (req, res) => {
  const inputData = req.body.data; //data from the request body
  //process the data (db code)
  const query = 'SELECT * FROM ProductionStudio';
  try {
    const queryData = await db.raw(query); // returns [object Object]
    console.log(queryData);
    const queryDataString = JSON.stringify(queryData);
    const outputData = `${queryDataString}`;
    res.send(outputData); //send as response
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error'); // handle error response
  }
});

//add movie
app.post('/add', async (req, res) => {

  const inputData1 = req.body.data1;
  console.log(inputData1);
  const inputData2 = req.body.data2;
  console.log(inputData2);
  const inputData3 = req.body.data3;
  console.log(inputData3);
  const inputData4 = req.body.data4;
  console.log(inputData4);
  const inputData5 = req.body.data5;
  console.log(inputData5);
  const inputData6 = req.body.data6;
  console.log(inputData6);
  const inputData7 = req.body.data7;
  console.log(inputData7);
  const inputData8 = req.body.data8;
  console.log(inputData8);


  //process the data (db code)
  const query = 'INSERT INTO Movie (TicketsSold, Rating, Language, ReleaseYear, Title, Summary, Seconds, Budget) VALUES (?, ?, ?, ?, ?, ?, ?, ?);';
  try {
    const add = await db.raw(query, [inputData1, inputData2, inputData3, inputData4, inputData5, inputData6, inputData7, inputData8]); // returns [object Object]
    console.log(add);
    const addString = JSON.stringify(add);
    const outputData = 'successful';
    res.send(outputData); //send as response
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error'); // handle error response
  }
});

//update
app.post('/update', async (req, res) => {

  const inputData1 = req.body.data1;
  console.log(inputData1);
  const inputData2 = req.body.data2;
  console.log(inputData2);
  const inputData3 = req.body.data3;
  console.log(inputData3);
  const inputData4 = req.body.data4;
  console.log(inputData4);
  const inputData5 = req.body.data5;
  console.log(inputData5);
  const inputData6 = req.body.data6;
  console.log(inputData6);

  //process the data (db code)
  const searchQuery = 'UPDATE Actor SET Nationality = ?, Age = ?, FirstName = ?, LastName = ? WHERE FirstName = ? AND LastName = ?';
  try {
    const search = await db.raw(searchQuery, [inputData6, inputData5, inputData3, inputData4, inputData1, inputData2]);
    console.log(search);
    const searchString = JSON.stringify(search);
    const outputData = 'successful';
    res.send(outputData); //send as response
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error'); // handle error response
  }
});

//delete
app.post('/delete', async (req, res) => {

  const inputData1 = req.body.data1;
  console.log(inputData1);

  //process the data (db code)
  const query = 'DELETE FROM ProductionStudio WHERE StudioName = ?';
  try {
    const destroy = await db.raw(query, [inputData1]);
    console.log(destroy);
    const destroyString = JSON.stringify(destroy);
    const outputData = 'successful';
    res.send(outputData); //send as response
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error'); // handle error response
  }
});

//clear

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
