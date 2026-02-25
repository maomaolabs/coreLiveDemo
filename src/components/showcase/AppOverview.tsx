import { HeroSection } from "./HeroSection";
import { FeaturesOverview } from "./FeaturesOverview";
import { MediaShowcase } from "./MediaShowcase";

export function AppOverview() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#fafafa] dark:bg-[#000000] text-slate-900 dark:text-slate-50 antialiased selection:bg-blue-300/40 dark:selection:bg-blue-600/40 font-sans">

      <div className="absolute inset-0 overflow-hidden pointer-events-none flex justify-center">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] max-w-[80%] max-h-[80%] bg-indigo-300/40 dark:bg-indigo-600/20 blur-[80px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-80"></div>
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] max-w-[70%] max-h-[70%] bg-fuchsia-300/40 dark:bg-fuchsia-600/20 blur-[80px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-80"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] max-w-[90%] max-h-[90%] bg-sky-200/50 dark:bg-sky-500/20 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-70"></div>
      </div>

      <div className="relative z-10 w-full h-full overflow-y-auto">
        <div className="w-full flex flex-col pt-12 pb-24">
          <HeroSection />
          <FeaturesOverview />
          <MediaShowcase />
          <footer className="py-16 mt-8 text-center text-slate-400 dark:text-slate-600 font-medium text-sm tracking-wide">
            <p>Built with ❤️ by MaoMao Labs.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
