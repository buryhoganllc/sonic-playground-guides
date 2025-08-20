/* ===================================================== */
/* theme.css – Global resets, typography, footer, toggle */
/* ===================================================== */

/* Global Reset & Box Model */
*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

body {
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Inter, Helvetica, Arial, sans-serif;
  line-height: 1.6;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* ========================= */
/* Footer – consolidated     */
/* ========================= */
.site-footer {
  margin: 0;
  padding: 1rem;
  background: var(--card);
  border-top: 1px solid var(--border);
  box-shadow: var(--shadow);
  position: relative; /* container for absolute docking */
  z-index: 1;          /* ensures footer content layers cleanly */
}

.site-footer hr {
  margin: 0 0 0.5rem;
}

.site-footer p {
  margin: 0.5rem 0;
}

/* ================================= */
/* Theme toggle – class‑driven states*/
/* ================================= */
#theme-toggle {
  margin: 0;
  display: inline-block; /* prevents full-width stretching */
  z-index: 2147483647;    /* max practical value to stay on top */
  pointer-events: auto;   /* ensure clickability even over overlays */
  transition:
    bottom 0.25s ease,
    right 0.25s ease,
    transform 0.25s ease;
}

/* Floating (default) */
#theme-toggle.floating {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
}

/* Docked inside footer */
#theme-toggle.docked {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}

/* Optional: subtle hover lift */
#theme-toggle:hover {
  transform: scale(1.05);
}

/* ========================= */
/* Pointer-event hardening   */
/* ========================= */
.site-footer::before,
.site-footer::after {
  pointer-events: none; /* avoids invisible blockers */
}

/* ========================= */
/* Visual styles for button  */
/* ========================= */
/* Keep actual colors/borders/themes in theme-toggle.css */
