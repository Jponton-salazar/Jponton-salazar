const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("nav-toggle_vissible");

    if (navMenu.classList.contains("nav-toggle_vissible")) {
        navToggle.setAttribute("aria-label", "cerrar menu");
    } else {
        navToggle.setAttribute("aria-label", "abrir menu")
    }
});