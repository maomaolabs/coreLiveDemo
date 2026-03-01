import React from 'react';

const CB = ({ code }: { code: string }) => (
  <pre className="bg-gray-900 dark:bg-black text-green-300 p-4 rounded-lg overflow-x-auto text-xs leading-relaxed border border-gray-700 dark:border-gray-800 my-3">
    <code>{code.trim()}</code>
  </pre>
);

const Tag = ({ children }: { children: React.ReactNode }) => (
  <code className="bg-gray-100 dark:bg-gray-800 text-pink-600 dark:text-pink-400 px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>
);

export const Theming = () => (
  <div className="space-y-10 animate-in fade-in slide-in-from-bottom-2 duration-300">

    <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Theming</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        Use built-in system styles or inject your own CSS to fully control the visual identity of every window.
      </p>
    </div>

    {/* Required CSS import */}
    <section className="space-y-3">
      <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Required CSS Import</h2>
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        The library requires a single CSS import to function correctly. Add it once in your app entry point:
      </p>
      <CB code={`import '@maomaolabs/core/dist/style.css';`} />
      <p className="text-xs text-gray-500 dark:text-gray-500">
        Ensure your bundler (Vite, Webpack, etc.) is configured to process CSS from <Tag>node_modules</Tag>.
      </p>
    </section>

    {/* Built-in themes */}
    <section className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Built-in Themes</h2>
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        Pass <Tag>systemStyle</Tag> to <Tag>WindowSystemProvider</Tag> to activate a pre-bundled theme:
      </p>
      <CB code={`<WindowSystemProvider systemStyle="aero">
  {children}
</WindowSystemProvider>`} />
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3">
        {[
          { id: 'default', desc: 'Clean, neutral, minimalist.' },
          { id: 'traffic', desc: 'Colored dot window controls.' },
          { id: 'linux', desc: 'Modern Linux-inspired style.' },
          { id: 'yk2000', desc: 'Classic 90s/00s retro look.' },
          { id: 'aero', desc: 'Glass blur effect.' },
        ].map(t => (
          <li key={t.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3 rounded-lg shadow-sm">
            <code className="text-pink-600 dark:text-pink-400 font-bold block mb-1">{t.id}</code>
            <span className="text-sm text-gray-500 dark:text-gray-400">{t.desc}</span>
          </li>
        ))}
      </ul>
    </section>

    {/* Custom theme injection */}
    <section className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Custom Theme Injection</h2>
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        Any string is accepted as <Tag>systemStyle</Tag>. The library sets a <Tag>data-system-style</Tag> attribute on the
        root element, which you target with standard CSS attribute selectors:
      </p>
      <CB code={`/* my-custom-theme.css */
[data-system-style="my-custom-theme"] .window-header {
  background: #1a1a2e;
  color: #e0e0e0;
}

[data-system-style="my-custom-theme"] .window-controls {
  gap: 6px;
}`} />
      <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 p-4 rounded-lg text-sm text-amber-800 dark:text-amber-200">
        <strong>⚠ Avoid <Tag>:global()</Tag></strong> — use standard CSS attribute selectors as shown.
        <Tag>:global()</Tag> only works in CSS Modules environments with PostCSS.
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-sm">Import your CSS anywhere in your app (e.g. <Tag>src/index.tsx</Tag>) before the provider renders:</p>
      <CB code={`import './my-custom-theme.css';`} />
      <p className="text-gray-600 dark:text-gray-300 text-sm">Then pass the identifier to the provider:</p>
      <CB code={`<WindowSystemProvider systemStyle="my-custom-theme">
  {/* ... */}
</WindowSystemProvider>`} />
    </section>

    {/* Selector reference */}
    <section className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Stable CSS Selectors</h2>
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        These class names are guaranteed stable across patch versions. Scope them under your <Tag>data-system-style</Tag> attribute:
      </p>
      <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-800 text-left">
              <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">Selector</th>
              <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">Element</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['.window-container', 'Root window wrapper'],
              ['.window-header', 'Title bar (drag area)'],
              ['.window-title', 'Title text inside the bar'],
              ['.window-icon', 'Icon inside the title bar'],
              ['.window-controls', 'Button group (min / max / close)'],
              ['.terminal-btn', 'Generic control button'],
              ['.window-scrollbar', 'Scrollable content area'],
              ['.window-resize-handle', 'Bottom-right resize grip'],
            ].map(([sel, desc], i) => (
              <tr key={sel} className={i % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800/50'}>
                <td className="px-4 py-2.5 font-mono text-pink-600 dark:text-pink-400 text-xs">{sel}</td>
                <td className="px-4 py-2.5 text-gray-600 dark:text-gray-400">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-sm">Target individual control buttons with the <Tag>data-action</Tag> attribute:</p>
      <CB code={`[data-system-style="my-theme"] [data-action="close"]    { background: red; }
[data-system-style="my-theme"] [data-action="minimize"] { background: yellow; }
[data-system-style="my-theme"] [data-action="maximize"] { background: green; }`} />
    </section>

    {/* Per-window overrides */}
    <section className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Per-Window Inline Overrides</h2>
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        Each window opened via <Tag>openWindow()</Tag> accepts <Tag>className</Tag> and <Tag>style</Tag> props for
        instance-level overrides. These are merged <em>after</em> the global theme, so they always take precedence:
      </p>
      <CB code={`openWindow({
  id: 'my-app',
  title: 'My App',
  component: <MyApp />,
  className: 'my-extra-class',
  style: { borderRadius: '16px', border: '1px solid #444' },
});`} />
    </section>

    {/* Dark mode */}
    <section className="bg-gray-900 dark:bg-black text-white p-6 rounded-xl border border-gray-800 space-y-3">
      <h2 className="text-lg font-bold">Dark Mode in Custom Themes</h2>
      <p className="text-gray-400 text-sm leading-relaxed">
        Combine your scoped selector with <Tag>@media (prefers-color-scheme: dark)</Tag> to provide automatic dark variants:
      </p>
      <CB code={`@media (prefers-color-scheme: dark) {
  [data-system-style="my-theme"] .window-header {
    background: rgba(10, 10, 14, 0.98);
  }
}`} />
    </section>

    {/* Theme Studio CTA */}
    <section className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/60 p-5 rounded-xl">
      <h2 className="text-base font-bold text-indigo-900 dark:text-indigo-200 mb-2">🎨 Theme Studio</h2>
      <p className="text-sm text-indigo-700 dark:text-indigo-300">
        Use the built-in <strong>Theme Studio</strong> app to visually configure a custom theme with color pickers (Basic Mode)
        or write raw CSS using the class reference above (Advanced Mode). Changes are injected live and persisted to{' '}
        <Tag>localStorage</Tag>.
      </p>
    </section>
  </div>
);
