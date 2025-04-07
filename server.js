const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// RSVP endpoint
app.post('/api/rsvp', async (req, res) => {
  const { name, email, payment, note  } = req.body;
  
  try {
    // Email to yourself (notification)
    await transporter.sendMail({
      from: user,
      to: user,
      subject: `New RSVP from ${name}`,
      html: `
        <h3>New RSVP Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Payment Method</strong> ${payment}</p>
        <p><strong>Note</strong> ${note}</p>
      `
    });
    
    // Confirmation email to the guest
    await transporter.sendMail({
      from: user,
      to: email,
      subject: 'Thank you for your RSVP',
      html: `
        <h3>Thank you for your RSVP!</h3>
        <p>Dear ${name},</p>
        <p>We have received your RSVP and look forward to seeing you at our event.</p>
        <p>Here are the details you provided:</p>
        <p><strong>Number of Guests:</strong> ${guests}</p>
        <p>If you need to make any changes, please contact us directly.</p>
        <p>Best regards,</p>
        <p>Your Name</p>
      `
    });
    
    res.status(200).json({ success: true, message: 'RSVP received and emails sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to process RSVP' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});