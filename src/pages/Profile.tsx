import { useAuth } from '../contexts/AuthContext';

function Profile() {
  const { user } = useAuth();

  return (
    <div>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Profile</h1>
          <p className="mt-2 text-sm text-gray-700">
            Manage your account settings and preferences.
          </p>
        </div>
      </div>
      <div className="mt-8">
        {/* Profile content will be added here */}
      </div>
    </div>
  );
}

export default Profile;