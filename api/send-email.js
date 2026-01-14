import nodemailer from 'nodemailer';

// Email transporter configuration for Hostinger email
const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER || 'sales@laskontech.com',
    pass: process.env.EMAIL_PASSWORD || '6o/kQR1eF+Y'
  },
  tls: {
    rejectUnauthorized: false
  }
});

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

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

    res.status(200).json({ 
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
      errorDetails = 'Invalid Hostinger email credentials. Please verify your email and password in Vercel environment variables.';
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
}


