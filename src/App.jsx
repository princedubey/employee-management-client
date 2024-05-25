import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import EmployeeListPage from './pages/EmployeeListPage';
import EmployeeAddPage from './pages/EmployeeAddPage';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <LoginPage />}
          />
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
