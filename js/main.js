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

