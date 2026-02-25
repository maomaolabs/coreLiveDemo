"use client";
import { motion } from "framer-motion";

const ASSETS_BASE = "/assets/";

type MediaItem = {
  src: string;
  type: "image" | "gif";
  label: string;
  caption: string;
  wide?: boolean;
};

const MEDIA_ITEMS: MediaItem[] = [
  {
    src: `${ASSETS_BASE}1.png`,
    type: "image",
    label: "Multi-Window",
    caption: "Multiple windows on screen simultaneously — each with its own focus, z-index, and state.",
    wide: true,
  },
  {
    src: `${ASSETS_BASE}4.gif`,
    type: "gif",
    label: "Window Interactions",
    caption: "Drag, resize, minimize, and maximize in real time.",
  },
  {
    src: `${ASSETS_BASE}5.gif`,
    type: "gif",
    label: "Snap Engine",
    caption: "Native-feeling edge and corner snapping with live preview overlays.",
  },

  {
    src: `${ASSETS_BASE}2.png`,
    type: "image",
    label: "Toolbar Detail",
    caption: "Clean, animated toolbar with icon tooltips and folder support.",
    wide: true,
  },
];

export function MediaShowcase() {
  return (
    <section className="py-24 px-6 w-full max-w-[90rem] mx-auto space-y-20">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-center space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl text-slate-500 dark:text-slate-400 text-xs font-medium shadow-sm">
          <span className="flex h-1.5 w-1.5 rounded-full bg-green-400"></span>
          Live demo screenshots &amp; recordings
        </div>
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
          See it in action.
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-base font-medium max-w-lg mx-auto text-balance leading-relaxed">
          Real screenshots and GIF recordings from the MaoMao OS demo — built entirely with{" "}
          <code className="font-mono text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded-md text-[0.8em]">
            @maomaolabs/core
          </code>.
        </p>
      </motion.div>

      {/* Hero wide shot */}
      <HeroMedia item={MEDIA_ITEMS[0]} />

      {/* Two-column GIF row */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
        <MediaCard item={MEDIA_ITEMS[1]} index={0} />
        <MediaCard item={MEDIA_ITEMS[2]} index={1} />
      </div>

      {/* Toolbar detail strip */}
      <HeroMedia item={MEDIA_ITEMS[3]} />
    </section>
  );
}

function HeroMedia({ item }: { item: MediaItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative rounded-[2rem] overflow-hidden shadow-2xl shadow-black/10 dark:shadow-black/40 ring-1 ring-black/5 dark:ring-white/10 bg-black"
    >
      {/* Glass label */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/30 dark:bg-black/50 backdrop-blur-xl border border-white/10 text-white text-xs font-medium shadow-sm pointer-events-none">
        {item.type === "gif" && (
          <span className="flex h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse"></span>
        )}
        {item.label}
      </div>

      <img
        src={item.src}
        alt={item.label}
        className="w-full object-cover block"
        loading="lazy"
      />

      {/* Caption overlay on hover */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6 pointer-events-none">
        <p className="text-white/90 text-sm font-medium leading-snug">{item.caption}</p>
      </div>
    </motion.div>
  );
}

function MediaCard({ item, index }: { item: MediaItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative rounded-[1.75rem] overflow-hidden ring-1 ring-black/5 dark:ring-white/10 shadow-xl shadow-black/5 dark:shadow-black/30 bg-black flex flex-col"
    >
      {/* Type badge */}
      <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 text-white text-[11px] font-medium pointer-events-none">
        {item.type === "gif" && (
          <span className="flex h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse"></span>
        )}
        {item.label}
      </div>

      <div className="overflow-hidden flex-1">
        <img
          src={item.src}
          alt={item.label}
          className="w-full h-full object-cover block group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          loading="lazy"
        />
      </div>

      {/* Caption */}
      <div className="p-5 bg-white/5 dark:bg-black/60 backdrop-blur-xl border-t border-white/10">
        <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-relaxed">{item.caption}</p>
      </div>
    </motion.div>
  );
}
