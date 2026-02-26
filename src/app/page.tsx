"use client";

import { useEffect } from "react";
import { useWindowActions } from "@maomaolabs/core";
import { APPS } from "@/config/Windows";
import { assetPath } from "@/lib/assetPath";

export default function Page() {
  const { openWindow } = useWindowActions();

  useEffect(() => {
    openWindow({
      ...APPS.overview,
      initialSize: { width: 950, height: 750 },
      initialPosition: { x: window.innerWidth / 2 - 475, y: window.innerHeight / 2 - 375 },
      isMaximized: true
    });
  }, [openWindow]);

  return (
    <div className="relative w-full h-screen pointer-events-none">
      <div className="absolute inset-0">
        <img
          src={assetPath("/wallpaper.jpg")}
          alt="Cloud Wallpaper"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 pointer-events-none mix-blend-screen bg-indigo-500/[0.05]" />
    </div>
  );
}
