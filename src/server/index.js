'use strict';

var express   = require('express');
var path      = require('path');

var app       = express();
var DOCS_PATH = '../../';

app.use(express.static(path.join(__dirname, DOCS_PATH)));

app.get('/', function (req, res) {
  return res.sendFile(path.join(__dirname, '../../', 'index.html'));
});

app.listen(8081, 'localhost', function () {
  console.log('Minimalist production server running on localhost:8081');
});
