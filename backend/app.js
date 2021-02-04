require('dotenv').config({path: __dirname + '/.env'});
const express = require('express');
const bodyParser = require('body-parser');
const sendMail = require('./routes/mailHandler');
const app = express();

//Disable CORs
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
  next();
});

app.use(bodyParser.json());

app.use('/api', sendMail);
module.exports = app;
