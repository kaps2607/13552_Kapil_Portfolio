document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 50, // Adjust for fixed header
                    behavior: "smooth"
                });
            }
        });
    });

    // Hamburger menu for small screens
    const menu = document.querySelector(".nav-links");
    const menuButton = document.createElement("button");
    menuButton.innerHTML = "☰";
    menuButton.classList.add("hamburger");

    document.querySelector("nav").appendChild(menuButton);

    menuButton.addEventListener("click", function () {
        menu.classList.toggle("show");
    });
});
