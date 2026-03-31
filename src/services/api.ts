import axios from 'axios';
import { store } from '@/app/store';

const api = axios.create({
  baseURL: (import.meta.env.VITE_API_BASE_URL || 'http://qweelvo-api') + '/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const state = store.getState();
  const token = state.session.token;
  if (token) {
    config.headers['x-session-token'] = token;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Optionally handle generic errors, e.g. 401 token expired
    return Promise.reject(error);
  }
);

export default api;
