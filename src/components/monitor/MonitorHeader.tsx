import React from "react";
import { Activity, Wifi, Zap } from "lucide-react";
import { ResourceGraph } from "./ResourceGraph";
import { SystemMetrics } from "./useSystemMetrics";
interface MonitorHeaderProps {
  metrics: SystemMetrics;
}
export const MonitorHeader = ({ metrics }: MonitorHeaderProps) => {
  const { fps, memory, network } = metrics;
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded">
        <div className="flex items-center gap-2 mb-2 text-blue-700 dark:text-blue-300 font-bold text-xs uppercase tracking-wider">
          <Activity size={14} /> UI FPS
        </div>
        <div className="h-16">
          <ResourceGraph
            color="#3b82f6"
            currentValue={fps / 60}
          />
        </div>
        <div className="flex justify-between mt-2 text-xs font-mono text-gray-500 dark:text-gray-400">
          <span>{fps} FPS</span>
          <span>Target: 60</span>
        </div>
      </div>
      <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 rounded">
        <div className="flex items-center gap-2 mb-2 text-indigo-700 dark:text-indigo-300 font-bold text-xs uppercase tracking-wider">
          {memory ? (
            <><Zap size={14} /> JS Memory</>
          ) : (
            <><Wifi size={14} /> Network Latency</>
          )}
        </div>
        <div className="h-16">
          <ResourceGraph
            color="#6366f1"
            currentValue={memory ? (memory.used / memory.total) : (network ? Math.min(1, network.rtt / 500) : 0)}
          />
        </div>
        <div className="flex justify-between mt-2 text-xs font-mono text-gray-500 dark:text-gray-400">
          {memory ? (
            <>
              <span>{memory.used} MB</span>
              <span>Limit: {memory.total} MB</span>
            </>
          ) : network ? (
            <>
              <span>{network.rtt}ms</span>
              <span>{network.type.toUpperCase()}</span>
            </>
          ) : (
            <span>Metrics Unavailable</span>
          )}
        </div>
      </div>
    </div>
  );
};
