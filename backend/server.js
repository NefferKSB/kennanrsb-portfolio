const app = require('./app');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const http = require("http");

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

//Disable CORs
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  next();
});
app.use(bodyParser.json());

app.post('/sendmail', (req, res) => {
  //console.log('request came');
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
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.NODEMAILER_NAME,
      pass: process.env.NODEMAILER_PASS
    }
  });

  //console.log(contactReq);
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

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

const server = http.createServer(app);
server.listen(port);
