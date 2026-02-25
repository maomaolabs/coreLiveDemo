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
        <div className="p-6 h-full flex flex-col items-center justify-center bg-neutral-900 text-neutral-300">
          <p className="text-xl font-bold mb-2 text-white">Configured Window</p>
          <p className="text-sm">Props matched exactly what you configured.</p>
        </div>
      )
    });
  };

  const snippet = `
import { useWindowActions } from '@maomaolabs/core';

// Inside your component
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

  return (
    <div className="w-full h-full overflow-y-auto bg-neutral-950 p-6">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">Window Configurator</h2>
        <p className="text-neutral-400 text-sm">
          Adjust the parameters and hit execute to spawn a child window inside this OS.
        </p>
      </div>

      <div className="flex flex-col gap-8 pb-8 max-w-2xl mx-auto">
        <div className="space-y-6 bg-neutral-900/40 backdrop-blur-xl p-8 rounded-3xl border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2 ml-1">Window Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-neutral-100 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 focus:shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all placeholder:text-neutral-600"
              placeholder="E.g. Settings"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2 ml-1">Layer Priority</label>
            <div className="relative">
              <select
                value={layer}
                onChange={(e) => setLayer(e.target.value as any)}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-neutral-100 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 focus:shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all appearance-none cursor-pointer"
              >
                <option value="base">Base (Bottom)</option>
                <option value="normal">Normal</option>
                <option value="alwaysOnTop">Always on Top</option>
                <option value="modal">Modal (Disables background)</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-neutral-400">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center justify-between bg-black/40 p-4 rounded-xl border border-white/10 shadow-inner">
              <label htmlFor="isMaximized" className="text-sm font-medium text-neutral-300 select-none cursor-pointer">Spawn Maximized?</label>
              <button id="isMaximized" role="switch" aria-checked={isMaximized} onClick={() => setIsMaximized(!isMaximized)} className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isMaximized ? "bg-indigo-500" : "bg-neutral-800"}`}>
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isMaximized ? "translate-x-6 shadow-[0_0_10px_rgba(255,255,255,0.8)]" : "translate-x-1"}`} />
              </button>
            </div>

            <div className="flex items-center justify-between bg-black/40 p-4 rounded-xl border border-white/10 shadow-inner">
              <label htmlFor="canClose" className="text-sm font-medium text-neutral-300 select-none cursor-pointer">Allow Close?</label>
              <button id="canClose" role="switch" aria-checked={canClose} onClick={() => setCanClose(!canClose)} className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${canClose ? "bg-emerald-500" : "bg-neutral-800"}`}>
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${canClose ? "translate-x-6 shadow-[0_0_10px_rgba(255,255,255,0.8)]" : "translate-x-1"}`} />
              </button>
            </div>

            <div className="flex items-center justify-between bg-black/40 p-4 rounded-xl border border-white/10 shadow-inner">
              <label htmlFor="canMinimize" className="text-sm font-medium text-neutral-300 select-none cursor-pointer">Allow Minimize?</label>
              <button id="canMinimize" role="switch" aria-checked={canMinimize} onClick={() => setCanMinimize(!canMinimize)} className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${canMinimize ? "bg-emerald-500" : "bg-neutral-800"}`}>
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${canMinimize ? "translate-x-6 shadow-[0_0_10px_rgba(255,255,255,0.8)]" : "translate-x-1"}`} />
              </button>
            </div>

            <div className="flex items-center justify-between bg-black/40 p-4 rounded-xl border border-white/10 shadow-inner">
              <label htmlFor="canMaximize" className="text-sm font-medium text-neutral-300 select-none cursor-pointer">Allow Maximize?</label>
              <button id="canMaximize" role="switch" aria-checked={canMaximize} onClick={() => setCanMaximize(!canMaximize)} className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${canMaximize ? "bg-emerald-500" : "bg-neutral-800"}`}>
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${canMaximize ? "translate-x-6 shadow-[0_0_10px_rgba(255,255,255,0.8)]" : "translate-x-1"}`} />
              </button>
            </div>
          </div>

          <button
            onClick={handleLaunch}
            className="w-full relative group overflow-hidden bg-white text-black font-bold py-4 rounded-xl transition-all active:scale-95 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] mt-6"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10">Execute openWindow()</span>
          </button>
        </div>

        <div className="h-full">
          <CodeSnippet code={snippet} />
        </div>
      </div>
    </div>
  );
}
