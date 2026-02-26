"use client";

import React, { useEffect, useState } from "react";
import { Toolbar, WindowManager } from "@maomaolabs/core";
import { windows, DEMO_LAB_FOLDER } from "@/config/Windows";

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    setMatches(mql.matches);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return matches;
}

export const OSWalkthrough = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useMediaQuery("(max-width: 767px)");

  const toolbarItems = isMobile
    ? windows.filter((item) => item.id !== DEMO_LAB_FOLDER.id)
    : windows;

  return (
    <>
      <div className={`relative h-screen w-full overflow-hidden`}>
        <WindowManager />
        <div className="relative z-10 w-full h-full overflow-hidden">
          {children}
        </div>
        <Toolbar toolbarItems={toolbarItems} />
      </div>
    </>
  );
};
