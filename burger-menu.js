const burger = document.getElementById('burger');
const burgerMenu = document.querySelector('.burger-disabled');

burger.addEventListener('click', () => {
    burgerMenu.classList.toggle('burger-disabled');
})