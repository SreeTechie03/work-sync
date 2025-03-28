import React, { useState } from 'react';
import { Menu, Search, Bell, User } from 'lucide-react';
import AuthModal from './AuthModal';

const Navbar = ({ toggleSidebar }) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [activeAuthTab, setActiveAuthTab] = useState('signin');

  return (
    <>
      <nav className="bg-white border-b border-gray-200 fixed w-full z-30 top-0">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                onClick={toggleSidebar}
                className="lg:hidden mr-2 text-gray-600 hover:text-gray-900"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div className="flex items-center">
                <span className="text-xl font-semibold flex items-center lg:ml-2.5">
                  <span className="text-blue-600">SmartED Innov.</span>
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="hidden lg:flex items-center mr-4 bg-gray-100 rounded-lg px-3 py-1.5">
                <Search className="h-5 w-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="ml-2 bg-transparent border-none focus:outline-none text-sm"
                />
              </div>
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <Bell className="h-5 w-5 text-gray-500" />
              </button>
              <button 
                className="flex items-center p-2 rounded-lg hover:bg-gray-100 ml-2"
                onClick={() => {
                  setIsAuthModalOpen(true);
                  setActiveAuthTab('signin');
                }}
              >
                <User className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        activeTab={activeAuthTab}
        setActiveTab={setActiveAuthTab}
      />
    </>
  );
};

export default Navbar;