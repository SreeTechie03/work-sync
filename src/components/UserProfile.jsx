// components/UserProfile.jsx
import React from 'react';
import { User, LogOut } from 'lucide-react';

function UserProfile() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    window.location.reload();
  };

  if (!user) return null;

  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-full">
        <User className="w-4 h-4 text-gray-600" />
        <span className="text-sm font-medium">{user.name}</span>
      </div>
      <button 
        onClick={handleLogout}
        className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full"
        title="Logout"
      >
        <LogOut className="w-4 h-4" />
      </button>
    </div>
  );
}

export default UserProfile;