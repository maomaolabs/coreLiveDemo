"use client";
import { motion, Variants } from "framer-motion";
import { assetPath } from "@/lib/assetPath";

export function HeroSection() {

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section className="flex flex-col items-center justify-start min-h-screen text-center px-6 relative pt-24 md:pt-32 pb-16">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center w-full max-w-5xl"
      >
        <motion.div variants={item} className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-2xl text-slate-600 dark:text-slate-300 text-xs font-medium mb-10 shadow-sm ring-1 ring-black/[0.03] dark:ring-white/[0.05]">
          <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
          @maomaolabs/core v1.1.0
        </motion.div>

        <motion.h1 variants={item} className="text-5xl md:text-[clamp(3.5rem,8vw,5.5rem)] font-bold tracking-tighter mb-8 text-slate-900 dark:text-white antialiased leading-[1.05] text-balance">
          Desktop Experience <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-400"> for the Web.</span>
        </motion.h1>

        <motion.p variants={item} className="text-lg md:text-[clamp(1.125rem,3vw,1.35rem)] text-slate-500 dark:text-slate-400 mb-12 max-w-2xl font-medium tracking-tight px-4 leading-relaxed text-balance">
          A standalone, lightweight React library that brings complete, performant, and responsive window management to your browser.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap justify-center items-center gap-4 sm:gap-5 text-sm font-semibold w-full px-4 sm:px-6 mb-24">
          <a
            href="https://github.com/maomaolabs/core"
            target="_blank"
            rel="noreferrer"
            className="flex w-full sm:flex-1 sm:min-w-[160px] sm:max-w-[240px] items-center justify-center px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:scale-[1.03] transition-all duration-300 ease-out shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(255,255,255,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] dark:hover:shadow-[0_8px_30px_rgb(255,255,255,0.2)]"
          >
            Explore GitHub
          </a>
          <a
            href="https://www.npmjs.com/package/@maomaolabs/core?activeTab=readme"
            target="_blank"
            rel="noreferrer"
            className="flex w-full sm:flex-1 sm:min-w-[160px] sm:max-w-[240px] items-center justify-center px-8 py-4 rounded-full bg-white/50 dark:bg-black/20 text-slate-700 dark:text-slate-300 border border-black/5 dark:border-white/10 hover:scale-[1.03] hover:bg-white/80 dark:hover:bg-white/5 transition-all duration-300 ease-out shadow-sm backdrop-blur-xl"
          >
            View on npm
          </a>
        </motion.div>

        <div
          className="relative w-full max-w-[1200px] rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-[0_30px_100px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_30px_100px_-10px_rgba(0,0,0,0.7)] ring-1 ring-black/5 dark:ring-white/10 [perspective:2000px] border-b-8 border-r-4 border-black/10 dark:border-black/50"
        >
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent z-10 pointer-events-none"></div>

          <video
            src={assetPath("/assets/0.webm")}
            autoPlay
            loop
            muted
            playsInline
            className="block w-full h-auto object-cover object-top"
          />
        </div>
      </motion.div>
    </section>
  );
}
