"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useWindowActions } from "@maomaolabs/core";
import { APPS } from "@/config/Windows";

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
        <Image
          src="/wallpaper.jpg"
          alt="Cloud Wallpaper"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 pointer-events-none mix-blend-screen bg-indigo-500/[0.05]" />
    </div>
  );
}
