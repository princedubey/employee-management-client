import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthService from './services/AuthService';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import EmployeeListPage from './pages/EmployeeListPage';
import EmployeeAddPage from './pages/EmployeeAddPage';
import Navbar from './components/Navbar';

const App = () => {
  const isAuthenticated = AuthService.isAuthenticated();

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/dashboard"
            element={isAuthenticated ? <DashboardPage /> : <Navigate to="/" replace />}
          />
          <Route
            path="/employees"
            element={isAuthenticated ? <EmployeeListPage /> : <Navigate to="/" replace />}
          />
          <Route
            path="/employees/add"
            element={isAuthenticated ? <EmployeeAddPage /> : <Navigate to="/" replace />}
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
