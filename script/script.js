const burgerContainer = document.querySelector('.burger-container');
const navLinks = document.querySelector('.nav-links');

burgerContainer.addEventListener('click', () => {
    burgerContainer.classList.toggle('active');
    navLinks.classList.toggle('active');
})