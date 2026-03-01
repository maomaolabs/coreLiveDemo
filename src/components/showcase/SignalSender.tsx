"use client";

import { MessageSquareShare } from "lucide-react";
import { useDemoSignal } from "@/hooks/useDemoSignal";

export function SignalSender() {
  const { signal, emit } = useDemoSignal();

  return (
    <div className="w-full h-full bg-white dark:bg-neutral-950 p-6 flex flex-col justify-center items-center">
      <div className="mb-6 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-500 dark:text-blue-400 mb-4">
          <MessageSquareShare size={32} />
        </div>
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">Transmitter Node</h2>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm max-w-xs mx-auto">
          Type a message here. This window operates in a separate context layer but talks to the global state.
        </p>
      </div>

      <div className="w-full max-w-sm space-y-4">
        <div>
          <label className="block text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-2 ml-1">
            Live Payload
          </label>
          <input
            type="text"
            value={signal}
            onChange={(e) => emit(e.target.value)}
            className="w-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700/50 rounded-xl px-5 py-4 text-neutral-900 dark:text-white text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all shadow-inner placeholder:text-neutral-400 dark:placeholder:text-neutral-700"
            placeholder="Broadcast a signal..."
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}
