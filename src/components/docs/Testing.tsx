import React from 'react';

export const Testing = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Testing</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">Ensuring reliability with the test suite.</p>
      </div>

      <div className="space-y-6">
        <p className="text-gray-700 dark:text-gray-300">
          CORE uses a robust testing stack including <strong>Vitest</strong> and <strong>React Testing Library</strong>.
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded border border-gray-300 dark:border-gray-700">
          <h4 className="font-bold text-gray-700 dark:text-gray-200 mb-2">Running Tests</h4>
          <div className="bg-gray-900 dark:bg-black text-green-400 p-3 rounded font-mono text-sm border border-gray-800 dark:border-gray-700">
            npm run test
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-500 p-4">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Tip:</strong> You can also run the interactive "System Tests" app from the Welcome screen
            to verify window behavior visually.
          </p>
        </div>
      </div>
    </div>
  );
};
