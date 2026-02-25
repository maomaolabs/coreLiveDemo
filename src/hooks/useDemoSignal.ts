"use client";
import { useEffect, useState } from "react";
class SignalManager {
  private listeners: Set<(data: string) => void> = new Set();
  private signal: string = "";
  subscribe(listener: (data: string) => void) {
    this.listeners.add(listener);
    listener(this.signal);
    return () => { this.listeners.delete(listener); };
  }
  emit(data: string) {
    this.signal = data;
    this.listeners.forEach(listener => listener(data));
  }
}
export const windowSignalStore = new SignalManager();
export function useDemoSignal() {
  const [signal, setSignal] = useState("");
  useEffect(() => {
    return windowSignalStore.subscribe(setSignal);
  }, []);
  return { signal, emit: (data: string) => windowSignalStore.emit(data) };
}
