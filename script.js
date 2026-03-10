// Toggle mobile nav menu
const menuToggle = document.createElement('div');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = '&#9776;'; // hamburger menu icon
const nav = document.querySelector('nav');
const navLinks = document.querySelector('nav ul');
nav.appendChild(menuToggle);

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
