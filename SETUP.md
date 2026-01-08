# Email Sending Setup Instructions

## Prerequisites
1. Make sure Node.js is installed
2. Install all dependencies: `npm install`

## Environment Variables
Create a `.env` file in the root directory with the following:

```
EMAIL_USER=sales@laskontech.com
EMAIL_PASSWORD=6o/kQR1eF+Y
PORT=3001
```

## Running the Application

### Option 1: Run Frontend and Backend Together (Recommended)
```bash
npm run dev:full
```

This will start:
- Frontend on http://localhost:3000
- Backend server on http://localhost:3001

### Option 2: Run Separately

**Terminal 1 - Frontend:**
```bash
npm run dev
```

**Terminal 2 - Backend:**
```bash
npm run server
```

## Using the Email Feature

1. Navigate to any email template page (e.g., http://localhost:3000/staffing)
2. Scroll down to the "Send Email" section
3. Enter the recipient email address
4. Optionally modify the email subject
5. Click "Send Email" button

## Hostinger Email Setup

This application is configured to use **Hostinger email SMTP**.

### SMTP Configuration:
- **SMTP Server:** `smtp.hostinger.com`
- **Port:** `587` (TLS/STARTTLS) or `465` (SSL)
- **Username:** Your full email address (e.g., `sales@laskontech.com`)
- **Password:** Your email account password from Hostinger hPanel

### Setup Steps:

1. **Get your email credentials from Hostinger hPanel**:
   - Log in to https://hpanel.hostinger.com/
   - Go to Email section
   - Find your email account: `sales@laskontech.com`
   - Note: The password shown might be masked, use the actual password you set when creating the email account

2. **Update .env file**:
   ```env
   EMAIL_USER=sales@laskontech.com
   EMAIL_PASSWORD=your-hostinger-email-password
   PORT=3001
   ```

3. **If authentication fails, try SSL (port 465)**:
   - Update `server.js` line 25: change `port: 587` to `port: 465`
   - Update `server.js` line 26: change `secure: false` to `secure: true`

4. **Restart the server** after updating credentials

### Troubleshooting:

- **"Authentication failed"**: Double-check your email password in Hostinger hPanel
- **"Connection timeout"**: Ensure port 587 or 465 is not blocked by firewall
- **Still not working?**: Verify SMTP is enabled for your email account in Hostinger hPanel

## Troubleshooting

- **"Failed to connect to email server"**: Make sure the backend server is running on port 3001
- **"Authentication failed"**: 
  - Check your Hostinger email credentials in `.env` file
  - Verify the password is correct in Hostinger hPanel
  - Ensure SMTP is enabled for your email account
- **"Invalid email"**: Ensure the recipient email address is in the correct format
- **Connection issues**: Try switching between port 587 (TLS) and 465 (SSL) in `server.js`

