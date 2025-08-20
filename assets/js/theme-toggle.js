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
};
