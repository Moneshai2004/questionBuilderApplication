import { useState } from 'react';
import { Plus } from 'lucide-react';

function LearningPlans() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Learning Plans</h1>
          <p className="mt-2 text-sm text-gray-700">
            View and manage your personalized learning plans.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <Plus className="-ml-0.5 h-5 w-5" aria-hidden="true" />
            New Learning Plan
          </button>
        </div>
      </div>
      <div className="mt-8">
        {/* Learning plans list will be added here */}
      </div>
    </div>
  );
}

export default LearningPlans;