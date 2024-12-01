/* Menu Backdrop */
const listItem = document.querySelectorAll("#landing-header nav.menu li");
const menuBackdrop = document.querySelector("#menu-backdrop") as HTMLElement;

listItem.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    const { left, top, width, height } = item.getBoundingClientRect();

    menuBackdrop.style.setProperty("--left", `${left}px`);
    menuBackdrop.style.setProperty("--top", `${top}px`);
    menuBackdrop.style.setProperty("--width", `${width}px`);
    menuBackdrop.style.setProperty("--height", `${height}px`);

    menuBackdrop.style.opacity = "1";
    menuBackdrop.style.visibility = "visible";
  });
});

listItem.forEach((item) => {
  item.addEventListener("mouseleave", () => {
    menuBackdrop.style.opacity = "0";
    menuBackdrop.style.visibility = "hidden";
  });
});

function toggleHeaderClass() {
  const header = document.getElementById("landing-header");
  header?.classList.toggle("down", window.scrollY > 0);
}
window.addEventListener("load", toggleHeaderClass);
window.addEventListener("scroll", toggleHeaderClass);

/* Observer backgruond color */
/* const header = document.querySelector("#landing-header") as HTMLElement;
const sections = document.querySelectorAll(".landing-section");
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const { isIntersecting } = entry;
    if (isIntersecting) {
      const color = entry.target.getAttribute("data-header-color") as string;
      header.style.color = color;
    }
  });
}, observerOptions);
sections.forEach((section) => observer.observe(section)); */
