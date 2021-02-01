const app = require('./backend/app');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

//Disable CORs
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  next();
});
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('The server started on port 3000.');
});

app.get('/api', (req, res) => {
  res.send(
    "<h1 style='text-align: center'> Server Running"
  );
});

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
