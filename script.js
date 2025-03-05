document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navItems = document.getElementById("navitems");

    menuToggle.addEventListener("click", function () {
        this.classList.toggle("active");
        navItems.classList.toggle("active");
    });

    // Close menu when clicking a link (mobile)
    document.querySelectorAll(".navitems ul li a").forEach(link => {
        link.addEventListener("click", function () {
            menuToggle.classList.remove("active");
            navItems.classList.remove("active");
        });
    });
});

console.log('hello')