import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || '0.0.0.0'; // Listen on all interfaces for deployment

// Middleware
// CORS configuration - allow both localhost and Vercel deployment
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173', // Vite default dev port
  'https://email-template-lime.vercel.app',
  process.env.FRONTEND_URL
].filter(Boolean); // Remove undefined values

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    // Allow if origin is in allowed list or FRONTEND_URL is set to '*'
    if (allowedOrigins.includes(origin) || process.env.FRONTEND_URL === '*') {
      callback(null, true);
    } else if (process.env.FRONTEND_URL) {
      // Allow if FRONTEND_URL is set (for production)
      callback(null, true);
    } else {
      // In development, allow all origins
      callback(null, true);
    }
  },
  credentials: true
}));
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    service: 'email-server'
  });
});

// Email transporter configuration for Hostinger email
// SMTP Settings:
// - Host: smtp.hostinger.com
// - Port: 587 (TLS/STARTTLS) or 465 (SSL)
// - Username: Full email address (sales@laskontech.com)
// - Password: Your email account password from Hostinger hPanel

const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 587,
  secure: false, // true for 465 (SSL), false for 587 (TLS/STARTTLS)
  auth: {
    user: process.env.EMAIL_USER || 'sales@laskontech.com',
    pass: process.env.EMAIL_PASSWORD || '6o/kQR1eF+Y'
  },
  tls: {
    rejectUnauthorized: false
    // Removed ciphers: 'SSLv3' as it's deprecated
  }
});

// Verify transporter configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log('❌ Email server connection error:', error.message);
    if (error.code === 'EAUTH') {
      console.log('\n⚠️  AUTHENTICATION ERROR:');
      console.log('Invalid email credentials for Hostinger SMTP.');
      console.log('1. Verify your email and password in .env file');
      console.log('2. Check your Hostinger hPanel email account settings');
      console.log('3. Ensure SMTP is enabled for your email account');
      console.log('4. Try port 465 with SSL if port 587 doesn\'t work\n');
    } else {
      console.log('Check your SMTP settings and network connection.\n');
    }
  } else {
    console.log('✅ Hostinger SMTP server is ready to send messages');
  }
});

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { to, subject, html } = req.body;

    if (!to || !html) {
      return res.status(400).json({ 
        success: false, 
        error: 'Recipient email and email content are required' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(to)) {
      return res.status(400).json({ 
        success: false, 
        error: 'Invalid email address format' 
      });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER || 'sales@laskontech.com',
      to: to,
      subject: subject || 'Email from Laskon Technologies',
      html: html
    };

    const info = await transporter.sendMail(mailOptions);

    res.json({ 
      success: true, 
      message: 'Email sent successfully',
      messageId: info.messageId
    });
  } catch (error) {
    console.error('Error sending email:', error);
    
    let errorMessage = 'Failed to send email';
    let errorDetails = error.message;
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Authentication failed';
      errorDetails = 'Invalid Hostinger email credentials. Please verify your email and password in .env file.';
    } else if (error.code === 'EENVELOPE') {
      errorMessage = 'Invalid recipient email';
      errorDetails = 'The recipient email address is invalid.';
    }
    
    res.status(500).json({ 
      success: false, 
      error: errorMessage,
      details: errorDetails,
      code: error.code || 'UNKNOWN'
    });
  }
});

app.listen(PORT, HOST, () => {
  console.log(`✅ Email server running on http://${HOST}:${PORT}`);
  console.log(`📧 Health check: http://${HOST}:${PORT}/health`);
});

