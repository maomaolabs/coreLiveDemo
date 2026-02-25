import React from 'react';

export const BasicUsage = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-2 duration-300">

      {/* Header */}
      <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">Quick Start</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">Get a window running in under 30 seconds.</p>
      </div>

      <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-[#0d1117] border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm">
        <div className="flex px-4 py-3 bg-white dark:bg-[#161b22] border-b border-gray-200 dark:border-gray-800 items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <span className="ml-2 text-xs font-mono text-gray-500 dark:text-gray-400">App.tsx</span>
        </div>
        <pre className="p-5 text-[13px] font-mono overflow-x-auto text-gray-800 dark:text-gray-300 leading-relaxed">
          <span className="text-purple-600 dark:text-purple-400">import</span> {'{'} WindowSystemProvider, WindowManager, useWindowActions {'}'} <span className="text-purple-600 dark:text-purple-400">from</span> <span className="text-green-600 dark:text-green-400">'@maomaolabs/core'</span>;
          <br />
          <span className="text-purple-600 dark:text-purple-400">import</span> <span className="text-green-600 dark:text-green-400">'@maomaolabs/core/dist/style.css'</span>; <span className="text-gray-400 dark:text-gray-500">// Critical for native feeling interactions</span>
          <br />
          <br />
          <span className="text-blue-600 dark:text-blue-400">const</span> <span className="text-yellow-600 dark:text-yellow-300">AppLauncher</span> = () =&gt; {'{'}
          <br />
          {'  '}<span className="text-blue-600 dark:text-blue-400">const</span> {'{'} openWindow {'}'} = <span className="text-yellow-600 dark:text-yellow-300">useWindowActions</span>();
          <br />
          <br />
          {'  '}<span className="text-purple-600 dark:text-purple-400">return</span> (
          <br />
          {'    '}&lt;<span className="text-pink-600 dark:text-pink-400">button</span> <span className="text-blue-600 dark:text-blue-300">onClick</span>={'() => openWindow({'}
          <br />
          {'      '}<span className="text-blue-600 dark:text-blue-300">id</span>: <span className="text-green-600 dark:text-green-400">'hello'</span>,
          <br />
          {'      '}<span className="text-blue-600 dark:text-blue-300">title</span>: <span className="text-green-600 dark:text-green-400">'Hello'</span>,
          <br />
          {'      '}<span className="text-blue-600 dark:text-blue-300">component</span>: &lt;<span className="text-pink-600 dark:text-pink-400">div</span>&gt;World!&lt;/<span className="text-pink-600 dark:text-pink-400">div</span>&gt;
          <br />
          {'    })'}&gt;
          <br />
          {'      '}Launch App
          <br />
          {'    '}&lt;/<span className="text-pink-600 dark:text-pink-400">button</span>&gt;
          <br />
          {'  '});
          <br />
          {'};'}
          <br />
          <br />
          <span className="text-purple-600 dark:text-purple-400">export default function</span> <span className="text-yellow-600 dark:text-yellow-300">App</span>() {'{'}
          <br />
          {'  '}<span className="text-purple-600 dark:text-purple-400">return</span> (
          <br />
          {'    '}&lt;<span className="text-yellow-600 dark:text-yellow-400">WindowSystemProvider</span>&gt;
          <br />
          {'      '}&lt;<span className="text-yellow-600 dark:text-yellow-400">WindowManager</span> /&gt;
          <br />
          {'      '}&lt;<span className="text-yellow-600 dark:text-yellow-400">AppLauncher</span> /&gt;
          <br />
          {'    '}&lt;/<span className="text-yellow-600 dark:text-yellow-400">WindowSystemProvider</span>&gt;
          <br />
          {'  '});
          <br />
          {'}'}
        </pre>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-800 pt-12 space-y-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">Detailed Usage Guide</h2>

        {/* Integrating Toolbar */}
        <section className="space-y-4">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 border-l-4 border-blue-500 pl-3">Integrating the Toolbar</h3>
          <p className="text-gray-700 dark:text-gray-300">
            For a full desktop experience, include the <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm text-pink-500">Toolbar</code> component to manage minimized windows and app launchers, including folder support.
          </p>

          <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-[#0d1117] border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm mt-4">
            <pre className="p-5 text-[13px] font-mono overflow-x-auto text-gray-800 dark:text-gray-300 leading-relaxed">
              <span className="text-purple-600 dark:text-purple-400">import</span> {'{'} WindowSystemProvider, WindowManager, Toolbar {'}'} <span className="text-purple-600 dark:text-purple-400">from</span> <span className="text-green-600 dark:text-green-400">'@maomaolabs/core'</span>;
              <br />
              <br />
              <span className="text-blue-600 dark:text-blue-400">const</span> <span className="text-gray-900 dark:text-white">DESKTOP_ITEMS</span> = [
              <br />
              {'  {'}
              <br />
              {'    '}<span className="text-blue-600 dark:text-blue-300">id</span>: <span className="text-green-600 dark:text-green-400">'browser-app'</span>,
              <br />
              {'    '}<span className="text-blue-600 dark:text-blue-300">title</span>: <span className="text-green-600 dark:text-green-400">'Browser'</span>,
              <br />
              {'    '}<span className="text-blue-600 dark:text-blue-300">component</span>: &lt;<span className="text-pink-600 dark:text-pink-400">div</span> /&gt;, <span className="text-gray-400 dark:text-gray-500">// Your app component</span>
              <br />
              {'    '}<span className="text-blue-600 dark:text-blue-300">initialSize</span>: {'{'} <span className="text-blue-600 dark:text-blue-300">width</span>: <span className="text-orange-500 dark:text-orange-400">800</span>, <span className="text-blue-600 dark:text-blue-300">height</span>: <span className="text-orange-500 dark:text-orange-400">600</span> {'}'}
              <br />
              {'  },'}
              <br />
              {'  {'}
              <br />
              {'    '}<span className="text-blue-600 dark:text-blue-300">id</span>: <span className="text-green-600 dark:text-green-400">'games-folder'</span>,
              <br />
              {'    '}<span className="text-blue-600 dark:text-blue-300">title</span>: <span className="text-green-600 dark:text-green-400">'Games'</span>,
              <br />
              {'    '}<span className="text-blue-600 dark:text-blue-300">apps</span>: [
              <br />
              {'      {'} <span className="text-blue-600 dark:text-blue-300">id</span>: <span className="text-green-600 dark:text-green-400">'minesweeper'</span>, <span className="text-blue-600 dark:text-blue-300">title</span>: <span className="text-green-600 dark:text-green-400">'Minesweeper'</span>, <span className="text-blue-600 dark:text-blue-300">component</span>: &lt;<span className="text-pink-600 dark:text-pink-400">div</span> /&gt; {'}'}
              <br />
              {'    ]'}
              <br />
              {'  }'}
              <br />
              ];
              <br />
              <br />
              <span className="text-purple-600 dark:text-purple-400">export default function</span> <span className="text-yellow-600 dark:text-yellow-300">Desktop</span>() {'{'}
              <br />
              {'  '}<span className="text-purple-600 dark:text-purple-400">return</span> (
              <br />
              {'    '}&lt;<span className="text-yellow-600 dark:text-yellow-400">WindowSystemProvider</span>&gt;
              <br />
              {'      '}&lt;<span className="text-yellow-600 dark:text-yellow-400">WindowManager</span> /&gt;
              <br />
              {'      '}&lt;<span className="text-yellow-600 dark:text-yellow-400">Toolbar</span> <span className="text-blue-600 dark:text-blue-300">toolbarItems</span>={'{DESKTOP_ITEMS}'} <span className="text-blue-600 dark:text-blue-300">showLogo</span>={'{true}'} /&gt;
              <br />
              {'    '}&lt;/<span className="text-yellow-600 dark:text-yellow-400">WindowSystemProvider</span>&gt;
              <br />
              {'  '});
              <br />
              {'}'}
            </pre>
          </div>
        </section>

        {/* Accessing Window State */}
        <section className="space-y-4">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 border-l-4 border-green-500 pl-3">Accessing Window State</h3>
          <p className="text-gray-700 dark:text-gray-300">
            If you need to render UI based on currently open windows (e.g., a custom taskbar), use the <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm text-pink-500">useWindows</code> hook.
            <strong className="text-amber-600 dark:text-amber-400 ml-1">Warning:</strong> This triggers a re-render on any window state change (drag, resize, etc).
          </p>

          <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-[#0d1117] border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm mt-4">
            <pre className="p-5 text-[13px] font-mono overflow-x-auto text-gray-800 dark:text-gray-300 leading-relaxed">
              <span className="text-purple-600 dark:text-purple-400">import</span> {'{'} useWindows {'}'} <span className="text-purple-600 dark:text-purple-400">from</span> <span className="text-green-600 dark:text-green-400">'@maomaolabs/core'</span>;
              <br />
              <br />
              <span className="text-blue-600 dark:text-blue-400">const</span> <span className="text-yellow-600 dark:text-yellow-300">OpenAppCounter</span> = () =&gt; {'{'}
              <br />
              {'  '}<span className="text-blue-600 dark:text-blue-400">const</span> windows = <span className="text-yellow-600 dark:text-yellow-300">useWindows</span>();
              <br />
              {'  '}<span className="text-purple-600 dark:text-purple-400">return</span> &lt;<span className="text-pink-600 dark:text-pink-400">div</span>&gt;Active apps: {'{windows.length}'}&lt;/<span className="text-pink-600 dark:text-pink-400">div</span>&gt;;
              <br />
              {'};'}
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
};
