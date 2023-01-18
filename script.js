/*Login*/
const loginOpen = document.querySelector('.login-open');
const login = document.querySelector('.login');
const loginClose = document.querySelector('.login-close');

loginOpen.addEventListener('click', (e)=>{
    e.preventDefault();
    login.classList.add('login-show');
});

loginClose.addEventListener('click', (e)=>{
    e.preventDefault();
    login.classList.remove('login-show');
});



/*Sonido - Click*/
let sound = new Audio();
sound.src = "./sounds/click1.mp3";

/*Sonido - Gato*/
let soundcat = new Audio();
soundcat.src = "./sounds/cat_1.mp3";