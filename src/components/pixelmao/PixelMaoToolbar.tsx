import React from 'react';
import { Eraser, PaintBucket, Trash2, Download, Undo, Redo, Grid, ZoomIn, ZoomOut, Pipette, FlipHorizontal, FlipVertical, Square, Circle, Minus } from 'lucide-react';
interface PixelMaoToolbarProps {
  tool: 'pencil' | 'eraser' | 'fill' | 'eyedropper' | 'line' | 'rect' | 'circle';
  setTool: (tool: 'pencil' | 'eraser' | 'fill' | 'eyedropper' | 'line' | 'rect' | 'circle') => void;
  onClear: () => void;
  onDownload: () => void;
  onUndo: () => void;
  onRedo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  gridSize: number;
  setGridSize: (size: number) => void;
  symmetry: 'none' | 'horizontal' | 'vertical' | 'both';
  setSymmetry: (sym: 'none' | 'horizontal' | 'vertical' | 'both') => void;
}
export const PixelMaoToolbar = ({
  tool,
  setTool,
  onClear,
  onDownload,
  onUndo,
  onRedo,
  canUndo,
  canRedo,
  gridSize,
  setGridSize,
  symmetry,
  setSymmetry
}: PixelMaoToolbarProps) => {
  return (
    <div className="flex flex-wrap gap-2 items-center justify-between p-2 bg-white dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
      <div className="flex gap-2 items-center overflow-x-auto">
        <div className="flex gap-1 border-r border-gray-300 dark:border-gray-600 pr-2">
          <button
            onClick={() => setTool('pencil')}
            className={`p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 ${tool === 'pencil' ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300' : 'text-gray-600 dark:text-gray-400'}`}
            title="Pencil (P)"
          >
            <div className="w-4 h-4 bg-current rounded-full" />
          </button>
          <button
            onClick={() => setTool('eraser')}
            className={`p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 ${tool === 'eraser' ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300' : 'text-gray-600 dark:text-gray-400'}`}
            title="Eraser (E)"
          >
            <Eraser size={16} />
          </button>
          <button
            onClick={() => setTool('fill')}
            className={`p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 ${tool === 'fill' ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300' : 'text-gray-600 dark:text-gray-400'}`}
            title="Fill Bucket (F)"
          >
            <PaintBucket size={16} />
          </button>
          <button
            onClick={() => setTool('eyedropper')}
            className={`p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 ${tool === 'eyedropper' ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300' : 'text-gray-600 dark:text-gray-400'}`}
            title="Eyedropper (I)"
          >
            <Pipette size={16} />
          </button>
        </div>
        <div className="flex gap-1 border-r border-gray-300 dark:border-gray-600 pr-2">
          <button
            onClick={() => setTool('line')}
            className={`p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 ${tool === 'line' ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300' : 'text-gray-600 dark:text-gray-400'}`}
            title="Line Tool (L)"
          >
            <Minus size={16} />
          </button>
          <button
            onClick={() => setTool('rect')}
            className={`p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 ${tool === 'rect' ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300' : 'text-gray-600 dark:text-gray-400'}`}
            title="Rectangle Tool (R)"
          >
            <Square size={16} />
          </button>
          <button
            onClick={() => setTool('circle')}
            className={`p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 ${tool === 'circle' ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300' : 'text-gray-600 dark:text-gray-400'}`}
            title="Circle Tool (C)"
          >
            <Circle size={16} />
          </button>
        </div>
        <div className="flex gap-1 border-r border-gray-300 dark:border-gray-600 pr-2">
          <button
            onClick={() => setSymmetry(symmetry === 'horizontal' ? 'none' : 'horizontal')}
            className={`p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 ${symmetry === 'horizontal' || symmetry === 'both' ? 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300' : 'text-gray-600 dark:text-gray-400'}`}
            title="Horizontal Symmetry"
          >
            <FlipHorizontal size={16} />
          </button>
          <button
            onClick={() => setSymmetry(symmetry === 'vertical' ? 'none' : 'vertical')}
            className={`p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 ${symmetry === 'vertical' || symmetry === 'both' ? 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300' : 'text-gray-600 dark:text-gray-400'}`}
            title="Vertical Symmetry"
          >
            <FlipVertical size={16} />
          </button>
        </div>
        <div className="flex gap-1 border-r border-gray-300 dark:border-gray-600 pr-2">
          <button
            onClick={onUndo}
            disabled={!canUndo}
            className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 disabled:opacity-30"
            title="Undo (Ctrl+Z)"
          >
            <Undo size={16} />
          </button>
          <button
            onClick={onRedo}
            disabled={!canRedo}
            className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 disabled:opacity-30"
            title="Redo (Ctrl+Y)"
          >
            <Redo size={16} />
          </button>
        </div>
        <div className="flex items-center gap-1">
          <Grid size={16} className="text-gray-400 ml-1" />
          <select
            value={gridSize}
            onChange={(e) => setGridSize(Number(e.target.value))}
            className="bg-transparent text-xs font-mono text-gray-600 dark:text-gray-300 outline-none cursor-pointer"
          >
            <option value={8}>8x8</option>
            <option value={16}>16x16</option>
            <option value={32}>32x32</option>
            <option value={64}>64x64</option>
          </select>
        </div>
      </div>
      <div className="flex gap-1">
        <button
          onClick={onDownload}
          className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400"
          title="Export PNG"
        >
          <Download size={16} />
        </button>
        <button
          onClick={onClear}
          className="p-1.5 rounded hover:bg-red-100 dark:hover:bg-red-900/30 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400"
          title="Clear Canvas"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};
