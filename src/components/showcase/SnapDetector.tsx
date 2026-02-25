"use client";

import { useWindowSnap } from "@maomaolabs/core";
import { Radar } from "lucide-react";

export function SnapDetector() {
  const { snapPreview } = useWindowSnap();

  let bgColor = "bg-neutral-950";
  let borderColor = "border-neutral-800";
  let textColor = "text-neutral-400";
  let message = "Drag me against the screen edges...";
  let glow = "";

  if (snapPreview) {
    if (snapPreview.side === "left") {
      bgColor = "bg-emerald-950/40";
      borderColor = "border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.3)]";
      textColor = "text-emerald-300";
      message = "LEFT SNAP DETECTED!";
      glow = "drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]";
    } else if (snapPreview.side === "right") {
      bgColor = "bg-fuchsia-950/40";
      borderColor = "border-fuchsia-500 shadow-[0_0_30px_rgba(217,70,239,0.3)]";
      textColor = "text-fuchsia-300";
      message = "RIGHT SNAP DETECTED!";
      glow = "drop-shadow-[0_0_15px_rgba(217,70,239,0.5)]";
    }
  }

  return (
    <div className={`w-full h-full flex flex-col transition-all duration-300 ${bgColor}`}>
      <div className="p-4 border-b border-neutral-800/50 flex items-center justify-between">
        <h2 className="font-bold flex items-center gap-2 text-neutral-200">
          <Radar size={18} className={snapPreview ? `animate-spin ${textColor}` : "text-neutral-500"} />
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
          <p className="mt-4 text-sm font-mono text-neutral-300 animate-pulse bg-neutral-950 px-3 py-1 rounded">
            Release mouse to execute!
          </p>
        )}
      </div>
    </div>
  );
}
