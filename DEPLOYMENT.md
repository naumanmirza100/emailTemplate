# Deployment Guide

This guide explains how to deploy the Email Templates application with the email sending server.

## Configuration Summary

### ✅ What's Been Configured

1. **Server (`server.js`)**
   - Now listens on `0.0.0.0` (all network interfaces) for deployment
   - Added health check endpoint at `/health`
   - Improved CORS configuration for production
   - Removed deprecated SSLv3 cipher

2. **Frontend API Configuration**
   - Created `src/config/api.js` for dynamic API URL
   - All 9 email templates now use the API config
   - Automatically uses relative URLs in production, localhost in development

3. **Package Scripts**
   - Added `start` and `start:prod` scripts for production

## Environment Variables

Create a `.env` file in the root directory with:

```env
# Server Configuration
PORT=3001
HOST=0.0.0.0

# Email Configuration (Hostinger SMTP)
EMAIL_USER=sales@laskontech.com
EMAIL_PASSWORD=your_email_password_here

# Frontend URL (for CORS in production)
# Set this to your production domain, e.g., https://yourdomain.com
FRONTEND_URL=https://yourdomain.com

# API URL (optional - for frontend)
# In production, if frontend and backend are on same domain, leave empty for relative URLs
# Otherwise, use full URL: https://api.yourdomain.com/api
VITE_API_URL=
```

## Deployment Options

### Option 1: Same Domain (Recommended)

If your frontend and backend are on the same domain:

1. **Frontend**: Deploy to `/` (root)
2. **Backend**: Deploy to `/api` using a reverse proxy (nginx, Apache, etc.)

**Nginx Configuration Example:**
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    # Frontend (React app)
    location / {
        root /var/www/email-templates/dist;
        try_files $uri $uri/ /index.html;
    }

    # Backend API
    location /api {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

**Environment Variables:**
- `VITE_API_URL` can be empty (uses relative `/api`)
- `FRONTEND_URL=https://yourdomain.com`

### Option 2: Separate Domains

If your frontend and backend are on different domains:

1. **Frontend**: Deploy to `https://yourdomain.com`
2. **Backend**: Deploy to `https://api.yourdomain.com`

**Environment Variables:**
- `VITE_API_URL=https://api.yourdomain.com/api`
- `FRONTEND_URL=https://yourdomain.com`

## Deployment Steps

### 1. Build the Frontend

```bash
npm run build
```

This creates a `dist` folder with the production build.

### 2. Start the Server

**Development:**
```bash
npm run server
```

**Production:**
```bash
npm run start:prod
```

Or use a process manager like PM2:

```bash
npm install -g pm2
pm2 start server.js --name email-server
pm2 save
pm2 startup
```

### 3. Verify Deployment

1. **Check Health Endpoint:**
   ```
   http://yourdomain.com/api/health
   ```
   Should return: `{"status":"ok","timestamp":"...","service":"email-server"}`

2. **Test Email Sending:**
   - Go to any email template page
   - Fill in recipient email and subject
   - Click "Send Email"
   - Check for success message

## Platform-Specific Guides

### Vercel / Netlify (Frontend Only)

These platforms are for static sites. You'll need to:
1. Deploy frontend to Vercel/Netlify
2. Deploy backend separately (Railway, Render, Heroku, etc.)
3. Set `VITE_API_URL` to your backend URL

### Railway / Render / Heroku

These platforms support Node.js apps:

1. **Set Environment Variables** in platform dashboard
2. **Build Command:** `npm run build`
3. **Start Command:** `npm run start:prod`
4. **Port:** Platform will set `PORT` automatically

### VPS (DigitalOcean, AWS EC2, etc.)

1. **Install Node.js** and npm
2. **Clone repository** and install dependencies
3. **Set up PM2** or systemd service
4. **Configure Nginx** as reverse proxy
5. **Set up SSL** with Let's Encrypt

## Troubleshooting

### Server Not Starting

- Check if port is already in use: `lsof -i :3001`
- Verify environment variables are set
- Check server logs for errors

### CORS Errors

- Ensure `FRONTEND_URL` matches your frontend domain exactly
- Check browser console for specific CORS error messages

### Email Not Sending

- Verify Hostinger SMTP credentials in `.env`
- Check server logs for authentication errors
- Test SMTP connection: `node -e "require('./server.js')"`

### Health Check Failing

- Ensure server is running: `curl http://localhost:3001/health`
- Check firewall settings
- Verify port is accessible

## Security Notes

1. **Never commit `.env` file** to version control
2. **Use strong passwords** for email account
3. **Enable HTTPS** in production
4. **Restrict CORS** to your domain only
5. **Use environment variables** for all sensitive data

## Support

If you encounter issues:
1. Check server logs
2. Verify environment variables
3. Test health endpoint
4. Check email SMTP credentials


