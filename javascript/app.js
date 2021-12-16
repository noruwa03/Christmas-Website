const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

if (menu) {
  menu.onclick = () => {
    menu.classList.toggle("active");
    nav.classList.toggle("active");
  };
}


window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})
