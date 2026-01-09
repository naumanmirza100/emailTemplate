# Environment Variables Quick Reference

## 🏠 For Localhost Development

Create a `.env` file in the root directory:

```env
# Frontend API URL (for React app)
VITE_API_URL=http://localhost:3001/api

# Server Configuration
PORT=3001
HOST=0.0.0.0

# Email Configuration (Hostinger SMTP)
EMAIL_USER=sales@laskontech.com
EMAIL_PASSWORD=6o/kQR1eF+Y

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:3000
```

**To run locally:**
```bash
# Terminal 1: Start frontend
npm run dev

# Terminal 2: Start backend
npm run server
```

## ☁️ For Vercel Deployment (https://email-template-lime.vercel.app/)

### Step 1: Vercel Environment Variables

Go to: **Vercel Dashboard → Your Project → Settings → Environment Variables**

Add this variable:
```
Name: VITE_API_URL
Value: https://your-backend-url.railway.app/api
```

**⚠️ Important:**
- Replace `your-backend-url.railway.app` with your actual backend URL
- Must include `/api` at the end
- After adding, click **"Redeploy"** for changes to take effect

### Step 2: Backend Environment Variables

Set these in your backend hosting platform (Railway/Render/etc.):

```env
PORT=3001
HOST=0.0.0.0
EMAIL_USER=sales@laskontech.com
EMAIL_PASSWORD=6o/kQR1eF+Y
FRONTEND_URL=https://email-template-lime.vercel.app
```

## 📋 Summary

| Environment | VITE_API_URL | FRONTEND_URL |
|------------|--------------|--------------|
| **Localhost** | `http://localhost:3001/api` | `http://localhost:3000` |
| **Vercel** | `https://your-backend-url/api` | `https://email-template-lime.vercel.app` |

## ✅ Verification

### Test Localhost:
1. Frontend: http://localhost:3000
2. Backend Health: http://localhost:3001/health
3. Try sending email from any template

### Test Vercel:
1. Frontend: https://email-template-lime.vercel.app/
2. Backend Health: https://your-backend-url/health
3. Try sending email from any template

## 🔧 Current Configuration

- ✅ API config automatically detects environment
- ✅ Server CORS allows both localhost and Vercel
- ✅ All 9 email templates use the API config
- ✅ Health check endpoint available

