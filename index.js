/* jshint esversion: 6 */

const express = require('express');
const engine = require('ejs-mate');
const chuckNorris = require('./lib/chucknorris');
const app = express();

app.get('/joke', function(request, response) {
  const url = 'http://api.icndb.com/jokes/random';
  chuckNorris.getJoke(url)
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    const jokeObject = data.value;
    // rende ejs file out to response with joke object
    response.render('joke', jokeObject);
  });
});

// Server port number
const PORT = 3000;

// Change my view engine in express to be ejs file type
app.engine('ejs', engine);

// app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// my routes
app.get('/', function(request, response) {
  // render ejs file out to response
  response.render('home');
});

app.get('/resume', function(request, response) {
  // render ejs file out to response
  response.render('resume');
});

app.get('/aboutme', function(request, response) {
  // render ejs file out to response
  response.render('aboutme');
});

app.get('/joke', function(request, response) {
  // render ejs file out to response
  response.render('joke');
});

// tell the server to run on port 3000 || whatever I change PORT to
app.listen(3000, function() {
  console.log(`app running on http://localhost:${PORT}`);
});
