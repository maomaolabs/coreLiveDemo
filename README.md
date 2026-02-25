# MaoMao OS Live Demo

This is the official demonstration environment for **[@maomaolabs/core](https://www.npmjs.com/package/@maomaolabs/core)**, showcasing the full capabilities of the library in a simulated operating system environment. 

This repository contains the Next.js application that powers the live demo, featuring complex layered architectures, multiple custom-built "apps" (like PixelMao and SystemMonitor), and fully customized implementations of the underlying core window management system.

## 🚀 Quick Start

To run this demonstration locally:

```bash
# Clone the repository
git clone https://github.com/maomaolabs/coreLiveDemo.git

# Navigate into the directory
cd coreLiveDemo

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

The project is structured around the `src/` directory, heavily modularizing the different applications that compose the simulated "OS".

*   **`src/app/`** - The Next.js 14 App Router entry points (`page.tsx`, `layout.tsx`) and global CSS.
*   **`src/components/`** - The core of the simulated OS.
    *   **`docs/`** - The MaoMao OS internal documentation app components.
    *   **`monitor/`** - The `SystemMonitor` application, built to track window states and system performance live.
    *   **`pixelmao/`** - A complete pixel-art drawing application demonstrating complex nested state within a window.
    *   **`showcase/`** - The marketing overview page components (`HeroSection`, `FeaturesOverview`, `MediaShowcase`).
    *   **`ui/`** - Reusable UI primitives used across the OS (like `Modal`).
*   **`src/hooks/`** - Custom React hooks for global state management (e.g., `useDemoSignal`).

## 💡 Key Implementations

This demo highlights several advanced patterns achievable with `@maomaolabs/core`:

1.  **Fully Customized Toolbar:** Demonstrates how to build a highly interactive taskbar with folder grouping, tooltips, and live window synchronization.
2.  **State Inspection:** The `SystemMonitor` uses the `useWindows` hook to tap into the engine's internal state and visualize z-indexes and coordinates in real-time.
3.  **Performant Renders:** The "Stress Test" logic inside the Playground proves the context-splitting architecture by spawning dozens of windows without dropping frames.
4.  **Fluid UI Synchronization:** Showcases how native-feeling animations (like minimizing to an icon) integrate flawlessly with standard CSS/Framer Motion and the core library.

## 🌐 Deployment

This project is optimized for deployment on Vercel or Cloudflare Pages. Since it relies heavily on client-side rendering (`"use client"`), it functions effectively as a Single Page Application within the Next.js framework. It requires zero configuration on standard platforms. Note that you may need to adjust organization visibility settings on platforms like Vercel if you deploy from a private GitHub organization tier.

## 📄 License

MIT © [MaoMao Labs](https://github.com/maomaolabs)
