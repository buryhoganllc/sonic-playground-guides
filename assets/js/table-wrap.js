// assets/js/table-wrap.js
// Auto-wrap Markdown tables in a scrollable .table-wrapper (no plugins needed)

(function () {
  const SCOPE_SELECTORS = [".markdown-body", ".site-main"]; // pick what's present
  const WRAP_CLASS = "table-wrapper";

  function wrapTable(table) {
    if (!(table instanceof Element)) return;
    if (table.closest("." + WRAP_CLASS)) return; // already wrapped
    if (table.hasAttribute("data-no-wrap")) return; // opt-out

    const wrapper = document.createElement("div");
    wrapper.className = WRAP_CLASS;

    // Accessibility: label the scroll region using caption if available
    let label = "Scrollable table";
    const caption = table.querySelector("caption");
    if (caption && caption.textContent.trim())
      label = caption.textContent.trim();
    wrapper.setAttribute("role", "region");
    wrapper.setAttribute("aria-label", label);
    wrapper.tabIndex = 0;

    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  }

  function wrapAllInScope(root) {
    root.querySelectorAll("table").forEach(wrapTable);
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Wrap all existing tables
    const scopes = SCOPE_SELECTORS.map((sel) =>
      document.querySelector(sel)
    ).filter(Boolean);

    if (scopes.length === 0) {
      wrapAllInScope(document); // fallback: entire document
    } else {
      scopes.forEach(wrapAllInScope);
      // Observe future tables (e.g., async content)
      const moConfig = { childList: true, subtree: true };
      const observer = new MutationObserver((mutations) => {
        for (const m of mutations) {
          for (const node of m.addedNodes) {
            if (!(node instanceof Element)) continue;
            if (node.matches("table")) wrapTable(node);
            node.querySelectorAll?.("table").forEach(wrapTable);
          }
        }
      });
      scopes.forEach((s) => observer.observe(s, moConfig));
    }
  });
})();
