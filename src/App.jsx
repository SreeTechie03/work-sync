import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} />
      
      {/* Main Content */}
      <div className="lg:ml-64 pt-16">
        <main className="p-4">
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">
              Welcome to Dashboard
            </h1>
            <p className="text-gray-600">
              This is your main content area. Start building your dashboard components here.
            </p>
            
            {/* Example Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <h3 className="text-lg font-medium text-gray-800">Card {item}</h3>
                  <p className="text-gray-600 mt-2">
                    This is a sample card that you can use to display your content.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;