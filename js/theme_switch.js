const toggle = document.getElementById("themeToggle1");
const root = document.documentElement;
const fade = document.getElementById("themeFade");

// load saved theme
const saved = localStorage.getItem("theme");
if (saved === "dark") {
  root.setAttribute("data-theme", "dark");
  toggle.checked = true;
}

toggle.addEventListener("change", () => {
  // STEP 1: fade to black
  fade.classList.add("active");

  // STEP 2: wait until fully black
  setTimeout(() => {
    if (toggle.checked) {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }

    // STEP 3: fade back in
    fade.classList.remove("active");
  }, 350); // match CSS transition time
});