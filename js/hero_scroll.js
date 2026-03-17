const header = document.querySelector(".hero-background");

window.addEventListener("scroll", () => {
  const trigger = header.offsetHeight - 119.5;

  if (window.scrollY > trigger) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }
});