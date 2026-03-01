"use client";

import { useSystemStyle, SystemStyleType } from "@/components/StyleProvider";
import { useWindowActions } from "@maomaolabs/core";
import { ThemeStudio } from "@/components/settings/ThemeStudio";
import {
  Monitor, CircleDot, TerminalSquare, WandSparkles,
  Clock, Wind, CheckCircle2, Braces
} from "lucide-react";

type ThemeCard = {
  id: SystemStyleType;
  name: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
  preview: { close: string; min: string; max: string; bar: string };
};

const THEMES: ThemeCard[] = [
  {
    id: "default",
    name: "MaoMao Default",
    description: "Clean, neutral, and minimalist—the baseline experience.",
    icon: <Monitor size={20} />,
    accent: "from-violet-500 to-indigo-500",
    preview: { close: "#94a3b8", min: "#94a3b8", max: "#94a3b8", bar: "#1e293b" },
  },
  {
    id: "traffic",
    name: "Traffic Lights",
    description: "Vivid dot controls on a polished window chrome.",
    icon: <CircleDot size={20} />,
    accent: "from-red-500 to-amber-400",
    preview: { close: "#ef4444", min: "#f59e0b", max: "#22c55e", bar: "#1c1c1e" },
  },
  {
    id: "linux",
    name: "Linux Terminal",
    description: "Utilitarian precision inspired by classic desktop environments.",
    icon: <TerminalSquare size={20} />,
    accent: "from-teal-500 to-emerald-400",
    preview: { close: "#e86350", min: "#d0cfcc", max: "#d0cfcc", bar: "#3c3b37" },
  },
  {
    id: "yk2000",
    name: "YK2000",
    description: "A nostalgic trip through 90s and early 2000s UI design.",
    icon: <Clock size={20} />,
    accent: "from-cyan-400 to-blue-500",
    preview: { close: "#c0c0c0", min: "#c0c0c0", max: "#c0c0c0", bar: "#000080" },
  },
  {
    id: "aero",
    name: "Aero Glass",
    description: "Translucent blur and depth, inspired by glass morphism.",
    icon: <Wind size={20} />,
    accent: "from-sky-400 to-blue-600",
    preview: { close: "#60a5fa", min: "#60a5fa", max: "#60a5fa", bar: "rgba(255,255,255,0.1)" },
  },
];

function ThemePreview({ preview }: { preview: ThemeCard["preview"] }) {
  return (
    <div
      className="w-full h-14 rounded-lg overflow-hidden border border-black/10 dark:border-white/10 shadow-inner mb-4"
      style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)" }}
    >
      <div className="h-5 flex items-center gap-1.5 px-2.5" style={{ background: preview.bar }}>
        {[preview.close, preview.min, preview.max].map((c, i) => (
          <span key={i} className="w-2 h-2 rounded-full" style={{ background: c }} />
        ))}
      </div>
      <div className="h-1.5 bg-slate-800/50" />
      <div className="px-2.5 pt-1 space-y-1">
        <div className="h-1 bg-white/10 rounded-full w-3/4" />
        <div className="h-1 bg-white/5 rounded-full w-1/2" />
      </div>
    </div>
  );
}

export function AppearanceSettings() {
  const { currentStyle, changeStyle } = useSystemStyle();
  const { openWindow } = useWindowActions();

  return (
    <div className="@container flex flex-col h-full bg-slate-50 dark:bg-[#0f1117] overflow-y-auto">
      {/* Header */}
      <div className="px-5 @[480px]:px-8 pt-6 @[480px]:pt-8 pb-5">
        <div className="flex items-center gap-3 mb-1">
          <div className="p-2 rounded-xl bg-violet-100 dark:bg-violet-500/20 border border-violet-200 dark:border-violet-500/20">
            <WandSparkles size={18} className="text-violet-600 dark:text-violet-400" />
          </div>
          <h2 className="text-xl @[480px]:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            System Appearance
          </h2>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-xs @[480px]:text-sm mt-1 ml-0.5">
          Choose a system theme. Your preference is saved automatically.
        </p>
      </div>

      {/* Theme Grid */}
      <div className="px-5 @[480px]:px-8 grid grid-cols-1 @[380px]:grid-cols-2 @[620px]:grid-cols-3 gap-3 @[480px]:gap-4">
        {THEMES.map((theme) => {
          const isActive = currentStyle === theme.id;
          return (
            <button
              key={theme.id}
              onClick={() => changeStyle(theme.id)}
              aria-pressed={isActive}
              className={`
                relative group text-left flex flex-col p-4 rounded-2xl border transition-all duration-200
                ${isActive
                  ? "border-violet-500 bg-violet-50 dark:bg-violet-500/10 shadow-lg shadow-violet-200 dark:shadow-violet-500/10"
                  : "border-slate-200 dark:border-white/[0.07] bg-white dark:bg-white/[0.03] hover:border-violet-300 dark:hover:border-white/20 hover:shadow-md"}
              `}
            >
              {/* Active badge */}
              {isActive && (
                <div className="absolute top-3 right-3 flex items-center gap-1 text-[10px] font-semibold text-violet-700 dark:text-violet-300 bg-violet-100 dark:bg-violet-500/20 px-2 py-0.5 rounded-full border border-violet-300 dark:border-violet-500/30">
                  <CheckCircle2 size={9} />
                  Active
                </div>
              )}

              {/* Mini window preview */}
              <ThemePreview preview={theme.preview} />

              {/* Icon + Name */}
              <div className="flex items-center gap-2 mb-1.5">
                <div className={`p-1.5 rounded-lg bg-gradient-to-br ${theme.accent} opacity-90`}>
                  <span className="text-white">{theme.icon}</span>
                </div>
                <h3 className="text-sm font-semibold text-slate-800 dark:text-white">{theme.name}</h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{theme.description}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
