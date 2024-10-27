import { useAuth } from '../contexts/AuthContext';

function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">
        Welcome back, {user?.name}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-900">Question Banks</h2>
          <p className="mt-2 text-sm text-gray-600">
            View and manage your question banks
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-900">Learning Plans</h2>
          <p className="mt-2 text-sm text-gray-600">
            Track your learning progress
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-900">Assessments</h2>
          <p className="mt-2 text-sm text-gray-600">
            Take and review assessments
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;