import React from 'react';

export const Styling = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Styling & Customization</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">Theming and overriding default styles.</p>
      </div>

      <div className="space-y-6">
        <div className="bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800 p-4 rounded text-sm text-yellow-800 dark:text-yellow-200">
          <strong>Important:</strong> CORE includes base styles that must be imported for correct layout.
          <div className="mt-2 text-gray-800 dark:text-gray-200 font-mono bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded">
            import '@maomaolabs/core/dist/style.css';
          </div>
        </div>

        <section className="@container">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">Stable CSS Classes</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            You can override global styles using these stable class names:
          </p>

          <ul className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
            <li className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3 rounded shadow-sm">
              <code className="text-pink-600 dark:text-pink-400 font-bold block mb-1">.window-container</code>
              <span className="text-sm text-gray-600 dark:text-gray-300">Main window wrapper element.</span>
            </li>
            <li className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3 rounded shadow-sm">
              <code className="text-pink-600 dark:text-pink-400 font-bold block mb-1">.window-active</code>
              <span className="text-sm text-gray-600 dark:text-gray-300">Applied when the window has focus.</span>
            </li>
            <li className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3 rounded shadow-sm">
              <code className="text-pink-600 dark:text-pink-400 font-bold block mb-1">.window-resize-handle</code>
              <span className="text-sm text-gray-600 dark:text-gray-300">The grab area for resizing.</span>
            </li>
            <li className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3 rounded shadow-sm">
              <code className="text-pink-600 dark:text-pink-400 font-bold block mb-1">.window-scrollbar</code>
              <span className="text-sm text-gray-600 dark:text-gray-300">Custom scrollbar styling.</span>
            </li>
          </ul>
        </section>

        <section className="bg-gray-900 dark:bg-black text-white p-6 rounded-lg mt-8 border border-gray-800 dark:border-gray-700">
          <h3 className="text-xl font-bold mb-2">Dark Mode Support</h3>
          <p className="text-gray-300 leading-relaxed">
            The library supports native dark mode via the <code>@media (prefers-color-scheme: dark)</code> query.
            Colors automatically adapt to system preferences without extra configuration.
          </p>
        </section>
      </div>
    </div>
  );
};
