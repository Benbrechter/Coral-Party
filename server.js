import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// for NodeMailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post('/api/rsvp', async (req, res) => {
  const { name, email, payment, note } = req.body;
  
  try {
    // Email to me
    await transporter.sendMail({
      from: process.env.EMAIL_USER, 
      to: process.env.EMAIL_USER,   
      subject: `New RSVP from ${name}`,
      html: `
        <h3>New RSVP Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Payment Method</strong> ${payment}</p>
        <p><strong>Note</strong> ${note}</p>
      `
    });
    
    // Confirmation email to the people
    await transporter.sendMail({
      from: process.env.EMAIL_USER, 
      to: email,
      subject: 'Thank you for your RSVP',
      html: `
        <h3>Thank you for your RSVP!</h3>
        <p>HEY ${name},</p>
        <p>We have received your RSVP and look forward to seeing you at our gallery.</p>
        <p>Here are the details you provided:</p>
        <p><strong>Payment Method:</strong> ${payment}</p>
        ${payment === 'Venmo' ? `
        <p>Please send your $15 payment to: <a href="https://venmo.com/u/Ben-Brechter" target="_blank">https://venmo.com/u/Ben-Brechter</a></p>
        ` : ''}
        <p>We also accept payment at the door!.</p>
        <p>Tell a friend!!<p>
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