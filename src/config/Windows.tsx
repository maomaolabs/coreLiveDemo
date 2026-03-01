import { ToolbarItem } from '@maomaolabs/core';
import { Activity, BookOpen, Sparkles, Terminal, FlaskConical, Zap, Radar, Radio, RadioReceiver, Pencil, Palette, WandSparkles, SunMoon, Braces } from 'lucide-react';
import { AppOverview } from '@/components/showcase/AppOverview';
import { WindowPlayground } from '@/components/showcase/WindowPlayground';
import { SystemMonitor } from '@/components/monitor/SystemMonitor';
import { StressTest } from '@/components/showcase/StressTest';
import { SnapDetector } from '@/components/showcase/SnapDetector';
import { SignalSender } from '@/components/showcase/SignalSender';
import { SignalReceiver } from '@/components/showcase/SignalReceiver';
import { DocsApp } from '@/components/DocsApp';
import { PixelMao } from '@/components/pixelmao/PixelMao';
import { AppearanceSettings } from '@/components/settings/AppearanceSettings';
import { ThemeStudio } from '@/components/settings/ThemeStudio';

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
  },
  settings: {
    id: 'appearance-settings',
    title: 'Themes',
    icon: <Palette size={20} color="#c0abf1ff" />,
    component: <AppearanceSettings />,
    initialSize: { width: 850, height: 600 },
    initialPosition: { x: 250, y: 150 },
  },
  themeStudio: {
    id: 'theme-studio',
    title: 'Theme Studio',
    icon: <WandSparkles size={20} color="#ec4899" />,
    component: <ThemeStudio />,
    initialSize: { width: 700, height: 550 },
    initialPosition: { x: 300, y: 200 },
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

export const THEME_FOLDER = {
  id: 'theme-folder',
  title: 'Theming',
  icon: <Palette size={20} color="#8b5cf6" />,
  apps: [
    {
      id: 'appearance-settings',
      title: 'Theme',
      icon: <SunMoon size={20} color="#8b5cf6" />,
      component: <AppearanceSettings />,
      initialSize: { width: 850, height: 600 },
      isMaximized: false
    },
    {
      id: 'theme-studio',
      title: 'Theme Studio',
      icon: <Braces size={20} color="#ec4899" />,
      component: <ThemeStudio />,
      initialSize: { width: 700, height: 550 },
      isMaximized: false
    }
  ]
};

export const windows: ToolbarItem[] = [
  APPS.overview,
  APPS.builder,
  APPS.monitor,
  APPS.docs,
  APPS.pixel,
  DEMO_LAB_FOLDER,
  THEME_FOLDER
];
