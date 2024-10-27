import { useState } from 'react';
import { Plus } from 'lucide-react';

function QuestionBanks() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Question Banks</h1>
          <p className="mt-2 text-sm text-gray-700">
            Manage and create question banks for assessments and training.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <Plus className="-ml-0.5 h-5 w-5" aria-hidden="true" />
            New Question Bank
          </button>
        </div>
      </div>
      <div className="mt-8">
        {/* Question banks list will be added here */}
      </div>
    </div>
  );
}

export default QuestionBanks;