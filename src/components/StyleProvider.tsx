"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { WindowSystemProvider } from "@maomaolabs/core";

export type SystemStyleType = 'default' | 'traffic' | 'linux' | 'yk2000' | 'aero' | (string & {});

interface StyleContextProps {
  currentStyle: SystemStyleType;
  changeStyle: (style: SystemStyleType) => void;
  customCss: string;
  setCustomCss: (css: string) => void;
}

const StyleContext = createContext<StyleContextProps | undefined>(undefined);

export function useSystemStyle() {
  const context = useContext(StyleContext);
  if (!context) throw new Error('useSystemStyle debe usarse de forma estricta dentro de un StyleProvider');
  return context;
}

interface StyleProviderProps {
  children: ReactNode;
}

export function StyleProvider({ children }: StyleProviderProps) {
  const [currentStyle, setCurrentStyle] = useState<SystemStyleType>('default');
  const [customCss, setCustomCssState] = useState<string>('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    try {
      const savedStyle = localStorage.getItem('mao_os_style') as SystemStyleType;
      // Eliminada validación restrictiva de array para soportar temas custom
      if (savedStyle) setCurrentStyle(savedStyle);

      const savedCss = localStorage.getItem('mao_os_custom_css');
      if (savedCss) setCustomCssState(savedCss);
    } catch (error) {
      console.warn('No se pudo acceder a localStorage para recuperar el estilo. Usando default.', error);
    }
    setIsMounted(true);
  }, []);

  const changeStyle = (style: SystemStyleType) => {
    setCurrentStyle(style);
    try {
      localStorage.setItem('mao_os_style', style);
    } catch (error) {
      console.error('Incapacidad para persistir el estilo en localStorage:', error);
    }
  };

  const setCustomCss = (css: string) => {
    setCustomCssState(css);
    try {
      localStorage.setItem('mao_os_custom_css', css);
    } catch (error) {
      console.error('Incapacidad para persistir el css en localStorage:', error);
    }
  };

  return (
    <StyleContext.Provider value={{ currentStyle, changeStyle, customCss, setCustomCss }}>
      {isMounted && customCss && (
        <style dangerouslySetInnerHTML={{ __html: customCss }} />
      )}
      <WindowSystemProvider systemStyle={isMounted ? currentStyle : 'default'}>
        {children}
      </WindowSystemProvider>
    </StyleContext.Provider>
  );
}
