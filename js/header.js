const header = document.querySelector(".header");
const menuBtn = document.querySelector(".header__menu-btn");
const navLinks = document.querySelectorAll(".header__nav a");

menuBtn.addEventListener("click", () => {
    header.classList.toggle("menu-active");
    document.body.classList.toggle("menu-open");

    const menuIsOpen = header.classList.contains("menu-active");

    menuBtn.setAttribute(
        "aria-label",
        menuIsOpen ? "Cerrar menú" : "Abrir menú"
    );
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        header.classList.remove("menu-active");
        document.body.classList.remove("menu-open");
        menuBtn.setAttribute("aria-label", "Abrir menú");
    });
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 700) {
        header.classList.remove("menu-active");
        document.body.classList.remove("menu-open");
        menuBtn.setAttribute("aria-label", "Abrir menú");
    }
});