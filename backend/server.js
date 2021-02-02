const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const port = normalizePort(process.env.PORT || "3000");

//Disable CORs
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  next();
});

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`The server started on port ${port}.`);
})

app.post('/sendmail', (req, res) => {
  let user = req.body;
  sendMail(user, info => {
    //console.log(`The mail has been sent, the id is ${info.messageId}`);
    res.send(info);
  });
});

async function sendMail(contactReq, callback) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.NODEMAILER_HOST,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      type: "OAuth2",
      user: process.env.NODEMAILER_NAME,
      clientId: process.env.NODEMAILER_CLIENTID,
      clientSecret: process.env.NODEMAILER_CLIENTSECRET,
      refreshToken: process.env.NODEMAILER_REFRESHTOKEN
    }
  });

  let mailOptions = {
    to: 'nefferKSB@kennanrsb.com', // list of receivers
    subject: contactReq.subject, // Subject line
    html: `<p>${contactReq.message}</p>
    <p>Message sent from ${contactReq.name} their email address is ${contactReq.email}`
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}

