import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import Spinner from './Spinner';
import { login as apiLogin } from '../services/apiServices';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await apiLogin(email, password);
      if (response.data.access_token) {
        dispatch(login(response.data.access_token));
      }
    } catch (err) {
      setError('Failed to login. Please check your credentials and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-3xl font-semibold mb-6 text-center">Login</h2>
      {error && <div className="text-red-500 mb-4 text-sm">{error}</div>}
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 mb-2">Email:</label>
        <div className="flex items-center border rounded-md">
          <span className="px-3 text-gray-600"><HiOutlineMail /></span>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
            placeholder="Enter your email"
          />
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 mb-2">Password:</label>
        <div className="flex items-center border rounded-md">
          <span className="px-3 text-gray-600"><HiOutlineLockClosed /></span>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
            placeholder="Enter your password"
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 px-4 rounded-md transition duration-300 ${loading ? 'bg-indigo-300 cursor-not-allowed' : 'bg-indigo-500 hover:bg-indigo-600'} text-white`}
      >
        {loading ? <Spinner /> : 'Login'}
      </button>
      <p className="mt-4 text-gray-600 text-center text-sm">
        Don't have an account? <Link to="/signup" className="text-indigo-500">Sign up</Link>
      </p>
    </form>
  );
};

export default LoginForm;
