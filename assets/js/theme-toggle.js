document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const footer = document.querySelector(".site-footer");

  // ===== THEME SWITCHING =====
  themeToggle.addEventListener("click", function () {
    const html = document.documentElement;
    let theme = html.getAttribute("data-theme");
    theme = theme === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  });

  // Restore saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }

  // ===== FLOAT / DOCK LOGIC =====
  function updateTogglePosition() {
    if (!themeToggle || !footer) return;

    const footerRect = footer.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    if (footerRect.top < viewportHeight - themeToggle.offsetHeight - 16) {
      // Footer in view → docked
      themeToggle.classList.remove("floating");
      themeToggle.classList.add("docked");
    } else {
      // Footer not in view → floating
      themeToggle.classList.remove("docked");
      themeToggle.classList.add("floating");
    }
  }

  window.addEventListener("scroll", updateTogglePosition);
  window.addEventListener("resize", updateTogglePosition);

  // Initial check
  updateTogglePosition();
});
