"use client";
import { useWindowActions, useWindows } from "@maomaolabs/core";
import { Zap, Trash2 } from "lucide-react";
function DummyWindow() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-900 border border-neutral-800 p-4 text-center">
      <div className="text-4xl animate-pulse mb-2">🔥</div>
      <p className="text-neutral-400 text-xs font-mono">Drag me around!</p>
    </div>
  );
}
export function StressTest() {
  const { openWindow, closeWindow } = useWindowActions();
  const windows = useWindows();
  const handleSpawn = (count: number) => {
    const currentCount = windows.filter(w => w.id.startsWith("stress-")).length;
    const MAX_WINDOWS = 100;
    const spawnCount = Math.min(count, MAX_WINDOWS - currentCount);
    if (spawnCount <= 0) return;
    for (let i = 0; i < spawnCount; i++) {
      const id = `stress-${Date.now()}-${i}`;
      openWindow({
        id,
        title: `Stress Node ${currentCount + i + 1}`,
        component: <DummyWindow />,
        initialSize: { width: 250, height: 200 },
        initialPosition: {
          x: Math.max(50, Math.floor(Math.random() * (window.innerWidth - 300))),
          y: Math.max(50, Math.floor(Math.random() * (window.innerHeight - 250)))
        },
        layer: "normal",
      });
    }
  };
  const handleKillAll = () => {
    windows.forEach(win => {
      if (win.id.startsWith("stress-")) {
        closeWindow(win.id);
      }
    });
  };
  const activeStressNodes = windows.filter(w => w.id.startsWith("stress-")).length;
  return (
    <div className="w-full h-full bg-neutral-950 p-6 flex flex-col">
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight mb-2 text-red-500 flex items-center gap-2">
          <Zap size={24} /> Performance Stress Tester
        </h2>
        <p className="text-neutral-400 text-sm">
          Unlike most React window managers, <code className="text-rose-400">@maomaolabs/core</code> uses Context Splitting.
          Dragging one window will <strong>never</strong> cause the others to re-render. Try it out.
        </p>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-6">
        <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
          <button
            onClick={() => handleSpawn(10)}
            className="bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 transition-colors py-4 rounded-xl text-neutral-200 font-bold"
          >
            +10 Windows
          </button>
          <button
            onClick={() => handleSpawn(50)}
            className="bg-red-950/30 hover:bg-red-900/40 border border-red-900/50 transition-colors py-4 rounded-xl text-red-400 font-bold"
          >
            +50 Windows
          </button>
        </div>
        <div className="text-center my-4">
          <p className="text-xs uppercase tracking-widest text-neutral-500 font-bold mb-1">Active Stress Nodes</p>
          <p className="text-6xl font-black text-white">{activeStressNodes}</p>
        </div>
        {activeStressNodes > 0 && (
          <button
            onClick={handleKillAll}
            className="flex items-center justify-center gap-2 bg-neutral-100 hover:bg-white text-neutral-950 w-full max-w-sm py-4 rounded-xl font-bold transition-transform hover:scale-105"
          >
            <Trash2 size={18} /> Kill Demonic Windows
          </button>
        )}
      </div>
    </div>
  );
}
