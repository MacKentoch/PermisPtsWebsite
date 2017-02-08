/* eslint-disable no-var, no-console */

'use strict';

const express   = require('express');
const path      = require('path');

const app       = express();
const STATICS_PATH = '../../';

app.use(express.static(path.join(__dirname, STATICS_PATH)));

app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, '../../', 'index.html'));
});

app.listen(8081, 'localhost', () => {
  console.log('Minimalist production server running on localhost:8081');
});
