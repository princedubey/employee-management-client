import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineUser, HiOutlinePhone } from 'react-icons/hi';
import Spinner from './Spinner';
import { signup } from '../services/apiServices';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    try {
      const confirm_password = confirmPassword
      const response = await signup({name, email, phone, password, confirm_password});
      navigate('/');
    } catch (err) {
      setError('Failed to sign up. Please check your credentials and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-3xl font-semibold mb-6 text-center">Sign Up</h2>
      {error && <div className="text-red-500 mb-4 text-sm">{error}</div>}
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 mb-2">Name:</label>
        <div className="flex items-center border rounded-md">
          <span className="px-3 text-gray-600"><HiOutlineUser /></span>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
            placeholder="Enter your name"
          />
        </div>
      </div>
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
      <div className="mb-4">
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
      <div className="mb-4">
        <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">Confirm Password:</label>
        <div className="flex items-center border rounded-md">
          <span className="px-3 text-gray-600"><HiOutlineLockClosed /></span>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
            placeholder="Confirm your password"
          />
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="phone" className="block text-gray-700 mb-2">Phone:</label>
        <div className="flex items-center border rounded-md">
          <span className="px-3 text-gray-600"><HiOutlinePhone /></span>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
            placeholder="Enter your phone number"
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
      >
        {loading ? <Spinner /> : 'Sign Up'}
      </button>
      <p className="mt-4 text-gray-600 text-center text-sm">
        Already have an account? <Link to="/" className="text-indigo-500">Login</Link>
      </p>
    </form>
  );
};

export default SignupForm;
