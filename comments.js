// create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// set up the template engine
app.set('view engine', 'ejs');
// set up the static file server
app.use(express.static('public'));

// create a list of comments
var comments = [
  {name: 'John', message: 'Hello'},
  {name: 'Jane', message: 'Hi'}
];