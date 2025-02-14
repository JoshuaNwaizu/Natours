const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  // 1) Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // 2) Configure the transporter
  const mailOptions = {
    from: 'Joshua Nwaizu <hello@joshua.io>',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  // 3) Define the email template
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
