import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import AuthService from '../services/AuthService';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = AuthService.isAuthenticated();

  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Component /> : <Navigate to="/" replace />}
    />
  );
};

export default PrivateRoute;
