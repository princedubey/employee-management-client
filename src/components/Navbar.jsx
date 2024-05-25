import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaList, FaPlus, FaSignInAlt, FaSignOutAlt, FaChartBar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authSlice';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
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
        <div className="hidden md:flex items-center">
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="text-white mr-4 py-2 md:py-0 flex items-center hover:text-gray-300 transition duration-300">
                <FaChartBar className="mr-2" />
                Dashboard
              </Link>
              <Link to="/employees" className="text-white mr-4 py-2 md:py-0 flex items-center hover:text-gray-300 transition duration-300">
                <FaList className="mr-2" />
                Employee List
              </Link>
              <Link to="/employees/add" className="text-white mr-4 py-2 md:py-0 flex items-center hover:text-gray-300 transition duration-300">
                <FaPlus className="mr-2" />
                Add Employee
              </Link>
              <button className="text-white mr-4 py-2 md:py-0 flex items-center hover:text-gray-300 transition duration-300" onClick={handleLogout}>
                <FaSignOutAlt className="mr-2" />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/" className="text-white mr-4 py-2 md:py-0 flex items-center hover:text-gray-300 transition duration-300">
                <FaSignInAlt className="mr-2" />
                Login
              </Link>
              <Link to="/signup" className="text-white py-2 md:py-0 flex items-center hover:text-gray-300 transition duration-300">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 md:hidden flex justify-around py-2 border-t border-gray-700">
        {isAuthenticated ? (
          <>
            <Link to="/dashboard" className="text-white flex flex-col items-center hover:text-gray-300 transition duration-300">
              <FaChartBar className="text-2xl" />
              <span className="text-xs mt-1">Dashboard</span>
            </Link>
            <Link to="/employees" className="text-white flex flex-col items-center hover:text-gray-300 transition duration-300">
              <FaList className="text-2xl" />
              <span className="text-xs mt-1">Employees</span>
            </Link>
            <Link to="/employees/add" className="text-white flex flex-col items-center hover:text-gray-300 transition duration-300">
              <FaPlus className="text-2xl" />
              <span className="text-xs mt-1">Add</span>
            </Link>
            <button className="text-white flex flex-col items-center hover:text-gray-300 transition duration-300" onClick={handleLogout}>
              <FaSignOutAlt className="text-2xl" />
              <span className="text-xs mt-1">Logout</span>
            </button>
          </>
        ) : (
          <>
            <Link to="/" className="text-white flex flex-col items-center hover:text-gray-300 transition duration-300">
              <FaSignInAlt className="text-2xl" />
              <span className="text-xs mt-1">Login</span>
            </Link>
            <Link to="/signup" className="text-white flex flex-col items-center hover:text-gray-300 transition duration-300">
              <FaUser className="text-2xl" />
              <span className="text-xs mt-1">Sign Up</span>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
