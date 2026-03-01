import React, { useState } from 'react';
import { BookOpen, Code, Settings, Package, Palette } from 'lucide-react';
import { Installation } from './docs/Installation';
import { API } from './docs/API';
import { BasicUsage } from './docs/BasicUsage';
import { Contribution } from './docs/Contribution';
import { Theming } from './docs/Theming';

const DOC_SECTIONS = [
  { id: 'installation', label: 'Install', icon: <Package size={15} /> },
  { id: 'usage', label: 'Usage', icon: <Code size={15} /> },
  { id: 'api', label: 'API', icon: <BookOpen size={15} /> },
  { id: 'theming', label: 'Theming', icon: <Palette size={15} /> },
  { id: 'contribution', label: 'Config', icon: <Settings size={15} /> },
] as const;

type SectionId = typeof DOC_SECTIONS[number]['id'];

export const DocsApp = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('installation');

  return (
    <div className="@container relative w-full h-full bg-[#0d0d12] font-sans text-white antialiased overflow-hidden">

      {/* Ambient light */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-30%] left-[-15%] w-[600px] h-[600px] bg-violet-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col @[560px]:flex-row">

        {/* ── Sidebar (wide) ─────────────────────────────── */}
        <aside className="hidden @[560px]:flex flex-col w-[200px] shrink-0 border-r border-white/[0.06] bg-white/[0.02] overflow-y-auto">
          {/* Brand */}
          <div className="p-4 pb-3 border-b border-white/[0.06]">
            <div className="flex items-center gap-2 mb-1">
              <div className="p-1.5 rounded-lg bg-gradient-to-br from-violet-500/30 to-blue-500/30 border border-white/10">
                <BookOpen size={13} className="text-violet-300" />
              </div>
              <span className="font-bold text-sm text-white tracking-tight">Mao Docs</span>
            </div>
            <p className="text-[10px] text-slate-600 font-mono ml-0.5">@maomaolabs/core v1.1.0</p>
          </div>

          {/* Nav */}
          <nav className="flex flex-col p-2 gap-0.5 flex-1">
            {DOC_SECTIONS.map((s) => {
              const active = activeSection === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveSection(s.id)}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm rounded-xl text-left transition-all duration-150 outline-none
                    ${active
                      ? 'bg-violet-500/15 text-white border border-violet-500/20 font-semibold'
                      : 'text-slate-500 font-medium hover:bg-white/[0.04] hover:text-slate-200 border border-transparent'
                    }`}
                >
                  <span className={`shrink-0 transition-colors ${active ? 'text-violet-400' : 'text-slate-600'}`}>
                    {s.icon}
                  </span>
                  <span className="truncate">{s.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="p-3 border-t border-white/[0.05]">
            <p className="text-[10px] text-slate-700 text-center">Made with 💜 by MaoMao Labs</p>
          </div>
        </aside>

        {/* ── Content area ───────────────────────────────── */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

          {/* Mobile tab bar */}
          <nav className="@[560px]:hidden flex shrink-0 border-b border-white/[0.06] bg-white/[0.03] relative overflow-x-auto">
            {DOC_SECTIONS.map((s) => {
              const active = activeSection === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveSection(s.id)}
                  className={`relative flex-1 flex flex-col items-center justify-center gap-0.5 px-2 py-2.5 text-[10px] font-semibold tracking-wide transition-all duration-200 outline-none
                    ${active ? 'text-violet-400' : 'text-slate-600 hover:text-slate-400'}`}
                >
                  <span className={`transition-transform duration-200 ${active ? 'scale-110' : ''}`}>{s.icon}</span>
                  {s.label}
                  {active && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-violet-500 rounded-full" />}
                </button>
              );
            })}
          </nav>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden min-w-0">
            <div className="p-4 @[560px]:p-6">
              {/* Content card */}
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 @[560px]:p-7 shadow-2xl min-w-0">
                {activeSection === 'installation' && <Installation />}
                {activeSection === 'usage' && <BasicUsage />}
                {activeSection === 'api' && <API />}
                {activeSection === 'theming' && <Theming />}
                {activeSection === 'contribution' && <Contribution />}

                <div className="mt-10 pt-4 border-t border-white/[0.05] flex flex-wrap gap-2 justify-between items-center text-[10px] text-slate-700 font-medium">
                  <span>Last updated: March 2026</span>
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
