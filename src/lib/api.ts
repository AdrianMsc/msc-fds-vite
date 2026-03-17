import axios from 'axios';

const isVercel = typeof window !== 'undefined' && window.location.hostname.includes('vercel.app');
const defaultBaseURL = isVercel 
  ? 'https://msc-component-status-ws-dev.vercel.app' 
  : (import.meta.env.VITE_API_URL || '/api');

export const api = axios.create({
  baseURL: defaultBaseURL,
  withCredentials: true,
});

let csrfToken: string | null = null;

export const fetchCsrfToken = async () => {
  try {
    const res = await api.get('/csrf-token'); // Assuming backend provides this
    csrfToken = res.data.csrfToken;
  } catch (error) {
    console.warn('Failed to fetch CSRF token:', error);
  }
};

api.interceptors.request.use((config) => {
  if (config.method !== 'get' && csrfToken) {
    if (config.headers) {
      config.headers['X-CSRF-Token'] = csrfToken;
    }
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Dispatch event on 401 to trigger logout or state clear, except during token exchange
    if (error.response?.status === 401 && error.config?.url !== '/auth/login-frontend') {
      console.warn('Session expired or unauthorized');
      window.dispatchEvent(new Event('auth-unauthorized'));
    }
    return Promise.reject(error);
  },
);
