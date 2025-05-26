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
  const { name, email, note } = req.body;
  
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
        <p><strong>Note</strong> ${note}</p>
      `
    });
    
    // Confirmation email to the people
    await transporter.sendMail({
      from: process.env.EMAIL_USER, 
      to: email,
      subject: 'Thank you for your RSVP',
      html: `
        <p>Thank you for RSVPing ${name},</p>
        <p>We can't wait to see you at the House party!</p>
        <p>Address: 515 Coral St Houston, TX 77023 United States<p>
        <p>Map Coordinates if you're like that: 29.72222 N, 95.28869 W<p>
        <p>You can pay the $15 entry fee at the door with cash, card, venmo, or cashapp</p>
        <p>Please bring a friend or post about us!!!<p>
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