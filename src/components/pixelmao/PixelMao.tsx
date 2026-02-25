import React, { useState, useEffect, useCallback } from 'react';
import { Canvas } from './Canvas';
import { Palette } from './Palette';
import { PixelMaoToolbar } from './PixelMaoToolbar';
import { Modal } from '../ui/Modal';
export const PixelMao = () => {
  const [gridSize, setGridSize] = useState(16);
  const [selectedColor, setSelectedColor] = useState('#000000');
  const [tool, setTool] = useState<'pencil' | 'eraser' | 'fill' | 'eyedropper' | 'line' | 'rect' | 'circle'>('pencil');
  const [symmetry, setSymmetry] = useState<'none' | 'horizontal' | 'vertical' | 'both'>('none');
  const [history, setHistory] = useState<string[][]>([Array(16 * 16).fill('')]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [previewPixels, setPreviewPixels] = useState<(string | null)[] | undefined>(undefined);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPos, setStartPos] = useState<number | null>(null);
  const [modalConfig, setModalConfig] = useState<{
    isOpen: boolean;
    title: string;
    content: string;
    onConfirm: () => void;
  }>({
    isOpen: false,
    title: '',
    content: '',
    onConfirm: () => { },
  });
  const pixels = history[historyIndex];
  const pushState = (newPixels: string[]) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newPixels);
    if (newHistory.length > 50) newHistory.shift();
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };
  const handleResize = (newSize: number) => {
    setModalConfig({
      isOpen: true,
      title: 'Change Grid Size?',
      content: 'Changing grid size will clear the canvas. This action cannot be undone.',
      onConfirm: () => {
        setGridSize(newSize);
        setHistory([Array(newSize * newSize).fill('')]);
        setHistoryIndex(0);
        setModalConfig(prev => ({ ...prev, isOpen: false }));
      }
    });
  };
  const getSymmetryIndices = (index: number) => {
    const indices = [index];
    const row = Math.floor(index / gridSize);
    const col = index % gridSize;
    if (symmetry === 'horizontal' || symmetry === 'both') {
      const symCol = gridSize - 1 - col;
      indices.push(row * gridSize + symCol);
    }
    if (symmetry === 'vertical' || symmetry === 'both') {
      const symRow = gridSize - 1 - row;
      indices.push(symRow * gridSize + col);
    }
    if (symmetry === 'both') {
      const symCol = gridSize - 1 - col;
      const symRow = gridSize - 1 - row;
      indices.push(symRow * gridSize + symCol);
    }
    return [...new Set(indices)];
  };
  const getLinePixels = (x0: number, y0: number, x1: number, y1: number) => {
    const pixels: number[] = [];
    const dx = Math.abs(x1 - x0);
    const dy = Math.abs(y1 - y0);
    const sx = (x0 < x1) ? 1 : -1;
    const sy = (y0 < y1) ? 1 : -1;
    let err = dx - dy;
    while (true) {
      if (x0 >= 0 && x0 < gridSize && y0 >= 0 && y0 < gridSize) {
        pixels.push(y0 * gridSize + x0);
      }
      if (x0 === x1 && y0 === y1) break;
      const e2 = 2 * err;
      if (e2 > -dy) { err -= dy; x0 += sx; }
      if (e2 < dx) { err += dx; y0 += sy; }
    }
    return pixels;
  };
  const getRectPixels = (x0: number, y0: number, x1: number, y1: number) => {
    const pixels: number[] = [];
    const minX = Math.min(x0, x1);
    const maxX = Math.max(x0, x1);
    const minY = Math.min(y0, y1);
    const maxY = Math.max(y0, y1);
    for (let x = minX; x <= maxX; x++) {
      pixels.push(minY * gridSize + x);
      pixels.push(maxY * gridSize + x);
    }
    for (let y = minY + 1; y < maxY; y++) {
      pixels.push(y * gridSize + minX);
      pixels.push(y * gridSize + maxX);
    }
    return pixels;
  };
  const getCirclePixels = (x0: number, y0: number, x1: number, y1: number) => {
    const pixels: number[] = [];
    const r = Math.floor(Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2)));
    let x = r, y = 0;
    let P = 1 - r;
    const addPoints = (cx: number, cy: number, x: number, y: number) => {
      const points = [
        { x: cx + x, y: cy + y }, { x: cx - x, y: cy + y },
        { x: cx + x, y: cy - y }, { x: cx - x, y: cy - y },
        { x: cx + y, y: cy + x }, { x: cx - y, y: cy + x },
        { x: cx + y, y: cy - x }, { x: cx - y, y: cy - x }
      ];
      points.forEach(p => {
        if (p.x >= 0 && p.x < gridSize && p.y >= 0 && p.y < gridSize) {
          pixels.push(p.y * gridSize + p.x);
        }
      });
    };
    while (x > y) {
      y++;
      if (P <= 0) P = P + 2 * y + 1;
      else {
        x--;
        P = P + 2 * y - 2 * x + 1;
      }
      if (x < y) break;
      addPoints(x0, y0, x, y);
    }
    addPoints(x0, y0, r, 0);
    return pixels;
  };
  const handlePixelDown = (index: number) => {
    setIsDrawing(true);
    setStartPos(index);
    if (tool === 'eyedropper') {
      const color = pixels[index];
      if (color) setSelectedColor(color);
      setTool('pencil');
      setIsDrawing(false);
      return;
    }
    if (tool === 'fill') {
      const newPixels = [...pixels];
      const targetColor = pixels[index];
      if (targetColor === selectedColor) return;
      const stack = [index];
      while (stack.length) {
        const i = stack.pop()!;
        if (newPixels[i] !== targetColor) continue;
        newPixels[i] = selectedColor;
        const row = Math.floor(i / gridSize);
        const col = i % gridSize;
        if (col > 0) stack.push(i - 1);
        if (col < gridSize - 1) stack.push(i + 1);
        if (row > 0) stack.push(i - gridSize);
        if (row < gridSize - 1) stack.push(i + gridSize);
      }
      pushState(newPixels);
      setIsDrawing(false);
      return;
    }
    if (tool === 'line' || tool === 'rect' || tool === 'circle') {
      setPreviewPixels(Array(gridSize * gridSize).fill(null));
    } else {
      const newPixels = [...pixels];
      const indices = getSymmetryIndices(index);
      const color = tool === 'eraser' ? '' : selectedColor;
      indices.forEach(idx => newPixels[idx] = color);
      setHistory(prev => {
        const newHist = [...prev];
        newHist[historyIndex] = newPixels;
        return newHist;
      });
    }
  };
  const handlePixelMove = (index: number) => {
    if (!isDrawing) return;
    if (tool === 'pencil' || tool === 'eraser') {
      const newPixels = [...pixels];
      const indices = getSymmetryIndices(index);
      const color = tool === 'eraser' ? '' : selectedColor;
      indices.forEach(idx => newPixels[idx] = color);
      setHistory(prev => {
        const newHist = [...prev];
        newHist[historyIndex] = newPixels;
        return newHist;
      });
    } else if (tool === 'line' || tool === 'rect' || tool === 'circle') {
      if (startPos === null) return;
      const x0 = startPos % gridSize;
      const y0 = Math.floor(startPos / gridSize);
      const x1 = index % gridSize;
      const y1 = Math.floor(index / gridSize);
      let shapeIndices: number[] = [];
      if (tool === 'line') shapeIndices = getLinePixels(x0, y0, x1, y1);
      if (tool === 'rect') shapeIndices = getRectPixels(x0, y0, x1, y1);
      if (tool === 'circle') shapeIndices = getCirclePixels(x0, y0, x1, y1);
      const newPreview = Array(gridSize * gridSize).fill(null);
      const shapeSet = new Set<number>();
      shapeIndices.forEach(idx => {
        const symIndices = getSymmetryIndices(idx);
        symIndices.forEach(s => shapeSet.add(s));
      });
      shapeSet.forEach(idx => {
        newPreview[idx] = selectedColor;
      });
      setPreviewPixels(newPreview);
    }
  };
  const handlePixelUp = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    setStartPos(null);
    if (tool === 'line' || tool === 'rect' || tool === 'circle') {
      if (previewPixels) {
        const newPixels = [...pixels];
        previewPixels.forEach((color, i) => {
          if (color !== null) newPixels[i] = color;
        });
        pushState(newPixels);
        setPreviewPixels(undefined);
      }
    } else {
      pushState(history[historyIndex]);
    }
  };
  const undo = useCallback(() => {
    if (historyIndex > 0) setHistoryIndex(historyIndex - 1);
  }, [historyIndex]);
  const redo = useCallback(() => {
    if (historyIndex < history.length - 1) setHistoryIndex(historyIndex + 1);
  }, [historyIndex, history.length]);
  const clearCanvas = () => {
    setModalConfig({
      isOpen: true,
      title: 'Clear Canvas?',
      content: 'Are you sure you want to clear the canvas? This action cannot be undone.',
      onConfirm: () => {
        pushState(Array(gridSize * gridSize).fill(''));
        setModalConfig(prev => ({ ...prev, isOpen: false }));
      }
    });
  };
  const downloadImage = () => {
    const canvas = document.createElement('canvas');
    canvas.width = gridSize * 10;
    canvas.height = gridSize * 10;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.fillStyle = '#ffffff';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pixels.forEach((color, i) => {
      if (color) {
        const x = (i % gridSize) * 10;
        const y = Math.floor(i / gridSize) * 10;
        ctx.fillStyle = color;
        ctx.fillRect(x, y, 10, 10);
      }
    });
    const link = document.createElement('a');
    link.download = `pixelmao-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        if (e.key === 'z') {
          e.preventDefault();
          undo();
        } else if (e.key === 'y') {
          e.preventDefault();
          redo();
        }
      }
      if (e.key === 'p') setTool('pencil');
      if (e.key === 'e') setTool('eraser');
      if (e.key === 'f') setTool('fill');
      if (e.key === 'i') setTool('eyedropper');
      if (e.key === 'l') setTool('line');
      if (e.key === 'r') setTool('rect');
      if (e.key === 'c') setTool('circle');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [undo, redo]);
  return (
    <div className="flex flex-col h-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
      <PixelMaoToolbar
        tool={tool}
        setTool={setTool}
        onClear={clearCanvas}
        onDownload={downloadImage}
        onUndo={undo}
        onRedo={redo}
        canUndo={historyIndex > 0}
        canRedo={historyIndex < history.length - 1}
        gridSize={gridSize}
        setGridSize={handleResize}
        symmetry={symmetry}
        setSymmetry={setSymmetry}
      />
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        <div className="flex-1 flex items-center justify-center p-4 bg-gray-200 dark:bg-gray-950 overflow-auto cursor-crosshair min-h-[300px]">
          <Canvas
            pixels={pixels}
            previewPixels={previewPixels}
            gridSize={gridSize}
            onPixelDown={handlePixelDown}
            onPixelMove={handlePixelMove}
            onPixelUp={handlePixelUp}
            tool={tool}
          />
        </div>
        <div className="w-full md:w-48 bg-white dark:bg-gray-800 border-t md:border-t-0 md:border-l border-gray-300 dark:border-gray-700 p-3 flex flex-row md:flex-col gap-4 overflow-x-auto md:overflow-y-auto shrink-0">
          <div className="flex-1 md:flex-none">
            <h3 className="text-xs font-bold uppercase text-gray-500 dark:text-gray-400 mb-2">Palette</h3>
            <Palette selectedColor={selectedColor} onSelectColor={setSelectedColor} />
          </div>
          <div className="flex-none pt-0 md:pt-4 ml-auto md:ml-0 border-l md:border-l-0 md:border-t border-gray-200 dark:border-gray-700 pl-4 md:pl-0">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">Preview</div>
            <div className="w-full aspect-square border border-gray-300 dark:border-gray-600 bg-white dark:bg-black flex items-center justify-center p-4">
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
                  width: '64px',
                  height: '64px'
                }}
              >
                {pixels.map((color, i) => (
                  <div key={i} style={{ backgroundColor: color || 'transparent' }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalConfig.isOpen}
        title={modalConfig.title}
        onClose={() => setModalConfig(prev => ({ ...prev, isOpen: false }))}
        onConfirm={modalConfig.onConfirm}
      >
        <p>{modalConfig.content}</p>
      </Modal>
    </div >
  );
};
