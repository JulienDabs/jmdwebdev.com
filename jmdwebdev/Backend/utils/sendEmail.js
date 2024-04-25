const nodemailer = require('nodemailer');

const sendEmail = async (subject, message, send_to, sent_from, reply_to) => {
  // Use nodemailer.createTransport instead of createTransport directly
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465, // Port should be a number, not a string
    secure: true, // Use 'secure: true' for port 465
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const options = {
    from: sent_from,
    to: send_to,
    replyTo: reply_to,
    subject: subject,
    html: message,
  };

  // Since you're inside an async function, consider using await here
  try {
    const info = await transporter.sendMail(options);
    console.log(info);
  } catch (err) {
    console.error(err);
  }
};

module.exports = sendEmail;
