"use client";
import { useState } from "react";
import { useWindowActions } from "@maomaolabs/core";
import { CodeSnippet } from "./CodeSnippet";

export function WindowPlayground() {
  const { openWindow } = useWindowActions();
  const [title, setTitle] = useState("My App");
  const [isMaximized, setIsMaximized] = useState(false);
  const [layer, setLayer] = useState<"base" | "normal" | "alwaysOnTop" | "modal">("normal");
  const [canClose, setCanClose] = useState(true);
  const [canMinimize, setCanMinimize] = useState(true);
  const [canMaximize, setCanMaximize] = useState(true);

  const handleLaunch = () => {
    openWindow({
      id: `playground-${Date.now()}`,
      title,
      isMaximized,
      canClose,
      canMinimize,
      canMaximize,
      layer,
      component: (
        <div className="p-6 h-full flex flex-col items-center justify-center bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300">
          <p className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">Configured Window</p>
          <p className="text-sm">Props matched exactly what you configured.</p>
        </div>
      )
    });
  };

  const snippet = `
import { useWindowActions } from '@maomaolabs/core';
const { openWindow } = useWindowActions();
const handleLaunch = () => {
  openWindow({
    id: 'unique-id',
    title: '${title}',
    layer: '${layer}',
    isMaximized: ${isMaximized},
    canClose: ${canClose},
    canMinimize: ${canMinimize},
    canMaximize: ${canMaximize},
    component: <MyComponent />
  });
};
`;

  // Reusable toggle row
  const ToggleRow = ({
    id, label, value, onChange, activeColor = "bg-emerald-500"
  }: { id: string; label: string; value: boolean; onChange: () => void; activeColor?: string }) => (
    <div className="flex items-center justify-between bg-slate-100 dark:bg-black/40 p-4 rounded-xl border border-slate-200 dark:border-white/10 shadow-inner">
      <label htmlFor={id} className="text-sm font-medium text-slate-600 dark:text-neutral-300 select-none cursor-pointer">{label}</label>
      <button
        id={id} role="switch" aria-checked={value} onClick={onChange}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${value ? activeColor : "bg-slate-300 dark:bg-neutral-800"}`}
      >
        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${value ? "translate-x-6 shadow-[0_0_10px_rgba(255,255,255,0.8)]" : "translate-x-1"}`} />
      </button>
    </div>
  );

  return (
    <div className="w-full h-full overflow-y-auto bg-white dark:bg-neutral-950 p-6">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight text-slate-900 dark:text-white">Window Configurator</h2>
        <p className="text-slate-500 dark:text-neutral-400 text-sm">
          Adjust the parameters and hit execute to spawn a child window inside this OS.
        </p>
      </div>

      <div className="flex flex-col gap-8 pb-8 max-w-2xl mx-auto">
        <div className="space-y-6 bg-slate-50 dark:bg-neutral-900/40 backdrop-blur-xl p-8 rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)]">

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-slate-500 dark:text-neutral-400 mb-2 ml-1">Window Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-neutral-100 focus:outline-none focus:border-indigo-400 dark:focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-400/50 dark:focus:ring-indigo-500/50 transition-all placeholder:text-slate-300 dark:placeholder:text-neutral-600"
              placeholder="E.g. Settings"
            />
          </div>

          {/* Layer select */}
          <div>
            <label className="block text-sm font-medium text-slate-500 dark:text-neutral-400 mb-2 ml-1">Layer Priority</label>
            <div className="relative">
              <select
                value={layer}
                onChange={(e) => setLayer(e.target.value as any)}
                className="w-full bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-slate-800 dark:text-neutral-100 focus:outline-none focus:border-indigo-400 dark:focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-400/50 transition-all appearance-none cursor-pointer"
              >
                <option value="base">Base (Bottom)</option>
                <option value="normal">Normal</option>
                <option value="alwaysOnTop">Always on Top</option>
                <option value="modal">Modal (Disables background)</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-slate-400 dark:text-neutral-400">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Toggles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ToggleRow id="isMaximized" label="Spawn Maximized?" value={isMaximized} onChange={() => setIsMaximized(!isMaximized)} activeColor="bg-indigo-500" />
            <ToggleRow id="canClose" label="Allow Close?" value={canClose} onChange={() => setCanClose(!canClose)} />
            <ToggleRow id="canMinimize" label="Allow Minimize?" value={canMinimize} onChange={() => setCanMinimize(!canMinimize)} />
            <ToggleRow id="canMaximize" label="Allow Maximize?" value={canMaximize} onChange={() => setCanMaximize(!canMaximize)} />
          </div>

          {/* Launch button */}
          <button
            onClick={handleLaunch}
            className="w-full relative group overflow-hidden bg-neutral-900 dark:bg-white text-white dark:text-black font-bold py-4 rounded-xl transition-all active:scale-95 hover:shadow-lg mt-6"
          >
            <div className="absolute inset-0 bg-white/10 dark:bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10">Execute openWindow()</span>
          </button>
        </div>

        {/* Code snippet — always dark, it's a code editor */}
        <div className="h-full">
          <CodeSnippet code={snippet} />
        </div>
      </div>
    </div>
  );
}
