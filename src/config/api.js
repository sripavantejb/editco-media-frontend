// Centralized API configuration and helper for fetch calls
const API_BASE_URL = (typeof import.meta !== 'undefined' && import.meta.env)
  ? import.meta.env.VITE_API_URL
  : undefined;

function ensureBaseUrl() {
  if (!API_BASE_URL) {
    throw new Error('VITE_API_URL is not set. Create frontend/.env with VITE_API_URL to proceed.');
  }
}

export function apiUrl(path) {
  ensureBaseUrl();
  if (!path) return API_BASE_URL;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return `${API_BASE_URL}${path.startsWith('/') ? '' : '/'}${path}`;
}

export async function apiFetch(path, options = {}) {
  const url = apiUrl(path);
  const defaultHeaders = { 'Content-Type': 'application/json' };
  const mergedOptions = {
    ...options,
    headers: { ...(options.headers || {}), ...defaultHeaders },
  };
  const response = await fetch(url, mergedOptions);
  return response;
}

export default API_BASE_URL;


