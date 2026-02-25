import React from 'react';

export const FAQ = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">FAQ</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">Common questions and answers.</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100">Can I use this with Next.js?</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
            Yes, but since it manipulates <code>window</code> and the DOM, ensure you import components dynamically
            or use them within components marked with <code>'use client'</code>.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100">Do windows persist on reload?</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
            By default, no. State lives in memory within <code>WindowSystemProvider</code>.
            You can implement persistence by syncing state with <code>localStorage</code>.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100">Does it support multiple monitors?</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
            No, it is limited to the current browser viewport.
          </p>
        </div>
      </div>
    </div>
  );
};
