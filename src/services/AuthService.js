// src/services/AuthService.js
import Cookies from 'js-cookie';

const TOKEN_KEY = 'access_token';

const AuthService = {
  login: (accessToken) => {
    Cookies.set(TOKEN_KEY, accessToken);
  },
  logout: () => {
    Cookies.remove(TOKEN_KEY);
  },
  getAccessToken: () => {
    return Cookies.get(TOKEN_KEY);
  },
  isAuthenticated: () => {
    return !!Cookies.get(TOKEN_KEY);
  },
};

export default AuthService;
