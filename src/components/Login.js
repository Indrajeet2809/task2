import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // React Router's hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate login validation
    if (email.length > 0 && password.length > 0) {
      // Store login status in localStorage
      localStorage.setItem('isAuthenticated', true);
      // On successful login, redirect to the dashboard
      navigate('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
        {error && <p className="mt-2 text-center text-red-500">{error}</p>}
        <form className="mt-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm" required>Email or Username</label>
            <input 
              type="text"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm" required>Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-2 text-right">
            <a href="/" className="text-sm text-gray-600 hover:underline">Forgot Password?</a>
          </div>
          <div className="mt-6">
            <button 
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              Login
            </button>
          </div>
        </form>
        <p className="mt-8 text-sm text-center text-gray-600">
          Don't have an account? <a href="/signup" className="text-indigo-600 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
