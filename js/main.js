/*Sonido - Click*/
let sound = new Audio();
sound.src = "./sounds/click1.mp3";


/*Menú Navbar - X*/
let menu = document.querySelector("#menu-icon");
menu.onclick = () => {
    menu.classList.toggle("bx-x");
}


/*Skills - Close*/
let skillsclose = document.querySelector("#skills_close");

skillsclose.onclick = () => {
    skillsclose.classList.toggle("bx-chevron-up");
}


/*Tooltip - Skills*/
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

/*Carrucel - Proyectos*/
$('.carousel').carousel({
  interval: 2000
})