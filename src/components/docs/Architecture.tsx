import React from 'react';

export const Architecture = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Internal Architecture</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">How CORE manages state and performance.</p>
      </div>

      <div className="grid gap-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 dark:border-blue-500 p-4">
          <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Context API with Optimization</h3>
          <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed">
            CORE avoids the common pitfall of global re-renders by splitting state and actions.
            Components that only trigger actions (like a "Open Window" button) don't re-render
            when a window moves.
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded shadow-sm">
            <h4 className="font-bold text-gray-800 dark:text-gray-100">1. State and Actions Separation</h4>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
              <code>WindowStateContext</code> and <code>WindowDispatchContext</code> are separated.
              This ensures that consumers of <code>useWindowActions</code> remain stable.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded shadow-sm">
            <h4 className="font-bold text-gray-800 dark:text-gray-100">2. Z-Index Management</h4>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
              <code>useWindowManager</code> automatically handles stacking. When a window is focused,
              it is brought to the top visual layer without mutating the actual DOM order unnecessarily.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded shadow-sm">
            <h4 className="font-bold text-gray-800 dark:text-gray-100">3. Conditional Rendering</h4>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
              Windows are fully unmounted when closed to free memory. Minimized windows rely on CSS
              visibility to retain state while staying hidden.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2">Recommended Folder Structure</h3>
          <pre className="bg-gray-800 dark:bg-black text-gray-200 p-4 rounded text-sm font-mono leading-relaxed border border-gray-700">
            {`src/
  components/
    window/       # Base window logic
    toolbar/      # Responsive taskbar
  store/          # Context and reducers
  hooks/          # Custom hooks (logic extraction)
  styles/         # CSS Modules`}
          </pre>
        </div>
      </div>
    </div>
  );
};
