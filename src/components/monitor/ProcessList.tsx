import React from "react";
import { useWindowActions } from "@maomaolabs/core";
import { XCircle } from "lucide-react";

interface ProcessListProps {
  windows: any[]; // Using any to avoid strict type dependency hell for now, or update if we have the type exported
}

export const ProcessList = ({ windows }: ProcessListProps) => {
  const { closeWindow, focusWindow } = useWindowActions();

  return (
    <div className="flex-1 overflow-auto">
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-gray-500 dark:text-gray-400 uppercase bg-gray-100 dark:bg-gray-800 sticky top-0 shadow-sm">
          <tr>
            <th className="px-4 py-2 w-24">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2 text-right">Z-Index</th>
            <th className="px-4 py-2 text-right">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {windows.map((win) => (
            <tr
              key={win.id}
              className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group cursor-pointer"
              onClick={() => focusWindow(win.id)}
            >
              <td className="px-4 py-3 font-mono text-xs text-gray-400">
                {win.id.split('-')[0]}
              </td>
              <td className="px-4 py-3 font-medium">
                {win.title}
              </td>
              <td className="px-4 py-3">
                <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${win.isMinimized ? 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300' : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'}`}>
                  {win.isMinimized ? 'Background' : 'Active'}
                </span>
              </td>
              <td className="px-4 py-3 text-right font-mono text-xs text-gray-500">
                {win.zIndex}
              </td>
              <td className="px-4 py-3 text-right">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    closeWindow(win.id);
                  }}
                  className="p-1 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                  title="Kill Process"
                >
                  <XCircle size={16} />
                </button>
              </td>
            </tr>
          ))}
          {windows.length === 0 && (
            <tr>
              <td colSpan={5} className="px-4 py-8 text-center text-gray-500 dark:text-gray-400 italic">
                No user apps running.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
