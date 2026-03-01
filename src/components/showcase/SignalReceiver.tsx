"use client";
import { useMemo } from "react";
import { useDemoSignal } from "@/hooks/useDemoSignal";
import { RadioReceiver } from "lucide-react";

export function SignalReceiver() {
  const { signal } = useDemoSignal();
  const activeBars = useMemo(() => {
    return Math.min(10, Math.ceil(signal.length / 3));
  }, [signal]);

  return (
    <div className="w-full h-full bg-white dark:bg-neutral-950 p-6 flex flex-col justify-center items-center">
      <div className="mb-6 text-center">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 transition-colors duration-300 ${signal.length > 0
            ? "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
            : "bg-neutral-100 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-500"
          }`}>
          <RadioReceiver size={32} className={signal.length > 0 ? "animate-pulse" : ""} />
        </div>
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">Receiver Array</h2>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm max-w-xs mx-auto">
          Listening to external state without causing unnecessary DOM re-renders in other windows.
        </p>
      </div>

      <div className="w-full max-w-sm">
        <div className="flex justify-between items-end h-16 mb-4 px-2">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className={`w-6 rounded-t-sm transition-all duration-300 ${i < activeBars
                  ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.6)]"
                  : "bg-neutral-200 dark:bg-neutral-800"
                }`}
              style={{ height: i < activeBars ? `${(i + 1) * 10}%` : '10%' }}
            />
          ))}
        </div>

        <div className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700/50 rounded-xl px-5 py-4 min-h-[4rem] flex flex-col justify-center shadow-inner">
          <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-1">Incoming Intercept:</p>
          <p className={`font-mono font-medium text-lg leading-tight truncate ${signal.length > 0 ? "text-emerald-600 dark:text-emerald-400" : "text-neutral-400 dark:text-neutral-600 italic"
            }`}>
            {signal || "Awaiting transmission..."}
          </p>
        </div>
      </div>
    </div>
  );
}
