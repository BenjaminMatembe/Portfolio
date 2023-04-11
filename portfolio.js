const hambergerMenuOpen = document.querySelector('.box');

const menu = document.querySelector('.menuBar');

const menuLinks = document.querySelectorAll('.menuLinks');

const closeMenu = document.querySelector('.closeMenu');

menuLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    menu.style.display = 'none';
    e.stopPropagation();
  });
});

hambergerMenuOpen.addEventListener('click', (e) => {
  menu.style.display = 'block';
  e.stopPropagation();
});

closeMenu.addEventListener('click', (e) => {
  menu.style.display = 'none';
  e.stopPropagation();
});
