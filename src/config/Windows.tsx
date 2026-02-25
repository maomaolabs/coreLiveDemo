import { ToolbarItem } from '@maomaolabs/core';
import { Activity, BookOpen, Sparkles, Terminal, FlaskConical, Zap, Radar, Radio, RadioReceiver, Pencil } from 'lucide-react';
import { AppOverview } from '@/components/showcase/AppOverview';
import { WindowPlayground } from '@/components/showcase/WindowPlayground';
import { SystemMonitor } from '@/components/monitor/SystemMonitor';
import { StressTest } from '@/components/showcase/StressTest';
import { SnapDetector } from '@/components/showcase/SnapDetector';
import { SignalSender } from '@/components/showcase/SignalSender';
import { SignalReceiver } from '@/components/showcase/SignalReceiver';
import { DocsApp } from '@/components/DocsApp';
import { PixelMao } from '@/components/pixelmao/PixelMao';

export const APPS = {
  overview: {
    id: 'overview',
    title: 'Welcome to MaoMao OS',
    icon: <Sparkles size={20} color="#f472b6" />,
    component: <AppOverview />,
    initialSize: { width: 900, height: 750 },
    initialPosition: { x: 50, y: 50 },
  },
  builder: {
    id: 'builder',
    title: 'Window Configurator',
    icon: <Terminal size={20} color="#60a5fa" />,
    component: <WindowPlayground />,
    initialSize: { width: 850, height: 650 },
    initialPosition: { x: 150, y: 100 },
  },
  monitor: {
    id: 'system-monitor',
    title: 'System State Monitor',
    icon: <Activity size={20} color="#34d399" />,
    component: <SystemMonitor />,
    initialSize: { width: 450, height: 400 },
    initialPosition: { x: 800, y: 50 },
  },
  docs: {
    id: 'docs',
    title: 'Documentation',
    icon: <BookOpen size={20} color="#fb923c" />,
    component: <DocsApp />,
    initialSize: { width: 900, height: 700 },
    initialPosition: { x: 200, y: 150 },
  },
  pixel: {
    id: 'pixel',
    title: 'Pixel',
    icon: <Pencil size={20} color="#f472b6" />,
    component: <PixelMao />,
    initialSize: { width: 900, height: 750 },
    initialPosition: { x: 50, y: 50 },
  }
};

export const DEMO_LAB_FOLDER = {
  id: 'demo-lab',
  title: 'Showcase Lab',
  icon: <FlaskConical size={20} color="#fcd34d" />,
  apps: [
    {
      id: 'stress-test',
      title: 'Performance Tester',
      icon: <Zap size={20} color="#facc15" />,
      component: <StressTest />,
      initialSize: { width: 450, height: 500 },
      isMaximized: false
    },
    {
      id: 'snap-detector',
      title: 'Snap Engine Radar',
      icon: <Radar size={20} color="#34d399" />,
      component: <SnapDetector />,
      initialSize: { width: 500, height: 400 },
      isMaximized: false
    },
    {
      id: 'signal-sender',
      title: 'Transmission Node',
      icon: <Radio size={20} color="#60a5fa" />,
      component: <SignalSender />,
      initialSize: { width: 400, height: 350 },
      isMaximized: false
    },
    {
      id: 'signal-receiver',
      title: 'Receiver Array',
      icon: <RadioReceiver size={20} color="#818cf8" />,
      component: <SignalReceiver />,
      initialSize: { width: 400, height: 400 },
      isMaximized: false
    }
  ]
};

export const windows: ToolbarItem[] = [
  APPS.overview,
  APPS.builder,
  DEMO_LAB_FOLDER,
  APPS.monitor,
  APPS.docs,
  APPS.pixel,
];
