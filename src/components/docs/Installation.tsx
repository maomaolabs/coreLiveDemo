import React from 'react';
import { Zap, Maximize2, Layout, MonitorSmartphone, MousePointer2 } from 'lucide-react';
export const Installation = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="border-b border-gray-200 dark:border-gray-800 pb-8">
        <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-3 tracking-tight leading-tight">@maomaolabs/core</h1>
        <p className="text-base text-gray-600 dark:text-gray-300 font-medium leading-relaxed">
          A standalone lightweight React library that brings a complete, performant, and responsive desktop window management experience to the web.
        </p>
      </div>
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <Zap className="text-yellow-500 shrink-0" size={22} />
          Key Features
        </h2>
        <div className="flex flex-wrap gap-3">
          <FeatureItem
            icon={<Zap size={16} className="text-yellow-500" />}
            title="Uncompromised performance"
            desc="Zero re-renders thanks to context splitting."
          />
          <FeatureItem
            icon={<MousePointer2 size={16} className="text-blue-500" />}
            title="Complete window lifecycle"
            desc="Open, close, minimize, maximize, resize and drag."
          />
          <FeatureItem
            icon={<Maximize2 size={16} className="text-green-500" />}
            title="Built-in snapping"
            desc="Edge and corner snapping (half/quarter screen)."
          />
          <FeatureItem
            icon={<MonitorSmartphone size={16} className="text-purple-500" />}
            title="Responsive design"
            desc="Adapts interactions for mobile and desktop."
          />
          <FeatureItem
            icon={<Layout size={16} className="text-pink-500" />}
            title="Out-of-the-box Toolbar"
            desc="Customizable taskbar with folders support."
            wide
          />
        </div>
      </section>
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-b border-gray-200 dark:border-gray-800 pb-2">
          <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-lg">
            <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Installation</h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          Install via your preferred package manager (requires <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm text-pink-500">react</code> and <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm text-pink-500">react-dom</code> &gt;= 18.0.0):
        </p>
        <div className="grid gap-3">
          <CodeBlock command="npm install @maomaolabs/core" />
          <CodeBlock command="yarn add @maomaolabs/core" />
          <CodeBlock command="pnpm add @maomaolabs/core" />
        </div>
      </section>
    </div>
  );
};
function FeatureItem({ icon, title, desc, wide }: { icon: React.ReactNode, title: string, desc: string, wide?: boolean }) {
  return (
    <div className={`bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${wide ? 'w-full' : 'flex-[1_1_180px]'}`}>
      <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-1.5">
        <span className="shrink-0">{icon}</span>
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
function CodeBlock({ command }: { command: string }) {
  return (
    <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 font-mono text-sm text-gray-300 flex items-center group relative overflow-hidden min-w-0">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="text-[#3fb950] mr-4 select-none shrink-0">$</span>
      <span className="truncate">{command}</span>
    </div>
  );
}
