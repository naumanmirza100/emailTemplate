# Quick Start Guide - Vercel Deployment

## 🎯 What You Need to Do

### 1. Set Environment Variables in Vercel

Go to: **Vercel Dashboard → Your Project → Settings → Environment Variables**

Add these two variables:

```
EMAIL_USER = sales@laskontech.com
EMAIL_PASSWORD = 6o/kQR1eF+Y
```

**That's it!** No need to set `VITE_API_URL` - it's automatic.

### 2. Deploy/Redeploy

- If first time: Push to GitHub and Vercel will auto-deploy
- If updating: Just push to GitHub or click "Redeploy" in Vercel dashboard

### 3. Test

1. Visit: https://email-template-lime.vercel.app/
2. Test health: https://email-template-lime.vercel.app/api/health
3. Try sending an email from any template

## ✅ Done!

Your API is now at: `https://email-template-lime.vercel.app/api/send-email`

No separate backend needed - everything runs on Vercel!

