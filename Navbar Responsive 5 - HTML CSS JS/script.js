const menuToggle = document.getElementsByClassName('menu-toggle')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

menuToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})