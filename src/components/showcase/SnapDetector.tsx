"use client";

import { useWindowSnap } from "@maomaolabs/core";
import { Radar } from "lucide-react";

export function SnapDetector() {
  const { snapPreview } = useWindowSnap();

  // State-driven classes (snap detection uses vivid colors — kept consistent across modes)
  let bgColor = "bg-white dark:bg-neutral-950";
  let borderColor = "border-neutral-200 dark:border-neutral-800";
  let textColor = "text-neutral-400 dark:text-neutral-500";
  let message = "Drag me against the screen edges...";
  let glow = "";

  if (snapPreview) {
    if (snapPreview.side === "left") {
      bgColor = "bg-emerald-50 dark:bg-emerald-950/40";
      borderColor = "border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.3)]";
      textColor = "text-emerald-600 dark:text-emerald-300";
      message = "LEFT SNAP DETECTED!";
      glow = "drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]";
    } else if (snapPreview.side === "right") {
      bgColor = "bg-fuchsia-50 dark:bg-fuchsia-950/40";
      borderColor = "border-fuchsia-500 shadow-[0_0_30px_rgba(217,70,239,0.3)]";
      textColor = "text-fuchsia-600 dark:text-fuchsia-300";
      message = "RIGHT SNAP DETECTED!";
      glow = "drop-shadow-[0_0_15px_rgba(217,70,239,0.5)]";
    }
  }

  return (
    <div className={`w-full h-full flex flex-col transition-all duration-300 ${bgColor}`}>
      <div className="p-4 border-b border-neutral-200 dark:border-neutral-800/50 flex items-center justify-between">
        <h2 className="font-bold flex items-center gap-2 text-neutral-700 dark:text-neutral-200">
          <Radar size={18} className={snapPreview ? `animate-spin ${textColor}` : "text-neutral-400 dark:text-neutral-500"} />
          Snap Engine
        </h2>
      </div>

      <div className={`flex-1 flex flex-col items-center justify-center p-8 border-4 border-dashed transition-all duration-300 m-4 rounded-3xl ${borderColor}`}>
        <div className={`text-6xl mb-6 transition-transform duration-300 ${snapPreview ? "scale-150 " + glow : "opacity-30"}`}>
          {snapPreview?.side === "left" && "◧"}
          {snapPreview?.side === "right" && "◨"}
          {!snapPreview && "⬚"}
        </div>
        <h3 className={`text-2xl font-black tracking-widest text-center transition-colors duration-300 ${textColor}`}>
          {message}
        </h3>

        {snapPreview && (
          <p className="mt-4 text-sm font-mono text-neutral-600 dark:text-neutral-300 animate-pulse bg-neutral-100 dark:bg-neutral-950 px-3 py-1 rounded">
            Release mouse to execute!
          </p>
        )}
      </div>
    </div>
  );
}
