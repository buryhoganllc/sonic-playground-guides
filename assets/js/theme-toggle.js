// THEME TOGGLE FUNCTIONALITY
const themeToggle = document.getElementById("theme-toggle");

themeToggle.onclick = function () {
  const html = document.documentElement;
  let theme = html.getAttribute("data-theme");
  theme = theme === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};

window.onload = function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }
  // Run initial docking logic once page loads
  repositionToggle();
};

// FLOAT + DOCK BEHAVIOR
const footer = document.querySelector(".site-footer");

function repositionToggle() {
  if (!themeToggle || !footer) return;

  const footerRect = footer.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  if (footerRect.top < viewportHeight - themeToggle.offsetHeight - 16) {
    // Footer in view → dock inside footer
    themeToggle.style.position = "absolute";
    themeToggle.style.bottom = "1rem";
    themeToggle.style.right = "1rem";
  } else {
    // Footer not in view → float on screen
    themeToggle.style.position = "fixed";
    themeToggle.style.bottom = "1rem";
    themeToggle.style.right = "1rem";
  }
}

// Recalculate on scroll and resize
window.addEventListener("scroll", repositionToggle);
window.addEventListener("resize", repositionToggle);
