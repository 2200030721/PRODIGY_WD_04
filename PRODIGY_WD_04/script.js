document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            navLinks.forEach(function(link) {
                link.classList.remove("active");
            });

            this.classList.add("active");
        });
    });
});
