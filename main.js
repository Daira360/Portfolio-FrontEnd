/*Sonido - Click*/
let sound = new Audio();
sound.src = "./sounds/click1.mp3";

/*Sonido - Gato*/
let soundcat = new Audio();
soundcat.src = "./sounds/cat_1.mp3";


/*Ventana*/
$(document).ready(function () {

    function showLogin(){
        $('.login').addClass('show');
        $('.container-login').addClass('show');
    }

    $("#close").click(function(){
        $('.login').removeClass('show');
        $('.container-login').removeClass('show');
    });

    $(".btn-abrir").click(showLogin);

    setTimeout(showLogin, 2000);

});