require('dotenv').config();

const mailgun = require('mailgun-js');
const DOMAIN = process.env.DOMAIN;
const mg = mailgun({apiKey: process.env.MAILGUN_API, domain: DOMAIN});

console.log(DOMAIN)

exports.sendMail = (req, res, next) => {
  let contactReq = req.body;
  let contactName = contactReq.contactName;
  let contactEmail = contactReq.email;
  let subject = contactReq.subject;
  let message = contactReq.message;

  const data = {
    from: `Portfolio Inquiry <${contactEmail}>`,
    to: 'kennanrsb@gmail.com',
    subject: subject,
    text: `A new portfolio inquiry has come in from ${contactName} and they say: ${message}.`
  };

  mg.messages().send(data)
  .then(res => console.log(res))
  .catch(err => console.log(err));
}
