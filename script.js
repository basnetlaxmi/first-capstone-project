/* eslint-disable linebreak-style */
const openMenu = document.querySelector('.icon');
const mobMenu = document.querySelector('#navbarNavDropdown');
const closeIcon = document.querySelector('#close-ham-img');
const brand = document.querySelector('.navbar-brand');
const body = document.querySelector('body');
function show() {
  mobMenu.style.display = 'block';
  brand.style.display = 'none';
  body.classList.add('no-scroll');
}

function close() {
  mobMenu.style.display = 'none';
}

openMenu.addEventListener('click', show);
closeIcon.addEventListener('click', close);