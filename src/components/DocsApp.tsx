import React, { useState } from 'react';
import {
  BookOpen,
  Code,
  Settings,
  Package
} from 'lucide-react';
import { Installation } from './docs/Installation';
import { API } from './docs/API';
import { BasicUsage } from './docs/BasicUsage';
import { Contribution } from './docs/Contribution';

const DOC_SECTIONS = [
  { id: 'installation', label: 'Installation', icon: <Package size={16} /> },
  { id: 'usage', label: 'Usage Guide', icon: <Code size={16} /> },
  { id: 'api', label: 'API Reference', icon: <BookOpen size={16} /> },
  { id: 'contribution', label: 'Config & Contribution', icon: <Settings size={16} /> },
] as const;

export const DocsApp = () => {
  const [activeSection, setActiveSection] = useState<typeof DOC_SECTIONS[number]['id']>('installation');

  return (
    // Root: CSS Grid layout — sidebar column + content column.
    // overflow-hidden ONLY on the root to clip background orbs.
    <div
      className="relative w-full h-full bg-[#fafafa] dark:bg-[#000000] font-sans text-slate-900 dark:text-white antialiased"
      style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gridTemplateRows: '1fr' }}
    >

      {/* Ambient Mesh Orbs Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-400/50 dark:bg-blue-500/40 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-90"></div>
        <div className="absolute top-[30%] left-[20%] w-[700px] h-[700px] bg-sky-300/50 dark:bg-sky-400/30 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-80"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-400/50 dark:bg-purple-500/40 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-80"></div>
      </div>

      {/* Sidebar */}
      <div className="relative z-10 flex flex-col bg-white/40 dark:bg-white/5 backdrop-blur-3xl backdrop-saturate-150 border-r border-black/5 dark:border-white/10 overflow-y-auto overflow-x-hidden">
        <div className="p-5 border-b border-black/5 dark:border-white/10 shrink-0">
          <h2 className="font-bold text-xl tracking-tight flex items-center gap-2.5 text-slate-900 dark:text-white">
            <BookOpen className="text-blue-500 shrink-0" size={20} strokeWidth={2.5} />
            Mao Docs
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 font-medium">
            @maomaolabs/core <span className="font-mono text-slate-400 dark:text-slate-500">v1.0.1</span>
          </p>
        </div>

        <nav className="flex flex-col p-3 gap-1 flex-1">
          {DOC_SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm rounded-xl text-left transition-all duration-200 ease-out outline-none
                ${activeSection === section.id
                  ? 'bg-white/80 dark:bg-white/10 text-slate-900 dark:text-white shadow-sm ring-1 ring-black/5 dark:ring-white/10 font-bold'
                  : 'text-slate-600 dark:text-slate-400 font-medium hover:bg-black/5 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
            >
              <span className={`shrink-0 ${activeSection === section.id ? 'text-blue-500' : 'text-slate-400 dark:text-slate-500'}`}>
                {section.icon}
              </span>
              <span className="truncate">{section.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Content Area */}
      <div className="relative z-10 overflow-y-auto overflow-x-hidden" style={{ minWidth: 0 }}>
        <div className="p-6 min-h-full flex flex-col">
          <div className="flex-1 bg-white/40 dark:bg-white/5 backdrop-blur-3xl backdrop-saturate-150 border border-black/5 dark:border-white/10 p-6 rounded-2xl shadow-xl shadow-black/5 dark:shadow-black/20 ring-1 ring-black/5 dark:ring-white/5 flex flex-col" style={{ minWidth: 0 }}>
            <div className="flex-1 min-w-0 w-full overflow-x-hidden">
              {activeSection === 'installation' && <Installation />}
              {activeSection === 'usage' && <BasicUsage />}
              {activeSection === 'api' && <API />}
              {activeSection === 'contribution' && <Contribution />}
            </div>

            <div className="mt-12 pt-6 border-t border-black/5 dark:border-white/10 flex flex-wrap gap-3 justify-between items-center text-xs text-slate-400 dark:text-slate-500 font-medium">
              <span>Last updated: Feb 2026</span>
              <span>Made with 💜 by MaoMao Labs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
