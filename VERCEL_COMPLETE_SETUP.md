# Complete Vercel Setup Guide

Your app is now configured to use **Vercel serverless functions** for the backend API. Everything runs on Vercel!

## ✅ What's Been Configured

1. **Vercel Serverless Functions**
   - `api/send-email.js` - Email sending endpoint
   - `api/health.js` - Health check endpoint

2. **Vercel Configuration**
   - `vercel.json` - Routes API requests to serverless functions

3. **API Configuration**
   - Updated `src/config/api.js` to use `/api` in production (same domain)

## 🚀 Deployment Steps

### Step 1: Set Environment Variables in Vercel

Go to: **Vercel Dashboard → Your Project → Settings → Environment Variables**

Add these two variables:

```
Name: EMAIL_USER
Value: sales@laskontech.com

Name: EMAIL_PASSWORD
Value: 6o/kQR1eF+Y
```

**Important:** 
- Do NOT set `VITE_API_URL` - it's not needed! The API will use `/api` automatically
- After adding variables, **redeploy** your app

### Step 2: Deploy to Vercel

If you haven't already:

1. **Connect GitHub Repository** (if not connected):
   - Go to Vercel Dashboard
   - Click "Add New Project"
   - Import your GitHub repository

2. **Deploy:**
   - Vercel will auto-detect the build settings
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Vercel will automatically:**
   - Build your frontend
   - Deploy serverless functions from `api/` folder
   - Make API available at `https://email-template-lime.vercel.app/api/*`

### Step 3: Verify Deployment

1. **Test Health Endpoint:**
   ```
   https://email-template-lime.vercel.app/api/health
   ```
   Should return: `{"status":"ok","timestamp":"...","service":"email-server"}`

2. **Test Email Sending:**
   - Go to https://email-template-lime.vercel.app/
   - Open any email template
   - Fill in recipient email and subject
   - Click "Send Email"
   - Check for success message

## 🏠 Localhost Development

Your `.env` file is already configured for localhost:

```env
VITE_API_URL=http://localhost:3001/api
PORT=3001
HOST=0.0.0.0
EMAIL_USER=sales@laskontech.com
EMAIL_PASSWORD=6o/kQR1eF+Y
FRONTEND_URL=http://localhost:3000
```

**To run locally:**
```bash
# Terminal 1: Start frontend
npm run dev

# Terminal 2: Start backend (Express server)
npm run server
```

## 📋 How It Works

### Production (Vercel):
- Frontend: `https://email-template-lime.vercel.app/`
- API: `https://email-template-lime.vercel.app/api/send-email`
- Uses Vercel serverless functions (no separate backend needed!)

### Development (Localhost):
- Frontend: `http://localhost:3000`
- API: `http://localhost:3001/api/send-email`
- Uses Express server (`server.js`)

## 🔧 File Structure

```
your-project/
├── api/                    # Vercel serverless functions
│   ├── send-email.js      # Email sending endpoint
│   └── health.js          # Health check endpoint
├── src/
│   ├── config/
│   │   └── api.js         # API URL configuration
│   └── components/        # Email templates
├── server.js              # Express server (for localhost only)
├── vercel.json            # Vercel configuration
└── .env                   # Local environment variables
```

## ✅ Benefits

- ✅ Everything on Vercel (frontend + backend)
- ✅ No separate backend deployment needed
- ✅ Automatic HTTPS
- ✅ Serverless (scales automatically)
- ✅ Same domain (no CORS issues)
- ✅ Free tier available

## 🐛 Troubleshooting

### API Not Working
- Check Vercel Functions tab in dashboard for errors
- Verify environment variables are set correctly
- Check browser console for API errors

### Email Not Sending
- Verify `EMAIL_USER` and `EMAIL_PASSWORD` in Vercel
- Check Vercel Function logs for SMTP errors
- Test health endpoint first: `/api/health`

### CORS Errors
- Shouldn't happen since API is on same domain
- If you see CORS errors, check `api/send-email.js` CORS headers

## 📝 Summary

**For Vercel:**
- Set `EMAIL_USER` and `EMAIL_PASSWORD` in Vercel environment variables
- Deploy - that's it! API is automatically available at `/api/*`

**For Localhost:**
- Use `.env` file (already configured)
- Run `npm run dev` and `npm run server`

Everything is ready! Just set the environment variables in Vercel and redeploy.

