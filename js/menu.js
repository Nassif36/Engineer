var menu = document.querySelector('.barra');
var menuBtn = document.querySelector(".barra button");

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('opened');
});
var menuLink = document.querySelectorAll(".nav_links li");
menuLink.forEach(menuLink => menuLink.addEventListener('click', () => {
    menu.classList.toggle('opened');
}));