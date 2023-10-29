// - Gestion des transitions entre les sections du site :
// - Animation fluide des slides entre les pages via les classes css.
// - La page précédemment active reste en arrière-plan, laissant place à la nouvelle page sélectionnée.
// - Mise à jour de l'indication de la section active dans la navigation :
//   . Classe 'active' ajoutée au lien de la section actuellement visible.
//   . Classe 'back-section' ajoutée à la section précédemment active.
//   . Classe 'hidden' ajoutée aux autres sections pour les masquer.

// attendre que le DOM soit complètement chargé
document.addEventListener("DOMContentLoaded", () => {
  // sélectionne tous les liens dans la navigation et le bouton "Contactez-moi" de la page "A Propos"
  const navLinks = document.querySelectorAll(".nav li a, .btn.hire-me");

  // itérer sur chaque lien
  navLinks.forEach((link) => {
    // événements pour le clic
    link.addEventListener("click", (event) => {
      // empêcher le comportement par défaut du lien
      event.preventDefault();

      // sélectionne toutes les sections, la section active et la section précédemment active
      const sections = document.querySelectorAll(".section");
      const currentActive = document.querySelector(".section.active");
      const backSection = document.querySelector(".section.back-section");

      // obtenir l'ID de la section cible à partir de l'attribut href du lien
      const targetId = event.target.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      // si une section était active précédemment, la masquer
      if (backSection) {
        backSection.classList.remove("back-section");
        backSection.classList.add("hidden");
      }

      // si une section est actuellement active, la marquer comme la section précédemment active
      if (currentActive) {
        currentActive.classList.remove("active");
        currentActive.classList.add("back-section");
      }

      // si la section cible existe, la marquer comme active
      if (targetSection) {
        targetSection.classList.remove("back-section", "hidden");
        targetSection.classList.add("active");
      }

      // retire la classe .active de tous les liens
      navLinks.forEach((link) => link.classList.remove("active"));

      // si le bouton "Contactez-moi" a été cliqué, marquer le lien de contact comme actif
      // sinon, marquer le lien cliqué comme actif
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

// - Gestion du menu burger pour les petits écrans :
// - Ouverture et fermeture du menu via le bouton toggle
// - Fermeture du menu lorsqu'un lien de navigation est cliqué

// basculer l'affichage du menu
function toggleMenu() {
  // sélection du bouton de basculement et du menu
  const navToggler = document.querySelector(".nav-toggler");
  const menu = document.querySelector(".aside");

  // basculer les classes pour changer l'état d'affichage
  navToggler.classList.toggle("open");
  menu.classList.toggle("visible");
}

// événement click au bouton de basculement pour basculer le menu
document.querySelector(".nav-toggler").addEventListener("click", toggleMenu);

// sélectionne tous les liens de navigation
const navLinks = document.querySelectorAll(".nav li a");
// parcourir chaque lien et attacher un gestionnaire d'événement click
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
