require("dotenv").config({path: "../.env"});
const nodemailer = require("nodemailer");
const bodyParser = require('body-parser');
const { google } = require("googleapis");
const cors = require('cors');
const OAuth2 = google.auth.OAuth2;
const express = require('express');
const AWS = require('aws-sdk');
const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Middleware for parsing JSON data
app.use(bodyParser.json());

app.get('/', (req, res) => res.json("API is running"));

app.post('/api/send-email', (req, res) => {
  const cloudwatchlogs = new AWS.CloudWatchLogs({ region: 'us-east-1' });
  const { contactName, email, subject, message } = req.body;

  const logEvent = {
    logGroupName: 'cv_portfolio_site_logs',
    logStreamName: 'cv_port_log_stream', // Replace with a unique log stream name
    logEvents: [
      {
        message: 'This is a log message.',
        timestamp: Date.now()
      }
    ]
  };

  cloudwatchlogs.putLogEvents(logEvent, function(err, data) {
    if (err) {
      console.log('Error logging to CloudWatch Logs:', err);
    } else {
      console.log('Successfully logged to CloudWatch Logs.');
    }
  });

  // Compose the email
  const mailOptions = {
    from: process.env.EMAIL,
    to: 'kennanrsb@gmail.com', //Recipient email address goes here
    subject: 'CV / Portfolio Website Contact Form Submission',
    html: `
      <h3>New Inquiry</h3>
      <p><strong>Name:</strong> ${contactName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong> ${message}</p>
    `
  };

  const createTransporter = async () => {
    const oauth2Client = new OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      "https://developers.google.com/oauthplayground"
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN
    });

    const accessToken = await new Promise((resolve, reject) => {
      oauth2Client.getAccessToken((err, token) => {
        if (err) {
          reject("Failed to create access token :(" + err);
        }
        resolve(token);
      });
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL,
        accessToken,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN
      }
    });

    return transporter;

  };

  const sendEmail = async (mailOpt) => {
    let emailTransporter = await createTransporter();
    await emailTransporter.sendMail(mailOpt);
  };

  // Send the email
  sendEmail(mailOptions);
  res.send({message: 'Form submitted successfully'});
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
