// Navigation fluide entre les sections et mise en surbrillance du lien cliqué
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav li a');

  navLinks.forEach(link => {
      link.addEventListener('click', event => {
          event.preventDefault();  // Empêche le comportement de navigation par défaut

          const currentActive = document.querySelector('.section.active');
          if (currentActive) {
              currentActive.classList.remove('active');
              currentActive.classList.add('back-section');
          }

          const targetId = event.target.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);
          if (targetSection) {
              targetSection.classList.remove('back-section');
              targetSection.classList.add('active');
          }

          navLinks.forEach(link => link.classList.remove('active'));  // Supprime la classe active de tous les liens
          event.target.classList.add('active');  // Ajoute la classe active au lien cliqué
      });
  });
});
