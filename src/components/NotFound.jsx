// components/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-indigo-600">404</h1>
        <p className="text-2xl mt-4 text-gray-800">Page Not Found</p>
        <p className="text-gray-600 mt-2">Sorry, we couldn't find the page you're looking for.</p>
        <Link to="/" className="mt-6 inline-block bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
