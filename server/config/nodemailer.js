// /server/config/nodemailer.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT || 587,
  secure: process.env.EMAIL_PORT === '465', // true for 465, false for others
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify connection (optional)
transporter.verify((error, success) => {
  if (error) {
    console.error('Nodemailer Config Error:', error);
  } else {
    console.log('Nodemailer is ready.');
  }
});

const sendEmail = async (mailOptions) => {
  try {
    const options = {
      from: `"${process.env.EMAIL_FROM_NAME || 'Portfolio Contact'}" <${process.env.EMAIL_USER}>`,
      ...mailOptions,
    };
    const info = await transporter.sendMail(options);
    console.log('Message sent: %s', info.messageId);
    return info;
  } catch (error) {
    console.error('Nodemailer Send Error:', error);
    throw new Error('Failed to send email.');
  }
};

module.exports = sendEmail;
