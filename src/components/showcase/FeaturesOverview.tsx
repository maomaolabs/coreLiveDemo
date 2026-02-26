import { Layout, Maximize2, Zap, MonitorSmartphone } from "lucide-react";
import { CodeSnippet } from "./CodeSnippet";
import { motion } from "framer-motion";
import { assetPath } from "@/lib/assetPath";

export function FeaturesOverview() {
  const integrationSnippet = `
import { WindowSystemProvider, WindowManager, Toolbar } from '@maomaolabs/core';
import '@maomaolabs/core/dist/style.css'; 

const DESKTOP_ITEMS = [
  {
    id: 'my-app',
    title: 'Hello App',
    component: <div className="p-4">Hello</div>
  },
  {
    id: 'games',
    title: 'Games Folder',
    apps: [
      { id: 'minesweeper', title: 'Minesweeper', component: <div /> }
    ]
  }
];

export function App() {
  return (
    <WindowSystemProvider>
      <WindowManager />
      <Toolbar toolbarItems={DESKTOP_ITEMS} showLogo={true} />
    </WindowSystemProvider>
  );
}
`;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section className="py-24 px-4 sm:px-6 md:px-12 max-w-[90rem] mx-auto w-full @container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-20 px-4"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white antialiased text-balance">Everything You Need</h2>
        <p className="text-slate-500 dark:text-slate-400 text-lg md:text-[clamp(1.125rem,2vw,1.25rem)] max-w-2xl mx-auto font-medium tracking-tight text-balance">
          Built from the ground up to provide a native-feeling desktop experience inside any web application.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 md:gap-8 mb-24"
      >
        <FeatureCard
          variants={itemVariants}
          icon={<Zap className="text-slate-700 dark:text-slate-300" size={24} strokeWidth={1.5} />}
          title="Uncompromised Performance"
          description="Context splitting ensures zero unnecessary re-renders when windows are dragged or resized."
          mediaSrc={assetPath("/assets/1.png")}
        />
        <FeatureCard
          variants={itemVariants}
          icon={<Maximize2 className="text-slate-700 dark:text-slate-300" size={24} strokeWidth={1.5} />}
          title="Native Snapping"
          description="Drag windows to screen edges to snap them seamlessly, just like Windows Aero."
          mediaSrc={assetPath("/assets/5.gif")}
        />
        <FeatureCard
          variants={itemVariants}
          icon={<Layout className="text-slate-700 dark:text-slate-300" size={24} strokeWidth={1.5} />}
          title="Built-in Toolbar"
          description="Highly customizable taskbar with support for grouped applications in folders."
          mediaSrc={assetPath("/assets/7.png")}
        />
        <FeatureCard
          variants={itemVariants}
          icon={<MonitorSmartphone className="text-slate-700 dark:text-slate-300" size={24} strokeWidth={1.5} />}
          title="Window Lifecycle"
          description="Drag, resize, minimize to toolbar, and maximize natively with fluid animations."
          mediaSrc={assetPath("/assets/4.gif")}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] gap-8 md:gap-12 items-center bg-white/40 dark:bg-white/5 backdrop-blur-3xl border border-black/5 dark:border-white/10 rounded-3xl md:rounded-[3rem] p-6 md:p-16 shadow-2xl shadow-black/5 dark:shadow-black/20 ring-1 ring-black/5 dark:ring-white/5"
      >
        <div className="md:pr-8 flex-1">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white antialiased text-balance">Dead Simple Integration</h3>
          <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed font-medium text-lg tracking-tight">
            Wrap your application in the <code className="bg-black/5 dark:bg-black/40 px-2 py-1 rounded-lg text-slate-900 dark:text-slate-200 font-mono text-sm border border-black/5 dark:border-white/5 shadow-sm whitespace-nowrap">WindowSystemProvider</code> and drop in the <code className="bg-black/5 dark:bg-black/40 px-2 py-1 rounded-lg text-slate-900 dark:text-slate-200 font-mono text-sm border border-black/5 dark:border-white/5 shadow-sm whitespace-nowrap">WindowManager</code> overlay. That's it.
            The system instantly tracks z-indexes, dimensions, focus states, and snapping areas.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium text-lg tracking-tight">
            Need a taskbar? The optional <code className="bg-black/5 dark:bg-black/40 px-2 py-1 rounded-lg text-slate-900 dark:text-slate-200 font-mono text-sm border border-black/5 dark:border-white/5 shadow-sm whitespace-nowrap">Toolbar</code> component automatically syncs with active windows, handling minimization rules and folder groups out-of-the-box.
          </p>
        </div>
        <div className="flex-1 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-black/5 dark:border-white/10 shadow-2xl shadow-black/10 dark:shadow-black/40 w-full min-w-0">
          <CodeSnippet code={integrationSnippet} />
        </div>
      </motion.div>
    </section>
  );
}

function FeatureCard({ icon, title, description, mediaSrc, variants }: { icon: React.ReactNode, title: string, description: string, mediaSrc?: string, variants?: any }) {
  return (
    <motion.div variants={variants} className="bg-white/40 dark:bg-white/5 backdrop-blur-2xl border border-black/5 dark:border-white/10 p-2 pb-8 rounded-[2rem] hover:scale-[1.02] hover:bg-white/60 dark:hover:bg-white/10 transition-all duration-500 ease-out group ring-1 ring-black/5 dark:ring-white/5 shadow-xl shadow-black-[0.03] dark:shadow-black/20 flex flex-col items-start w-full min-w-0 overflow-hidden">
      {mediaSrc ? (
        <div className="w-full aspect-video bg-black/5 dark:bg-black/50 rounded-[1.5rem] mb-6 overflow-hidden relative shadow-inner ring-1 ring-black/5 dark:ring-white/10">
          <img src={mediaSrc} alt={title} className="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-700 ease-out" loading="lazy" />
          {mediaSrc.endsWith('.gif') && (
            <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 shadow-sm">
              <span className="flex h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse"></span>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-800/80 w-14 h-14 shrink-0 flex items-center justify-center rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-500 ease-out shadow-sm border border-black/5 dark:border-white/5 mx-6 mt-6">
          {icon}
        </div>
      )}

      <div className="px-6 w-full">
        <h4 className="text-xl font-bold mb-3 tracking-tight text-slate-900 dark:text-white antialiased w-full truncate flex items-center gap-3">
          {!mediaSrc && icon}
          {title}
        </h4>
        <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium w-full text-pretty">{description}</p>
      </div>
    </motion.div>
  );
}
