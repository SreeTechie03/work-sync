import React from 'react';
import { Home, Users, Settings, BarChart2, Folder } from 'lucide-react';

const Sidebar = ({ isOpen }) => {
  const menuItems = [
    { icon: Home, text: 'Dashboard' },
    { icon: Users, text: 'Users' },
    { icon: Folder, text: 'Projects' },
    { icon: BarChart2, text: 'Analytics' },
    { icon: Settings, text: 'Settings' },
  ];

  return (
    <aside
      className={`fixed left-0 top-0 z-20 h-full pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75 ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}
    >
      <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 px-3 space-y-1">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <item.icon className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                <span className="ml-3">{item.text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;