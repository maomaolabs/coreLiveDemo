import React, { useState } from 'react';
import {
  BookOpen,
  Code,
  Settings,
  Package,
} from 'lucide-react';
import { Installation } from './docs/Installation';
import { API } from './docs/API';
import { BasicUsage } from './docs/BasicUsage';
import { Contribution } from './docs/Contribution';

const DOC_SECTIONS = [
  { id: 'installation', label: 'Install', icon: <Package size={16} /> },
  { id: 'usage', label: 'Usage', icon: <Code size={16} /> },
  { id: 'api', label: 'API', icon: <BookOpen size={16} /> },
  { id: 'contribution', label: 'Config', icon: <Settings size={16} /> },
] as const;

type SectionId = typeof DOC_SECTIONS[number]['id'];

export const DocsApp = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('installation');

  return (
    <div className="@container relative w-full h-full bg-[#fafafa] dark:bg-[#000000] font-sans text-slate-900 dark:text-white antialiased overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-400/50 dark:bg-blue-500/40 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-90" />
        <div className="absolute top-[30%] left-[20%] w-[700px] h-[700px] bg-sky-300/50 dark:bg-sky-400/30 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-80" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-400/50 dark:bg-purple-500/40 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-80" />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col @[560px]:flex-row">
        <aside className="hidden @[560px]:flex flex-col w-[200px] shrink-0 bg-white/40 dark:bg-white/5 backdrop-blur-3xl backdrop-saturate-150 border-r border-black/5 dark:border-white/10 overflow-y-auto overflow-x-hidden">
          <div className="p-4 border-b border-black/5 dark:border-white/10 shrink-0">
            <h2 className="font-bold text-base tracking-tight flex items-center gap-2 text-slate-900 dark:text-white">
              <BookOpen className="text-blue-500 shrink-0" size={16} strokeWidth={2.5} />
              Mao Docs
            </h2>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-medium leading-tight">
              @maomaolabs/core{' '}
              <span className="font-mono text-slate-400 dark:text-slate-500">v1.0.2</span>
            </p>
          </div>
          <nav className="flex flex-col p-2 gap-0.5 flex-1">
            {DOC_SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveSection(s.id)}
                className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm rounded-xl text-left transition-all duration-200 ease-out outline-none
                  ${activeSection === s.id
                    ? 'bg-white/80 dark:bg-white/10 text-slate-900 dark:text-white shadow-sm ring-1 ring-black/5 dark:ring-white/10 font-bold'
                    : 'text-slate-600 dark:text-slate-400 font-medium hover:bg-black/5 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
              >
                <span className={`shrink-0 ${activeSection === s.id ? 'text-blue-500' : 'text-slate-400 dark:text-slate-500'}`}>
                  {s.icon}
                </span>
                <span className="truncate">{s.label}</span>
              </button>
            ))}
          </nav>
        </aside>
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          <nav className="@[560px]:hidden flex shrink-0 border-b border-black/5 dark:border-white/10 bg-white/60 dark:bg-black/50 backdrop-blur-2xl relative">
            {DOC_SECTIONS.map((s) => {
              const active = activeSection === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveSection(s.id)}
                  className={`relative flex-1 flex flex-col items-center justify-center gap-0.5 py-2.5 text-[10px] font-semibold tracking-wide transition-all duration-200 outline-none
                    ${active
                      ? 'text-blue-500'
                      : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'
                    }`}
                >
                  <span className={`transition-transform duration-200 ${active ? 'scale-110' : ''}`}>
                    {s.icon}
                  </span>
                  {s.label}
                  {active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-blue-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="flex-1 overflow-y-auto overflow-x-hidden min-w-0">
            <div className="p-3 @[560px]:p-5">
              <div className="@[560px]:bg-white/40 @[560px]:dark:bg-white/5 @[560px]:backdrop-blur-3xl @[560px]:border @[560px]:border-black/5 @[560px]:dark:border-white/10 @[560px]:p-5 @[560px]:rounded-2xl @[560px]:shadow-xl @[560px]:ring-1 @[560px]:ring-black/5 @[560px]:dark:ring-white/5 min-w-0 overflow-x-auto">
                {activeSection === 'installation' && <Installation />}
                {activeSection === 'usage' && <BasicUsage />}
                {activeSection === 'api' && <API />}
                {activeSection === 'contribution' && <Contribution />}

                <div className="mt-8 pt-4 border-t border-black/5 dark:border-white/10 flex flex-wrap gap-2 justify-between items-center text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                  <span>Last updated: Feb 2026</span>
                  <span>Made with 💜 by MaoMao Labs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
