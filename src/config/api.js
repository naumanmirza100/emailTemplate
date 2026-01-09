// API configuration
const getApiUrl = () => {
  // Always check for VITE_API_URL first (for custom backend URL)
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }
  
  // In production (Vercel), use relative URL since API is on same domain
  // Vercel serverless functions are at /api/* on the same domain
  if (import.meta.env.PROD) {
    return '/api';
  }
  
  // In development (localhost), use localhost Express server
  return 'http://localhost:3001/api';
};

export const API_BASE_URL = getApiUrl();

