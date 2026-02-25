"use client";

import React, { useState } from "react";
import { Toolbar, WindowManager } from "@maomaolabs/core";
import { windows } from "@/config/Windows";

export const OSWalkthrough = ({ children }: { children: React.ReactNode }) => {

  return (
    <>
      <div className={`relative h-screen w-full overflow-hidden`}>
        <WindowManager />
        <div className="relative z-10 w-full h-full overflow-hidden">
          {children}
        </div>
        <Toolbar toolbarItems={windows} />
      </div>
    </>
  );
};
