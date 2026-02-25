import React from 'react';
import { Settings, FileCode2, Scale } from 'lucide-react';
export const Contribution = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <section className="space-y-4">
        <div className="flex items-center gap-3 border-b border-gray-200 dark:border-gray-800 pb-2">
          <Settings className="text-gray-600 dark:text-gray-400" size={24} />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Configuration</h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          This library does not use environment variables. Styling behavior is primarily managed via the required CSS import:
        </p>
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-[#0d1117] border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm mt-4">
          <pre className="p-5 text-[13px] font-mono overflow-x-auto text-gray-800 dark:text-gray-300">
            <span className="text-purple-600 dark:text-purple-400">import</span> <span className="text-green-600 dark:text-green-400">'@maomaolabs/core/dist/style.css'</span>;
          </pre>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 italic">
          Ensure your Vite/Webpack setup is configured to import and bundle CSS from <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-pink-500">node_modules</code>.
        </p>
      </section>
      <section className="space-y-4">
        <div className="flex items-center gap-3 border-b border-gray-200 dark:border-gray-800 pb-2">
          <FileCode2 className="text-gray-600 dark:text-gray-400" size={24} />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Contribution</h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          We welcome PRs. To run locally:
        </p>
        <ol className="list-decimal list-inside space-y-4 text-gray-800 dark:text-gray-200 ml-2">
          <li className="pl-2">
            <span className="font-medium">Clone and install dependencies:</span>
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-3 mt-2 font-mono text-sm text-gray-300">
              <span className="text-[#3fb950] mr-3 select-none">$</span>npm install
            </div>
          </li>
          <li className="pl-2">
            <span className="font-medium">Start development server:</span>
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-3 mt-2 font-mono text-sm text-gray-300">
              <span className="text-[#3fb950] mr-3 select-none">$</span>npm run dev
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 ml-1">To watch changes and test locally.</p>
          </li>
          <li className="pl-2">
            <span className="font-medium">Make changes and verify:</span>
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-3 mt-2 font-mono text-sm text-gray-300">
              <span className="text-[#3fb950] mr-3 select-none">$</span>npm run test
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 ml-1">Ensure all Vitest suites pass before committing to a PR.</p>
          </li>
        </ol>
      </section>
      <section className="space-y-4">
        <div className="flex items-center gap-3 border-b border-gray-200 dark:border-gray-800 pb-2">
          <Scale className="text-gray-600 dark:text-gray-400" size={24} />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">License</h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          <strong>MIT License.</strong> See <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm text-pink-500">LICENSE</code> for more information.
        </p>
      </section>
    </div>
  );
};
