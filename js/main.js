// - Animation fluide des slides entre les pages (voir css l.61).
// - La page précédemment active reste en arrière-plan, laissant place à la nouvelle page sélectionnée.
// - Mise à jour de l'indication de la section active dans la navigation

document.addEventListener("DOMContentLoaded", () => {
  // Récupération des liens de navigation et du bouton "Contactez-moi"
  const navLinks = document.querySelectorAll(".nav li a, .btn.hire-me");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      // Sélection des sections (lol) et la section active
      const sections = document.querySelectorAll(".section");
      const currentActive = document.querySelector(".section.active");
      const backSection = document.querySelector(".section.back-section");

      // Récupération de l'ID de la cible via son href
      const targetId = event.target.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      // Si une section était active précédemment, on la masque
      if (backSection) {
        backSection.classList.remove("back-section");
        backSection.classList.add("hidden");
      }

      // Si une section est actuellement active, on la marque comme la section précédente
      if (currentActive) {
        currentActive.classList.remove("active");
        currentActive.classList.add("back-section");
      }

      // Si la section cible existe, on la marque comme active
      if (targetSection) {
        targetSection.classList.remove("back-section", "hidden");
        targetSection.classList.add("active");
      }

      // Retire la classe .active de tous les liens
      navLinks.forEach((link) => link.classList.remove("active"));

      // Si le bouton "Contactez-moi" a été cliqué, on ajoute active sur l'aside contact
      if (event.target.classList.contains("hire-me")) {
        const contactNavLink = document.querySelector(
          '.nav li a[href="#contact"]'
        );
        if (contactNavLink) {
          contactNavLink.classList.add("active");
        }
      } else {  // Sinon, on marque le lien cliqué comme actif
        event.target.classList.add("active");
      }
    });
  });
});

// - Gestion du menu burger pour les petits écrans :
// - Ouverture et fermeture du menu via le bouton toggle
// - Fermeture du menu lorsqu'un lien de navigation est cliqué

function toggleMenu() {
  // sélection du bouton de basculement et du menu
  const navToggler = document.querySelector(".nav-toggler");
  const menu = document.querySelector(".aside");

  // basculer les classes pour changer l'état d'affichage
  navToggler.classList.toggle("open");
  menu.classList.toggle("visible");
}

// événement click au bouton de basculement pour basculer (lol) le menu
document.querySelector(".nav-toggler").addEventListener("click", toggleMenu);

// sélectionne tous les liens de navigation
const navLinks = document.querySelectorAll(".nav li a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // sélection du menu
    const menu = document.querySelector(".aside");
    // vérifie si le menu est ouvert, si oui, bascule le menu pour le fermer
    if (menu.classList.contains("visible")) {
      toggleMenu();
    }
  });
});
