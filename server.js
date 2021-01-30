const app = require('./backend/app');
const emailAuth = require('../../../../Desktop/auth.json');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');


app.use(cors({ origin: '*' }));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('The server started on port 3000.');
});

app.get('/', (req, res) => {
  res.send(
    "<h1 style='text-align: center'> Server Running"
  );
});

app.post('/sendmail', (req, res) => {
  console.log('request came');
  let user = req.body;
  sendMail(user, info => {
    console.log(`The mail has been sent, the id is ${info.messageId}`);
    res.send(info);
  });
});

async function sendMail(contactReq, callback) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: emailAuth.name,
      pass: emailAuth.pass
    }
  });

  console.log(contactReq);
  let mailOptions = {
    from: `KennanRSB CV Site Inquiry <test@test.com>`, // sender address
    to: 'kennanrsbportfolio@gmail.com', // list of receivers
    subject: contactReq.subject, // Subject line
    html: `<p>${contactReq.message}</p>`
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}
