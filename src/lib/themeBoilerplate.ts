export const THEME_STUDIO_CSS_BOILERPLATE = `/* ═══════════════════════════════════════════════════════
   MaoMao OS — Custom Theme Boilerplate
   Replace "my-custom-theme" with your own theme ID.
   Full selector reference in the Theming docs.
═══════════════════════════════════════════════════════ */

/* ── Title bar ─────────────────────────────────────── */
[data-system-style="my-custom-theme"] .window-header {
  background: rgba(18, 18, 24, 0.95);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

/* ── Title text ────────────────────────────────────── */
[data-system-style="my-custom-theme"] .window-title {
  color: #e2e8f0;
  font-size: 13px;
  font-weight: 500;
}

/* ── Control button group ──────────────────────────── */
[data-system-style="my-custom-theme"] .window-controls {
  gap: 6px;
}

/* ── Individual control buttons ────────────────────── */
[data-system-style="my-custom-theme"] .terminal-btn {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  transition: filter 0.2s ease;
}

[data-system-style="my-custom-theme"] [data-action="close"] {
  background: #ef4444;
  border: 1px solid rgba(0, 0, 0, 0.2);
}

[data-system-style="my-custom-theme"] [data-action="minimize"] {
  background: #eab308;
  border: 1px solid rgba(0, 0, 0, 0.2);
}

[data-system-style="my-custom-theme"] [data-action="maximize"] {
  background: #22c55e;
  border: 1px solid rgba(0, 0, 0, 0.2);
}

[data-system-style="my-custom-theme"] .terminal-btn:hover:not(:disabled) {
  filter: brightness(1.15);
}

/* ── Scroll area ───────────────────────────────────── */
[data-system-style="my-custom-theme"] .window-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 4px;
}

/* ── Dark mode overrides ───────────────────────────── */
@media (prefers-color-scheme: dark) {
  [data-system-style="my-custom-theme"] .window-header {
    background: rgba(10, 10, 14, 0.98);
  }
}
`;
