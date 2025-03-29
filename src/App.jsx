import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

// Dashboard Pages
import AdminDashboard from './pages/AdminDashboard';
import EmployeeDashboard from './pages/EmployeeDashboard';

// Leads Pages
import SalesLeads from './pages/leads/SalesLeads';
import AllLeads from './pages/leads/AllLeads';

// User Management Pages
import Employees from './pages/users/Employees';
import Admins from './pages/users/Admins';

// HR Management Pages
import HREmployees from './pages/hr/Employees';
import Leaves from './pages/hr/Leaves';
import Attendance from './pages/hr/Attendance';

// Payroll Pages
import StaffSalary from './pages/payroll/StaffSalary';
import PayrollReports from './pages/payroll/Reports';

// Work Management Pages
import Projects from './pages/work/Projects';
import Tasks from './pages/work/Tasks';
import Timesheet from './pages/work/Timesheet';

// Finance Pages
import Payments from './pages/finance/Payments';
import Transactions from './pages/finance/Transactions';

// Settings Pages
import GeneralSettings from './pages/settings/GeneralSettings';
import UserSettings from './pages/settings/UserSettings';
import NotificationSettings from './pages/settings/NotificationSettings';

// Home Page
import Home from './pages/Home';

function App() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        {/* Sidebar - fixed on desktop, overlay on mobile */}
        <div className={`fixed inset-y-0 left-0 z-30 w-64 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out`}>
          <Sidebar />
        </div>
        
        {/* Main content area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Navbar - fixed at top */}
          <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          
          {/* Content container with proper spacing */}
          <main className="flex-1 overflow-x-hidden overflow-y-auto pt-16 lg:ml-0">
            <div className="p-4 md:p-6">
              <Routes>
                {/* Home */}
                <Route path="/" element={<Home />} />
                
                {/* Dashboard */}
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
                
                {/* Leads */}
                <Route path="/leads/sales" element={<SalesLeads />} />
                <Route path="/leads/leads" element={<AllLeads />} />
                
                {/* User Management */}
                <Route path="/users/employees" element={<Employees />} />
                <Route path="/users/admins" element={<Admins />} />
                
                {/* HR Management */}
                <Route path="/hr/employees" element={<HREmployees />} />
                <Route path="/hr/leaves" element={<Leaves />} />
                <Route path="/hr/attendance" element={<Attendance />} />
                
                {/* Payroll */}
                <Route path="/payroll/salary" element={<StaffSalary />} />
                <Route path="/payroll/reports" element={<PayrollReports />} />
                
                {/* Work Management */}
                <Route path="/work/projects" element={<Projects />} />
                <Route path="/work/tasks" element={<Tasks />} />
                <Route path="/work/timesheet" element={<Timesheet />} />
                
                {/* Finance */}
                <Route path="/finance/payments" element={<Payments />} />
                <Route path="/finance/transactions" element={<Transactions />} />

                {/* Settings */}
                <Route path="/settings/general" element={<GeneralSettings />} />
                <Route path="/settings/security" element={<UserSettings />} />
                <Route path="/settings/notifications" element={<NotificationSettings />} />

                {/* 404 Not Found */}
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;