import { useState } from 'react';

function Reports() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Reports</h1>
          <p className="mt-2 text-sm text-gray-700">
            View and generate system reports and analytics.
          </p>
        </div>
      </div>
      <div className="mt-8">
        {/* Reports content will be added here */}
      </div>
    </div>
  );
}

export default Reports;