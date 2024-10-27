import { Menu } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

function Header() {
  const { user } = useAuth();

  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
        <span className="sr-only">Open sidebar</span>
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <div className="flex flex-1" />
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <div className="flex items-center gap-x-4">
            <img
              className="h-8 w-8 rounded-full bg-gray-50"
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                user?.name || ''
              )}&background=random`}
              alt={user?.name}
            />
            <span className="text-sm font-semibold leading-6 text-gray-900">
              {user?.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;