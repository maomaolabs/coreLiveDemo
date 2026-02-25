import React, { useEffect, useRef } from "react";

interface ResourceGraphProps {
  color: string;
  currentValue: number; // 0 to 1
}

export const ResourceGraph = ({ color, currentValue }: ResourceGraphProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dataRef = useRef<number[]>(Array(50).fill(0));
  const animationRef = useRef<number>();

  // Push new value to data
  useEffect(() => {
    dataRef.current.shift();
    dataRef.current.push(Math.max(0, Math.min(1, currentValue)));
  }, [currentValue]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = () => {
      if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
      }

      const { width, height } = canvas;

      // Draw
      ctx.clearRect(0, 0, width, height);

      ctx.beginPath();
      ctx.moveTo(0, height);

      const step = width / (dataRef.current.length - 1);

      for (let i = 0; i < dataRef.current.length; i++) {
        const val = dataRef.current[i];
        const x = i * step;
        const y = height - (val * height);
        ctx.lineTo(x, y);
      }

      ctx.lineTo(width, height);
      ctx.closePath();

      ctx.fillStyle = `${color}33`; // Transparent fill
      ctx.fill();

      ctx.beginPath();
      for (let i = 0; i < dataRef.current.length; i++) {
        const val = dataRef.current[i];
        const x = i * step;
        const y = height - (val * height);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [color]);

  return <canvas ref={canvasRef} className="w-full h-full block" />;
};
