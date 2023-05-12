import express from 'express';
import cors from 'cors';
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// recieves form data and email it to my west-mec email
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false, limit: 100000, parameterLimit: 3}))

app.post('/email', (req, res) => {
  const msg = {
    to: 'amurph068@west-mec.org',
    from: `${req.body.email}`,
    subject: `${req.body.subject}`,
    html: '<p>' + `${req.body.message}` + '</p>',
  }


  sgMail
    .send(msg)
    .then((response) => {
      console.log(response[0].statusCode);
      console.log(response[0].headers);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.listen(3000);

