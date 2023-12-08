const hamburger = document.querySelector(".hamburger");
const themeToggle = document.querySelector(".theme");

hamburger.addEventListener("click", (e) => {
    hamburger.classList.toggle("open");
});

themeToggle.addEventListener("click", (e) => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    if (currentTheme === "light") {
        document.documentElement.setAttribute("data-theme", "dark");
        themeToggle.querySelector("iconify-icon").setAttribute("icon", "mingcute:moon-fill");
        sessionStorage.setItem("theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        themeToggle.querySelector("iconify-icon").setAttribute("icon", "mingcute:sun-fill");
        sessionStorage.setItem("theme", "light");
    }
});

window.addEventListener("DOMContentLoaded", (event) => {
    const savedTheme = sessionStorage.getItem("theme");
    if (savedTheme) {
        document.documentElement.setAttribute("data-theme", savedTheme);
        const icon = savedTheme === "dark" ? "mingcute:moon-fill" : "mingcute:sun-fill";
        themeToggle.querySelector("iconify-icon").setAttribute("icon", icon);
    }
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        document.querySelector("header").style.paddingBlock = "1rem";
    } else {
        document.querySelector("header").style.paddingBlock = "1.5rem";
    }
});
