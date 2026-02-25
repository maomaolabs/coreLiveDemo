import React from "react";
import { useWindows, useWindowActions } from "@maomaolabs/core";
import { XCircle, Activity, LayoutList, Code } from "lucide-react";

export const SystemMonitor = () => {
  const windows = useWindows();
  const { closeWindow, focusWindow } = useWindowActions();

  const safeWindows = windows.map(win => ({
    id: win.id,
    title: win.title,
    layer: win.layer,
    size: win.size,
    position: win.position,
    zIndex: win.zIndex,
    isMaximized: win.isMaximized,
  })).sort((a, b) => b.zIndex - a.zIndex);

  return (
    <div className="w-full h-full flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
      {/* Header */}
      <div className="flex-none px-4 py-3 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between shrink-0">
        <div>
          <h2 className="text-base font-semibold flex items-center gap-2">
            <Activity size={16} className="text-blue-500" />
            Task Manager
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 max-h-0 sm:max-h-12 overflow-hidden opacity-0 sm:opacity-100 transition-all">
            Monitor and control running processes.
          </p>
        </div>
        <div className="text-xs font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">
          Processes: {windows.length}
        </div>
      </div>

      <div className="flex-1 flex flex-col min-h-0 p-3 gap-3 overflow-hidden">
        {/* Process Table (Top) */}
        <div className="flex-[3] min-h-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm flex flex-col overflow-hidden">
          <div className="flex-none px-3 py-2 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700 flex items-center gap-2 font-medium text-xs">
            <LayoutList size={14} className="text-gray-400" />
            Active Processes
          </div>
          <div className="flex-1 overflow-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
            <table className="w-full text-xs text-left min-w-[320px]">
              <thead className="uppercase bg-gray-50 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400 sticky top-0 z-10 shadow-sm shadow-gray-200/50 dark:shadow-black/20">
                <tr>
                  <th className="px-3 py-2 font-semibold">Name</th>
                  <th className="px-3 py-2 font-semibold w-16">PID</th>
                  <th className="px-3 py-2 font-semibold">Status</th>
                  <th className="px-3 py-2 font-semibold text-right">Z-Index</th>
                  <th className="px-3 py-2 font-semibold text-right w-12">Act</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {windows.map((win) => (
                  <tr
                    key={win.id}
                    className="hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors group cursor-pointer"
                    onClick={() => focusWindow(win.id)}
                  >
                    <td className="px-3 py-2 font-medium text-gray-900 dark:text-gray-100 truncate max-w-[100px]">
                      {win.title}
                    </td>
                    <td className="px-3 py-2 font-mono text-[10px] text-gray-500">
                      {win.id.split('-')[0]}
                    </td>
                    <td className="px-3 py-2">
                      <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium ${win.isMinimized ? 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400' : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'}`}>
                        {win.isMinimized ? 'Bg' : 'Run'}
                      </span>
                    </td>
                    <td className="px-3 py-2 text-right font-mono text-[10px] text-gray-500">
                      {win.zIndex}
                    </td>
                    <td className="px-3 py-2 text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          closeWindow(win.id);
                        }}
                        className="p-1 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                        title="End Process"
                      >
                        <XCircle size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
                {windows.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-3 py-6 text-center text-gray-500 dark:text-gray-400 italic text-xs">
                      No running applications.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Raw State View (Bottom) */}
        <div className="flex-[2] min-h-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm flex flex-col overflow-hidden">
          <div className="flex-none px-3 py-2 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700 flex items-center gap-2 font-medium text-xs">
            <Code size={14} className="text-gray-400" />
            Inspector
          </div>
          <div className="flex-1 overflow-auto p-3 bg-gray-50/50 dark:bg-[#0d1117] text-[10px] font-mono text-gray-800 dark:text-gray-300 whitespace-pre scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
            {safeWindows.length === 0 ? "No Active Window Nodes Detected." : JSON.stringify(safeWindows, null, 2)}
          </div>
        </div>
      </div>
    </div>
  );
};
