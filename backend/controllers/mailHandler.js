require('dotenv').config({path: __dirname + './../.env'});
const mailgun = require('mailgun-js');
const domain = process.env.DOMAIN;
const apiKey = process.env.MAILGUN_API;

const mg = mailgun({apiKey: apiKey, domain: domain});

exports.sendMail = (req, res, next) => {
  let contactReq = req.body;
  let contactName = contactReq.contactName;
  let contactEmail = contactReq.email;
  let subject = contactReq.subject;
  let message = contactReq.message;

  const data = {
    from: `Portfolio Inquiry <nefferksb@kennanrsb.com>`,
    to: 'kennanrsb@gmail.com',
    subject: subject,
    text: `A new portfolio inquiry has come in from ${contactName}: ${contactEmail} and they say: ${message}.`
  };

  mg.messages().send(data)
  .then(res => console.log(res))
  .catch(err => console.log(err));
}
