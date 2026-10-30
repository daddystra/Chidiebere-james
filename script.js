document.addEventListener("DOMContentLoaded", () => {
  // MOBILE MENU
  const menuButton = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-links");

  if (menuButton && navMenu) {
    menuButton.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("active");

      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
      );
    });

    // Close menu after clicking a navigation link
    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open menu");
      });
    });
  }

  // SMOOTH SCROLLING
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // FOOTER YEAR
  const yearElement = document.querySelector("#year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // PROJECT CARD INTERACTIONS
  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", (event) => {
      // Allow normal link navigation
      if (event.target.closest("a, button")) return;

      card.classList.toggle("selected");
    });
  });
});