import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Users,
  UserCog,
  Briefcase,
  Clock,
  FileText,
  DollarSign,
  PieChart,
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';

const Sidebar = ({ isOpen }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const menuItems = [
    { 
      icon: Home, 
      text: 'Home',
      href: '/',
      exact: true
    },
    { 
      icon: PieChart,
      text: 'Dashboard',
      subItems: [
        { text: 'Admin Dashboard', href: '/admin-dashboard' },
        { text: 'Employee Dashboard', href: '/employee-dashboard' }
      ]
    },
    { 
      icon: FileText,
      text: 'Leads',
      subItems: [
        { text: 'Sales', href: '/leads/sales' },
        { text: 'Leads', href: '/leads/leads' }
      ]
    },
    { 
      icon: UserCog,
      text: 'User Management',
      subItems: [
        { text: 'Employees', href: '/users/employees' },
        { text: 'Admins', href: '/users/admins' }
      ]
    },
    { 
      icon: Briefcase,
      text: 'HR Management',
      subItems: [
        { text: 'Employees', href: '/hr/employees' },
        { text: 'Leaves', href: '/hr/leaves' },
        { text: 'Attendance', href: '/hr/attendance' }
      ]
    },
    { 
      icon: DollarSign,
      text: 'Payroll',
      subItems: [
        { text: 'Staff Salary', href: '/payroll/salary' },
        { text: 'Reports', href: '/payroll/reports' }
      ]
    },
    { 
      icon: Clock,
      text: 'Work Management',
      subItems: [
        { text: 'Projects', href: '/work/projects' },
        { text: 'Tasks', href: '/work/tasks' },
        { text: 'Timesheet', href: '/work/timesheet' }
      ]
    },
    { 
      icon: Users,
      text: 'Finance',
      subItems: [
        { text: 'Payments', href: '/finance/payments' },
        { text: 'Transactions', href: '/finance/transactions' }
      ]
    }
  ];

  const toggleDropdown = (text) => {
    setOpenDropdown(openDropdown === text ? null : text);
  };

  const isActive = (href, exact = false) => {
    return exact 
      ? location.pathname === href
      : location.pathname.startsWith(href);
  };

  return (
    <aside
      className={`fixed left-0 top-0 z-20 h-full pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75 ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}
    >
      <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 px-3 space-y-1">
            {menuItems.map((item) => (
              <div key={item.text}>
                {item.subItems ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.text)}
                      className={`flex items-center justify-between p-2 w-full text-base font-normal rounded-lg group ${
                        isActive(item.subItems[0].href)
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center">
                        <item.icon className={`w-6 h-6 transition duration-75 ${
                          isActive(item.subItems[0].href)
                            ? 'text-blue-600'
                            : 'text-gray-500 group-hover:text-gray-900'
                        }`} />
                        <span className="ml-3">{item.text}</span>
                      </div>
                      {openDropdown === item.text ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </button>
                    {openDropdown === item.text && (
                      <div className="ml-8 mt-1 space-y-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.text}
                            to={subItem.href}
                            className={`block p-2 text-sm font-normal rounded-lg ${
                              isActive(subItem.href, true)
                                ? 'bg-blue-50 text-blue-600'
                                : 'text-gray-600 hover:bg-gray-100'
                            }`}
                          >
                            {subItem.text}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`flex items-center p-2 text-base font-normal rounded-lg group ${
                      isActive(item.href, item.exact)
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className={`w-6 h-6 transition duration-75 ${
                      isActive(item.href, item.exact)
                        ? 'text-blue-600'
                        : 'text-gray-500 group-hover:text-gray-900'
                    }`} />
                    <span className="ml-3">{item.text}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;