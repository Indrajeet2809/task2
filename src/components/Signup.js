import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validate the form fields
  const validate = () => {
    const errors = {};
    
    if (!formData.username) {
      errors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      errors.username = 'Username must be at least 3 characters long';
    }
    
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = 'Passwords must match';
    }

    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Submit the form or perform any further actions
      console.log('Form submitted successfully:', formData);
      alert('Form submitted successfully');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">Sign Up</h2>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm">Username</label>
            <input 
              type="text"
              name="username"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
          </div>
          <div className="mt-4">
            <label className="block text-sm">Email</label>
            <input 
              type="email"
              name="email"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="mt-4">
            <label className="block text-sm">Password</label>
            <input 
              type="password"
              name="password"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>
          <div className="mt-4">
            <label className="block text-sm">Confirm Password</label>
            <input 
              type="password"
              name="confirmPassword"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
          </div>
          <div className="mt-6">
            <button 
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="mt-8 text-sm text-center text-gray-600">
          Already have an account? <a href="/login" className="text-indigo-600 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
