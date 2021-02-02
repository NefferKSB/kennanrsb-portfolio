const express = require('express');
const bodyParser = require('body-parser');
const sendMail = require('./routes/mailHandler');
const app = express();
require('dotenv').config();

app.use(bodyParser.json());

//Disable CORs
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  next();
});

app.use('/sendmail', sendMail);
module.exports = app;
