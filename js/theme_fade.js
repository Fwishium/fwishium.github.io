const fade = document.getElementById("themeFade");

toggle.addEventListener("change", () => {
  fade.classList.add("active");

  setTimeout(() => {
    if (toggle.checked) {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }

    // fade back out slightly slower = smoother
    setTimeout(() => {
      fade.classList.remove("active");
    }, 150);

  }, 180);
});