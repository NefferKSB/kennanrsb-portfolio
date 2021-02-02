const express = require('express');
const bodyParser = require('body-parser');
const sendMail = require('./routes/mailHandler');
const app = express();
require('dotenv').config();

app.use(bodyParser.json());

//Disable CORs
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
  next();
});

app.use('/api/sendmail', sendMail);
module.exports = app;
