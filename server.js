import express from 'express';
import nodemailer from 'nodemailer';
import pkg from 'body-parser';
const { json } = pkg;
import { createTransport } from 'nodemailer';

const app = express();

// Use body-parser middleware to parse JSON requests
app.use(json());

// Serve static files from public folder
app.use(express.static('public'));

// Handle POST requests to /send-email endpoint
app.post('/send-email', function(req, res) {
  const subject = req.body.subject;
  const email = req.body.email;
  const password = req.body.password;
  const text = req.body.text;

  // Send email using nodemailer
const transporter = createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: 'amurf26@outlook.com',
    pass: 'shilodrew22'
  }
});


const mailOptions = {
  from: `${email}`,
  to: 'amurf26@outlook.com', // Change this to your personal email address
  subject: `${subject}`,
  text: `${subject}`
};

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      res.status(500).send('Error');
    } else {
      console.log(`Email sent: ${info.response}`);
      res.status(200).send('Success');
    }
  });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`Server started on port ${port}`);
});