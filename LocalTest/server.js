import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import multer from 'multer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load environment variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, '..', '.env') });

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files (HTML page)
app.use(express.static(__dirname));

// Configure multer for file uploads (store in memory)
const upload = multer({ 
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit per file
  }
});

// Email configuration
const createTransporter = () => {
  const emailUser = process.env.EMAIL_USER;
  const emailPwd = process.env.EMAIL_PASSWORD;
  console.log('emailPwd: ' + emailPwd + ' emailUser:  ' + emailUser);

  if (!emailUser || !emailPwd) {
    throw new Error('Email credentials not found in .env file. Please set email_user and pwd.');
  }

  return nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465, // SSL port for Hostinger
    secure: true, // true for 465, false for other ports
    auth: {
      user: emailUser,
      pass: emailPwd,
    },
  });
};

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Email server is running' });
});

// Send email endpoint
app.post('/api/send-email', upload.array('attachments', 10), async (req, res) => {
  try {
    const { emails, subject, content } = req.body;

    // Parse emails if it's a string (from form data)
    let emailList = [];
    if (typeof emails === 'string') {
      emailList = emails
        .split(/[,\n]/)
        .map(email => email.trim())
        .filter(email => email.length > 0);
    } else if (Array.isArray(emails)) {
      emailList = emails;
    }

    // Validate input
    if (!emailList || emailList.length === 0) {
      return res.status(400).json({ error: 'Please provide at least one email address' });
    }

    if (!subject || !subject.trim()) {
      return res.status(400).json({ error: 'Please provide a subject' });
    }

    if (!content || !content.trim()) {
      return res.status(400).json({ error: 'Please provide email content' });
    }

    // Validate email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validEmails = emailList.filter(email => emailRegex.test(email));
    
    if (validEmails.length === 0) {
      return res.status(400).json({ error: 'No valid email addresses found' });
    }

    // Prepare attachments from uploaded files
    const attachments = req.files ? req.files.map(file => ({
      filename: file.originalname,
      content: file.buffer,
    })) : [];

    // Create transporter
    let transporter;
    try {
      transporter = createTransporter();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }

    // Send emails
    let sentCount = 0;
    const errors = [];

    for (const email of validEmails) {
      try {
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: email,
          subject: subject,
          html: content.replace(/\n/g, '<br>'), // Convert newlines to <br> for HTML
          text: content, // Plain text version
        };

        // Add attachments if any
        if (attachments.length > 0) {
          mailOptions.attachments = attachments;
        }

        await transporter.sendMail(mailOptions);
        sentCount++;
      } catch (error) {
        errors.push({ email, error: error.message });
      }
    }

    if (sentCount === 0) {
      return res.status(500).json({ 
        error: 'Failed to send all emails', 
        details: errors 
      });
    }

    res.json({
      success: true,
      sent: sentCount,
      total: validEmails.length,
      attachments: attachments.length,
      errors: errors.length > 0 ? errors : undefined,
    });
  } catch (error) {
    console.error('Error sending emails:', error);
    res.status(500).json({ error: 'Internal server error', details: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Email server running on http://localhost:${PORT}`);
  console.log(`Open http://localhost:${PORT} in your browser to access the email sender page`);
  console.log('Make sure your .env file has email_user and pwd configured');
});

