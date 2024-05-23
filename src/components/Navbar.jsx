import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaList, FaPlus, FaSignInAlt, FaSignOutAlt, FaChartBar } from 'react-icons/fa';
import AuthService from '../services/AuthService';

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = AuthService.isAuthenticated();

  const handleLogout = () => {
    AuthService.logout();
    navigate('/');
  };

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div>
          <Link to="/" className="text-white text-lg font-bold flex items-center">
            <FaChartBar className="mr-2" />
            Employee Management
          </Link>
        </div>
        <div className="flex items-center">
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="text-white mr-4 flex items-center">
                <FaChartBar className="mr-2" />
                Dashboard
              </Link>
              <Link to="/employees" className="text-white mr-4 flex items-center">
                <FaList className="mr-2" />
                Employee List
              </Link>
              <Link to="/employees/add" className="text-white mr-4 flex items-center">
                <FaPlus className="mr-2" />
                Add Employee
              </Link>
              <button className="text-white mr-4 flex items-center" onClick={handleLogout}>
                <FaSignOutAlt className="mr-2" />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/" className="text-white mr-4 flex items-center">
                <FaSignInAlt className="mr-2" />
                Login
              </Link>
              <Link to="/signup" className="text-white flex items-center">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
