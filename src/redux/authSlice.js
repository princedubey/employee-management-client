import { createSlice } from '@reduxjs/toolkit';
import AuthService from '../services/AuthService';

const initialState = {
  isAuthenticated: AuthService.isAuthenticated(),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      AuthService.login(action.payload);
    },
    logout(state) {
      state.isAuthenticated = false;
      AuthService.logout();
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
