import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Dashboard'); // State to track active tab
  const navigate = useNavigate(); // Use navigate hook for redirect

  const handleLogout = () => {
    // Clear isAuthenticated in localStorage
    localStorage.setItem('isAuthenticated', false);
    // Redirect to login page
    navigate('/');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-indigo-600 text-white">
        <h1 className="text-xl font-bold">My Application</h1>
        <div>
          <span className="mr-4">Hello, User!</span>
          <button onClick={handleLogout} className="bg-indigo-500 hover:bg-indigo-700 px-3 py-1 rounded">Logout</button>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md">
          <nav className="mt-5">
            <ul>
              <li>
                <Link
                  to="/dashboard"
                  onClick={() => setActiveTab('Dashboard')}
                  className={`block p-4 text-gray-700 hover:bg-indigo-100 ${activeTab === 'Dashboard' ? 'bg-indigo-100' : ''}`}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  onClick={() => setActiveTab('Profile')}
                  className={`block p-4 text-gray-700 hover:bg-indigo-100 ${activeTab === 'Profile' ? 'bg-indigo-100' : ''}`}
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/settings"
                  onClick={() => setActiveTab('Settings')}
                  className={`block p-4 text-gray-700 hover:bg-indigo-100 ${activeTab === 'Settings' ? 'bg-indigo-100' : ''}`}
                >
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6">
          <h2 className="text-2xl font-semibold">Welcome to the Dashboard!</h2>
          <p className="mt-4">You can manage your settings and profile from here.</p>
          {/* Outlet for nested routes */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
