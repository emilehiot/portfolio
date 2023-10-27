document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav li a, .btn.hire-me");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const sections = document.querySelectorAll(".section");
      const currentActive = document.querySelector(".section.active");
      const backSection = document.querySelector(".section.back-section");
      const targetId = event.target.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (backSection) {
        backSection.classList.remove("back-section");
        backSection.classList.add("hidden");
      }

      if (currentActive) {
        currentActive.classList.remove("active");
        currentActive.classList.add("back-section");
      }

      if (targetSection) {
        targetSection.classList.remove("back-section", "hidden");
        targetSection.classList.add("active");
      }

      // classe .active pour la nav-link
      navLinks.forEach((link) => link.classList.remove("active"));

      if (event.target.classList.contains("hire-me")) {
        const contactNavLink = document.querySelector(
          '.nav li a[href="#contact"]'
        );
        if (contactNavLink) {
          contactNavLink.classList.add("active");
        }
      } else {
        event.target.classList.add("active");
      }
    });
  });
});
