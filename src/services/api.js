import axios from 'axios';
import AuthService from './AuthService';

const api = axios.create({
  baseURL: 'https://employee-management-server-seven.vercel.app',
});

api.interceptors.request.use((config) => {
  const token = AuthService.getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401 && error.response.data.error_code === "TOKEN_EXPIRED") {
      AuthService.logout();
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

export default api;
