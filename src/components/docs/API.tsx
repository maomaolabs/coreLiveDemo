import React from 'react';
import { Package, Hash, GitBranch } from 'lucide-react';
export const API = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
        <h1 className="text-xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">API Reference</h1>
        <p className="text-sm sm:text-lg text-gray-600 dark:text-gray-300">Detailed reference for core components, hooks, and types.</p>
      </div>
      <div className="space-y-12">
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-gray-200 dark:border-gray-800 pb-2">
            <Package className="text-blue-500" size={24} />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Core Components</h2>
          </div>
          <div className="overflow-x-auto -mx-3 sm:mx-0">
            <table className="w-full text-xs sm:text-sm text-left border-collapse min-w-[480px]">
              <thead className="bg-gray-50 dark:bg-[#161b22] text-gray-700 dark:text-gray-300 border-y border-gray-200 dark:border-gray-800">
                <tr>
                  <th className="py-2 px-2 sm:px-4 font-semibold">Component</th>
                  <th className="py-2 px-2 sm:px-4 font-semibold">Description</th>
                  <th className="py-2 px-2 sm:px-4 font-semibold">Props</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800 text-gray-800 dark:text-gray-300">
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="py-2 px-2 sm:px-4 font-mono text-purple-600 dark:text-purple-400 break-all">&lt;WindowSystemProvider /&gt;</td>
                  <td className="py-2 px-2 sm:px-4 leading-relaxed">Context provider required for the window system. Wrap your app with this.</td>
                  <td className="py-2 px-2 sm:px-4 font-mono text-blue-600 dark:text-blue-400">children: ReactNode</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="py-2 px-2 sm:px-4 font-mono text-purple-600 dark:text-purple-400 break-all">&lt;WindowManager /&gt;</td>
                  <td className="py-2 px-2 sm:px-4 leading-relaxed">Renders active windows and snap overlays. Must be inside the provider.</td>
                  <td className="py-2 px-2 sm:px-4 italic text-gray-500">None</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="py-2 px-2 sm:px-4 font-mono text-purple-600 dark:text-purple-400 break-all">&lt;Toolbar /&gt;</td>
                  <td className="py-2 px-2 sm:px-4 leading-relaxed">Renders the taskbar with app launchers and manages minimized windows.</td>
                  <td className="py-2 px-2 sm:px-4 font-mono text-blue-600 dark:text-blue-400">
                    <div className="space-y-1">
                      <div>toolbarItems: ToolbarItem[]</div>
                      <div>showLogo?: boolean</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-gray-200 dark:border-gray-800 pb-2">
            <Hash className="text-yellow-500" size={24} />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Core Hooks</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-[#30363d] rounded-xl p-3 sm:p-6 shadow-sm">
              <h3 className="font-mono text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2">useWindowActions()</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Returns an object with methods to manipulate windows without subscribing to window state changes.
              </p>
              <ul className="space-y-3 font-mono text-sm max-w-full">
                <li className="flex gap-2 items-start">
                  <span className="text-pink-600 dark:text-pink-400 shrink-0 mt-0.5">•</span>
                  <div className="flex-1 min-w-0">
                    <span className="text-blue-600 dark:text-blue-400">openWindow</span>(window: WindowDefinition): void
                    <span className="text-gray-500 block text-xs mt-1 md-fluid:inline md-fluid:text-sm md-fluid:mt-0 font-sans opacity-90 break-words">- Opens a new window or focuses it if already open.</span>
                  </div>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-pink-600 dark:text-pink-400 shrink-0 mt-0.5">•</span>
                  <div className="flex-1 min-w-0">
                    <span className="text-blue-600 dark:text-blue-400">closeWindow</span>(id: string): void
                    <span className="text-gray-500 block text-xs mt-1 md-fluid:inline md-fluid:text-sm md-fluid:mt-0 font-sans opacity-90 break-words">- Destroys a window instance.</span>
                  </div>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-pink-600 dark:text-pink-400 shrink-0 mt-0.5">•</span>
                  <div className="flex-1 min-w-0">
                    <span className="text-blue-600 dark:text-blue-400">focusWindow</span>(id: string): void
                    <span className="text-gray-500 block text-xs mt-1 md-fluid:inline md-fluid:text-sm md-fluid:mt-0 font-sans opacity-90 break-words">- Brings a window to the top of the z-index stack.</span>
                  </div>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-pink-600 dark:text-pink-400 shrink-0 mt-0.5">•</span>
                  <div className="flex-1 min-w-0">
                    <span className="text-blue-600 dark:text-blue-400">updateWindow</span>(id: string, data: Partial&lt;WindowInstance&gt;): void
                    <span className="text-gray-500 block text-xs mt-1 md-fluid:inline md-fluid:text-sm md-fluid:mt-0 font-sans opacity-90 break-words">- Patches an existing window's state.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-[#30363d] rounded-xl p-3 sm:p-6 shadow-sm">
              <h3 className="font-mono text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2">useWindows()</h3>
              <ul className="space-y-2 font-mono text-sm">
                <li className="flex gap-2 items-start">
                  <span className="text-pink-600 dark:text-pink-400 shrink-0 mt-0.5">•</span>
                  <div className="flex-1 min-w-0">
                    Returns: <span className="text-purple-600 dark:text-purple-400">WindowInstance[]</span>
                    <span className="text-gray-500 block text-xs mt-1 md-fluid:inline md-fluid:text-sm md-fluid:mt-0 font-sans opacity-90 break-words">- The list of all currently active window instances.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-[#30363d] rounded-xl p-3 sm:p-6 shadow-sm">
              <h3 className="font-mono text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2">useWindowSnap()</h3>
              <ul className="space-y-2 font-mono text-sm">
                <li className="flex gap-2">
                  <span className="text-pink-600 dark:text-pink-400 shrink-0">•</span>
                  <span className="break-all">Returns: <span className="text-purple-600 dark:text-purple-400">{'{'} snapPreview: {'{'} side: 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' {'}'} | null, setSnapPreview: Function {'}'}</span></span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-gray-200 dark:border-gray-800 pb-2">
            <GitBranch className="text-purple-500" size={24} />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Interfaces</h2>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="font-mono text-lg font-bold text-gray-900 dark:text-white mb-1">WindowDefinition</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">(Used for opening windows)</p>
              <div className="overflow-x-auto -mx-3 sm:mx-0 rounded-xl border border-gray-200 dark:border-[#30363d] shadow-sm">
                <table className="w-full text-xs sm:text-sm text-left border-collapse min-w-[440px]">
                  <thead className="bg-gray-50 dark:bg-[#161b22] text-gray-700 dark:text-gray-300">
                    <tr>
                      <th className="py-2 px-2 sm:px-4 font-semibold">Property</th>
                      <th className="py-2 px-2 sm:px-4 font-semibold">Type</th>
                      <th className="py-2 px-2 sm:px-4 font-semibold">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-800 text-gray-800 dark:text-gray-300 bg-white dark:bg-[#0d1117]">
                    <tr>
                      <td className="py-2 px-2 sm:px-4 font-mono font-medium">id</td>
                      <td className="py-2 px-2 sm:px-4 font-mono text-purple-600 dark:text-purple-400">string</td>
                      <td className="py-2 px-2 sm:px-4 leading-relaxed"><strong>Required.</strong> Unique identifier for the window instance.</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-2 sm:px-4 font-mono font-medium">title</td>
                      <td className="py-2 px-2 sm:px-4 font-mono text-purple-600 dark:text-purple-400">string</td>
                      <td className="py-2 px-2 sm:px-4 leading-relaxed"><strong>Required.</strong> Text displayed in the window header.</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-2 sm:px-4 font-mono font-medium">component</td>
                      <td className="py-2 px-2 sm:px-4 font-mono text-purple-600 dark:text-purple-400">React.ReactNode</td>
                      <td className="py-2 px-2 sm:px-4 leading-relaxed"><strong>Required.</strong> The view to be rendered inside the window.</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-2 sm:px-4 font-mono font-medium">icon</td>
                      <td className="py-2 px-2 sm:px-4 font-mono text-purple-600 dark:text-purple-400">React.ReactNode</td>
                      <td className="py-2 px-2 sm:px-4 leading-relaxed">Optional element (e.g., SVG/image) for headers/toolbars.</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-2 sm:px-4 font-mono font-medium">initialSize</td>
                      <td className="py-2 px-2 sm:px-4 font-mono text-purple-600 dark:text-purple-400">{'{'} width: number; height: number {'}'}</td>
                      <td className="py-2 px-2 sm:px-4 leading-relaxed">Optional starting dimensions.</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-2 sm:px-4 font-mono font-medium">initialPosition</td>
                      <td className="py-2 px-2 sm:px-4 font-mono text-purple-600 dark:text-purple-400">{'{'} x: number; y: number {'}'}</td>
                      <td className="py-2 px-2 sm:px-4 leading-relaxed">Optional starting coordinates.</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-2 sm:px-4 font-mono font-medium">layer</td>
                      <td className="py-2 px-2 sm:px-4 font-mono text-purple-600 dark:text-purple-400">'base' | 'normal' | 'alwaysOnTop' | 'modal'</td>
                      <td className="py-2 px-2 sm:px-4 leading-relaxed">Window render priority layer.</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-2 sm:px-4 font-mono font-medium">isMaximized</td>
                      <td className="py-2 px-2 sm:px-4 font-mono text-purple-600 dark:text-purple-400">boolean</td>
                      <td className="py-2 px-2 sm:px-4 leading-relaxed">If true, spawns the window spanning the screen.</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-2 sm:px-4 font-mono font-medium">canMinimize</td>
                      <td className="py-2 px-2 sm:px-4 font-mono text-purple-600 dark:text-purple-400">boolean</td>
                      <td className="py-2 px-2 sm:px-4 leading-relaxed">Allows the user to hide the window.</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-2 sm:px-4 font-mono font-medium">canMaximize</td>
                      <td className="py-2 px-2 sm:px-4 font-mono text-purple-600 dark:text-purple-400">boolean</td>
                      <td className="py-2 px-2 sm:px-4 leading-relaxed">Allows the user to toggle screen-spanning.</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-2 sm:px-4 font-mono font-medium">canClose</td>
                      <td className="py-2 px-2 sm:px-4 font-mono text-purple-600 dark:text-purple-400">boolean</td>
                      <td className="py-2 px-2 sm:px-4 leading-relaxed">Allows the user to destroy the window.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h3 className="font-mono text-lg font-bold text-gray-900 dark:text-white mb-1">FolderDefinition</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">(Used within Toolbars to group apps)</p>
              <div className="overflow-x-auto -mx-3 sm:mx-0 rounded-xl border border-gray-200 dark:border-[#30363d] shadow-sm">
                <table className="w-full text-xs sm:text-sm text-left border-collapse min-w-[440px]">
                  <thead className="bg-gray-50 dark:bg-[#161b22] text-gray-700 dark:text-gray-300">
                    <tr>
                      <th className="py-2 px-2 sm:px-4 font-semibold">Property</th>
                      <th className="py-2 px-2 sm:px-4 font-semibold">Type</th>
                      <th className="py-2 px-2 sm:px-4 font-semibold">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-800 text-gray-800 dark:text-gray-300 bg-white dark:bg-[#0d1117]">
                    <tr>
                      <td className="py-2 px-2 sm:px-4 font-mono font-medium">id</td>
                      <td className="py-2 px-2 sm:px-4 font-mono text-purple-600 dark:text-purple-400">string</td>
                      <td className="py-2 px-2 sm:px-4 leading-relaxed"><strong>Required.</strong> Unique identifier for the folder.</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-2 sm:px-4 font-mono font-medium">title</td>
                      <td className="py-2 px-2 sm:px-4 font-mono text-purple-600 dark:text-purple-400">string</td>
                      <td className="py-2 px-2 sm:px-4 leading-relaxed"><strong>Required.</strong> Folder name.</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-2 sm:px-4 font-mono font-medium">apps</td>
                      <td className="py-2 px-2 sm:px-4 font-mono text-purple-600 dark:text-purple-400">WindowDefinition[]</td>
                      <td className="py-2 px-2 sm:px-4 leading-relaxed"><strong>Required.</strong> Array of windows contained within.</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-2 sm:px-4 font-mono font-medium">icon</td>
                      <td className="py-2 px-2 sm:px-4 font-mono text-purple-600 dark:text-purple-400">React.ReactNode</td>
                      <td className="py-2 px-2 sm:px-4 leading-relaxed">Optional visual descriptor.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 italic">
              *Note: <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-pink-500">ToolbarItem</code> is a union type of <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-pink-500">WindowDefinition | FolderDefinition</code>.*
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
