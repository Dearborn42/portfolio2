import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
// import sgMail from '@sendgrid/mail';
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// recieves form data and email it to my west-mec email
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false, limit: 100000, parameterLimit: 3}))

app.post('/email', (req, res) => {
  const transport = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: `${process.env.Mailtrap_UserName}`,
      pass: `${process.env.Mailtrap_password}`,
    },
  });
  const msg = {
    to: 'amurph068@west-mec.org',
    from: `${req.body.email}`,
    subject: `${req.body.subject}`,
    html: '<p>' + `${req.body.message}` + '</p>',
  }
  transport.sendMail(msg, (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Email sent:', info.response);
    }
  });


  // sgMail
  //   .send(msg)
  //   .then((response) => {
  //     console.log(response[0].statusCode);
  //     console.log(response[0].headers);
  //   })
  //   .catch((error) => {
  //     console.error(req.body);
  //     console.error(error);
  //   });
});

app.listen(3000);

