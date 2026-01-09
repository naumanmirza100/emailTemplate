# Vercel Deployment Setup Guide

Your frontend is deployed at: **https://email-template-lime.vercel.app/**

## Environment Variables Configuration

### For Vercel (Frontend)

Go to your Vercel project settings → Environment Variables and add:

```env
# Backend API URL (REQUIRED)
# Replace with your actual backend URL (Railway, Render, etc.)
VITE_API_URL=https://your-backend-url.railway.app/api

# Example if using Railway:
# VITE_API_URL=https://email-server-production.up.railway.app/api

# Example if using Render:
# VITE_API_URL=https://email-server.onrender.com/api
```

**Important:** 
- Variable name must be `VITE_API_URL` (Vite requires `VITE_` prefix)
- Must include `/api` at the end
- After adding, **redeploy** your Vercel app for changes to take effect

### For Backend Server (Railway/Render/etc.)

Set these environment variables in your backend hosting platform:

```env
# Server Configuration
PORT=3001
HOST=0.0.0.0

# Email Configuration (Hostinger SMTP)
EMAIL_USER=sales@laskontech.com
EMAIL_PASSWORD=6o/kQR1eF+Y

# Frontend URL (for CORS)
FRONTEND_URL=https://email-template-lime.vercel.app
```

### For Local Development (.env file)

Create a `.env` file in the root directory:

```env
# Backend API URL (for localhost)
VITE_API_URL=http://localhost:3001/api

# Server Configuration
PORT=3001
HOST=0.0.0.0

# Email Configuration
EMAIL_USER=sales@laskontech.com
EMAIL_PASSWORD=6o/kQR1eF+Y

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:3000
```

## Deployment Steps

### 1. Deploy Backend (Choose one platform)

#### Option A: Railway (Recommended)
1. Go to [railway.app](https://railway.app)
2. Create new project → Deploy from GitHub
3. Select your repository
4. Add environment variables (see above)
5. Railway will auto-deploy
6. Copy the deployment URL (e.g., `https://email-server-production.up.railway.app`)
7. Add `/api` to get: `https://email-server-production.up.railway.app/api`

#### Option B: Render
1. Go to [render.com](https://render.com)
2. New → Web Service
3. Connect GitHub repository
4. Build command: `npm install`
5. Start command: `npm run start:prod`
6. Add environment variables
7. Copy the URL and add `/api`

#### Option C: Heroku
1. Install Heroku CLI
2. `heroku create your-app-name`
3. `heroku config:set EMAIL_USER=... EMAIL_PASSWORD=... FRONTEND_URL=https://email-template-lime.vercel.app`
4. `git push heroku main`

### 2. Update Vercel Environment Variables

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add `VITE_API_URL` with your backend URL + `/api`
3. **Redeploy** your Vercel app

### 3. Verify Setup

1. **Test Health Endpoint:**
   ```
   https://your-backend-url.railway.app/health
   ```
   Should return: `{"status":"ok",...}`

2. **Test from Vercel:**
   - Go to https://email-template-lime.vercel.app/
   - Open any email template
   - Try sending a test email
   - Check browser console for any errors

## Troubleshooting

### CORS Errors
- Ensure `FRONTEND_URL` in backend matches exactly: `https://email-template-lime.vercel.app`
- No trailing slash in FRONTEND_URL
- Redeploy backend after changing FRONTEND_URL

### API Not Found
- Verify `VITE_API_URL` is set in Vercel
- Must include `/api` at the end
- Redeploy Vercel app after adding environment variable

### Email Not Sending
- Check backend logs for SMTP errors
- Verify EMAIL_USER and EMAIL_PASSWORD are correct
- Test backend health endpoint first

## Quick Test Commands

```bash
# Test backend health
curl https://your-backend-url.railway.app/health

# Test email endpoint (from terminal)
curl -X POST https://your-backend-url.railway.app/api/send-email \
  -H "Content-Type: application/json" \
  -d '{"to":"test@example.com","subject":"Test","html":"<p>Test</p>"}'
```

## Current Configuration Summary

- **Frontend:** https://email-template-lime.vercel.app/ (Vercel)
- **Backend:** Deploy to Railway/Render/Heroku (you need to set this up)
- **API URL:** Set `VITE_API_URL` in Vercel to point to your backend

