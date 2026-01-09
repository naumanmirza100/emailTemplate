// API configuration
const getApiUrl = () => {
  // Always check for VITE_API_URL first (set in Vercel environment variables)
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }
  
  // In production (Vercel), if no VITE_API_URL is set, use relative URL
  // This assumes backend is on same domain (not the case for Vercel)
  if (import.meta.env.PROD) {
    // For Vercel, you MUST set VITE_API_URL to your backend URL
    console.warn('⚠️ VITE_API_URL not set in production. Please set it in Vercel environment variables.');
    return '/api'; // Fallback (won't work for Vercel unless backend is proxied)
  }
  
  // In development (localhost), use localhost
  return 'http://localhost:3001/api';
};

export const API_BASE_URL = getApiUrl();

