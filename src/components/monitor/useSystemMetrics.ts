import { useState, useEffect, useRef } from "react";
export interface SystemMetrics {
  fps: number;
  memory: { used: number; total: number } | null;
  battery: { level: number; charging: boolean } | null;
  network: { rtt: number; type: string } | null;
}
export const useSystemMetrics = (): SystemMetrics => {
  const [fps, setFps] = useState(60);
  const [memory, setMemory] = useState<{ used: number; total: number } | null>(null);
  const [battery, setBattery] = useState<{ level: number; charging: boolean } | null>(null);
  const [network, setNetwork] = useState<{ rtt: number; type: string } | null>(null);
  const framesRef = useRef(0);
  const prevTimeRef = useRef(performance.now());
  useEffect(() => {
    let requestID: number;
    const countFrames = () => {
      framesRef.current++;
      const now = performance.now();
      if (now - prevTimeRef.current >= 1000) {
        setFps(Math.round((framesRef.current * 1000) / (now - prevTimeRef.current)));
        framesRef.current = 0;
        prevTimeRef.current = now;
      }
      requestID = requestAnimationFrame(countFrames);
    };
    requestID = requestAnimationFrame(countFrames);
    const updateMemory = () => {
      if ((performance as any).memory) {
        setMemory({
          used: Math.round((performance as any).memory.usedJSHeapSize / 1024 / 1024),
          total: Math.round((performance as any).memory.jsHeapSizeLimit / 1024 / 1024)
        });
      }
    };
    const updateNetwork = () => {
      const conn = (navigator as any).connection;
      if (conn) {
        setNetwork({
          rtt: conn.rtt,
          type: conn.effectiveType
        });
      }
    };
    const updateBattery = async () => {
      if ((navigator as any).getBattery) {
        try {
          const bat = await (navigator as any).getBattery();
          setBattery({ level: bat.level * 100, charging: bat.charging });
          bat.addEventListener('levelchange', () => setBattery({ level: bat.level * 100, charging: bat.charging }));
          bat.addEventListener('chargingchange', () => setBattery({ level: bat.level * 100, charging: bat.charging }));
        } catch (e) {
          console.warn("Battery API error", e);
        }
      }
    };
    updateBattery();
    updateMemory();
    updateNetwork();
    const interval = setInterval(() => {
      updateMemory();
      updateNetwork();
    }, 1000);
    return () => {
      cancelAnimationFrame(requestID);
      clearInterval(interval);
    };
  }, []);
  return { fps, memory, battery, network };
};
