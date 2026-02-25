import React from "react";
import { Battery, Zap, AlertCircle } from "lucide-react";
import { SystemMetrics } from "./useSystemMetrics";

interface MonitorStatusBarProps {
  metrics: SystemMetrics;
}

export const MonitorStatusBar = ({ metrics }: MonitorStatusBarProps) => {
  const { battery, fps } = metrics;

  return (
    <div className="grid grid-cols-2 px-4 py-2 gap-4 text-xs font-mono border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-2">
        {battery ? (
          <>
            {battery.charging ? <Zap size={12} className="text-yellow-500" /> : <Battery size={12} />}
            Battery: {Math.round(battery.level)}%
          </>
        ) : (
          <>
            <AlertCircle size={12} className="text-gray-400" /> Power: AC / Unknown
          </>
        )}
      </div>
      <div className="flex items-center gap-2 justify-end">
        <div className={`w-2 h-2 rounded-full ${fps < 30 ? 'bg-red-500' : 'bg-green-500'}`} />
        System {fps < 30 ? 'Laggy' : 'Stable'}
      </div>
    </div>
  );
};
