document.addEventListener("DOMContentLoaded", function () {
    // Toggle Navigation Menu
    const menuButton = document.querySelector(".hamburger");
    const menu = document.querySelector(".nav-links");

    menuButton.addEventListener("click", function () {
        menu.classList.toggle("show");
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
            menu.classList.remove("show");
        });
    });
});
