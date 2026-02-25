import React from 'react';

interface PaletteProps {
  selectedColor: string;
  onSelectColor: (color: string) => void;
}

const COLORS = [
  '#000000', '#1a1c2c', '#5d275d', '#b13e53', '#ef7d57', '#ffcd75', '#a7f070', '#38b764',
  '#257179', '#29366f', '#3b5dc9', '#41a6f6', '#73eff7', '#f4f4f4', '#94b0c2', '#566c86',
  '#333c57', '#ffffff', '#ff0044', '#00ff99', '#ffff00', '#00ccff', '#9900ff', '#ff6600'
];

export const Palette = ({ selectedColor, onSelectColor }: PaletteProps) => {
  return (
    <div className="grid grid-cols-4 gap-2">
      {COLORS.map((color) => (
        <button
          key={color}
          onClick={() => onSelectColor(color)}
          className={`
            w-8 h-8 rounded-full border-2 transition-transform hover:scale-110
            ${selectedColor === color ? 'border-gray-900 dark:border-white scale-110 shadow-sm' : 'border-transparent'}
          `}
          style={{ backgroundColor: color }}
          title={color}
        />
      ))}
      {/* Custom Color Picker */}
      <div className="relative group w-8 h-8 rounded-full overflow-hidden border-2 border-transparent hover:scale-110 transition-transform cursor-pointer">
        <input
          type="color"
          value={selectedColor}
          onChange={(e) => onSelectColor(e.target.value)}
          className="absolute inset-0 w-[150%] h-[150%] -top-[25%] -left-[25%] cursor-pointer p-0 border-0"
          title="Custom Color"
        />
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center text-gray-400 bg-gray-100 dark:bg-gray-800">
          <span className="text-xl leading-none">+</span>
        </div>
      </div>
    </div>
  );
};
