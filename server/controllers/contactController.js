// /server/controllers/contactController.js
const { validationResult } = require('express-validator');
const sendEmail = require('../config/nodemailer');

exports.handleContactForm = async (req, res) => {
  // 1. Validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.error('Validation errors:', errors.array());
    return res.status(400).json({ error: errors.array()[0].msg });
  }

  // 2. Honeypot
  if (req.body.honeypot) {
    console.log('Honeypot triggered.');
    return res.status(200).json({ success: true, message: 'Message received!' }); // Mimic success
  }

  // 3. Data Extraction
  const { name, email, message } = req.body;

  // 4. Email Content
  const mailSubject = `Portfolio Contact: ${name}`;
  const mailText = `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`;
  const mailHtml = `
    <div style="font-family: sans-serif; line-height: 1.6;">
      <h2>Portfolio Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <hr>
      <p><strong>Message:</strong></p>
      <p style="padding: 10px; border-left: 3px solid #eee; white-space: pre-wrap;">${message}</p>
    </div>
  `;

  // 5. Send Email
  try {
    await sendEmail({
      to: process.env.EMAIL_RECEIVER,
      subject: mailSubject,
      text: mailText,
      html: mailHtml,
      replyTo: email
    });
    console.log(`Email sent from ${email}`);
    res.status(200).json({ success: true, message: 'Message sent successfully! Thank you.' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
};
