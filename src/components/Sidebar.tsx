import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  GraduationCap, 
  Settings,
  Users,
  FileText
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

function Sidebar() {
  const { user } = useAuth();

  const links = [
    { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/question-banks', icon: BookOpen, label: 'Question Banks' },
    { to: '/learning-plans', icon: GraduationCap, label: 'Learning Plans' },
  ];

  // Add admin-only links
  if (user?.role === 'admin') {
    links.push(
      { to: '/admin/users', icon: Users, label: 'Users' },
      { to: '/admin/reports', icon: FileText, label: 'Reports' }
    );
  }

  // Add settings link at the end
  links.push({ to: '/settings', icon: Settings, label: 'Settings' });

  return (
    <div className="w-64 bg-white shadow-lg min-h-screen">
      <nav className="mt-8 space-y-1 px-2">
        {links.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                isActive
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`
            }
          >
            <Icon className="mr-3 h-5 w-5" />
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;