import React, { useState, useEffect } from 'react';
import { Menu, Search, Bell, User } from 'lucide-react';
import AuthModal from './AuthModal';
import UserProfile from './UserProfile';

const Navbar = ({ toggleSidebar }) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [activeAuthTab, setActiveAuthTab] = useState('signin');
  const [currentUser, setCurrentUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setCurrentUser(JSON.parse(userData));
    }
  }, []);

  const handleAuthSuccess = (userData) => {
    setCurrentUser(userData);
    setIsAuthModalOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <>
      <nav className="bg-white border-b border-gray-200 fixed w-full z-30 top-0 left-0 right-0">
        <div className="px-4 py-3 lg:px-6">
          <div className="flex items-center justify-between">
            {/* Left section - sidebar toggle and logo */}
            <div className="flex items-center">
              <button
                onClick={toggleSidebar}
                className="lg:hidden mr-3 text-gray-600 hover:text-gray-900 focus:outline-none"
                aria-label="Toggle sidebar"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div className="flex items-center">
                <span className="text-xl font-semibold whitespace-nowrap text-blue-600">
                  SmartED Innov.
                </span>
              </div>
            </div>

            {/* Center section - search (hidden on mobile) */}
            <div className="hidden lg:flex flex-1 max-w-md mx-4">
              <form onSubmit={handleSearch} className="w-full">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </form>
            </div>

            {/* Right section - notifications and user */}
            <div className="flex items-center space-x-3">
              <button
                type="button"
                className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none"
                aria-label="Notifications"
              >
                <Bell className="h-5 w-5 text-gray-500" />
              </button>

              {currentUser ? (
                <UserProfile />
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setIsAuthModalOpen(true);
                    setActiveAuthTab('signin');
                  }}
                  className="flex items-center p-2 rounded-lg hover:bg-gray-100 focus:outline-none"
                  aria-label="Sign in"
                >
                  <User className="h-5 w-5 text-gray-500" />
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        activeTab={activeAuthTab}
        setActiveTab={setActiveAuthTab}
        onAuthSuccess={handleAuthSuccess}
      />
    </>
  );
};

export default Navbar;