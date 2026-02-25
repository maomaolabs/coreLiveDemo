import React, { useState } from 'react';

interface CanvasProps {
  pixels: string[];
  previewPixels?: (string | null)[];
  gridSize: number;
  onPixelDown: (index: number) => void;
  onPixelMove: (index: number) => void;
  onPixelUp: () => void;
  tool: string;
}

export const Canvas = ({ pixels, previewPixels, gridSize, onPixelDown, onPixelMove, onPixelUp, tool }: CanvasProps) => {
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleMouseDown = (index: number) => {
    setIsMouseDown(true);
    onPixelDown(index);
  };

  const handleMouseEnter = (index: number) => {
    onPixelMove(index);
  };

  const handleMouseUp = () => {
    if (isMouseDown) {
      setIsMouseDown(false);
      onPixelUp();
    }
  };

  return (
    <div
      className="bg-white dark:bg-gray-800 shadow-xl border border-gray-300 dark:border-gray-600 select-none touch-none"
      onMouseLeave={handleMouseUp}
      onMouseUp={handleMouseUp}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${gridSize}, 24px)`,
        gridTemplateRows: `repeat(${gridSize}, 24px)`,
      }}
    >
      {pixels.map((color, i) => {
        const previewColor = previewPixels ? previewPixels[i] : null;
        const displayColor = previewColor !== null && previewColor !== undefined ? previewColor : color;

        return (
          <div
            key={i}
            className={`
              border-r border-b border-gray-100 dark:border-gray-700/50 
              ${i < gridSize ? 'border-t' : ''} 
              ${i % gridSize === 0 ? 'border-l' : ''}
              hover:opacity-80 cursor-crosshair
            `}
            style={{ backgroundColor: displayColor || 'transparent' }}
            onMouseDown={() => handleMouseDown(i)}
            onMouseEnter={() => handleMouseEnter(i)}
            onDragStart={(e) => e.preventDefault()}
          />
        );
      })}
    </div>
  );
};
