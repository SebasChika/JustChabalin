
let out = document.getElementById("out");
let logo = document.getElementById("logo");
let logros = JSON.parse(localStorage.getItem("logros"));
let miniGames = document.getElementById("miniGames");
miniGames.addEventListener("click", irMinigames);
let textoLogro = document.getElementById("textoLogro");
let contextoLogro = document.getElementById("contextoLogro");
miniGames.addEventListener("mouseenter", hoverr);
logo.addEventListener("click", irMenu);
let negro = document.getElementById("negro");
let btnHoverSound = document.getElementById("btnHoverSound");
let libroChabal = document.getElementById("libroChabal");
let tiendaChabal = document.getElementById("llave");
let rincon = document.getElementById("rincon");
llave.addEventListener("click", irTienda);
llave.addEventListener("mouseenter", hoverr);
rincon.addEventListener("mouseenter", hoverr);
rincon.addEventListener("click", irRincon);
libroChabal.addEventListener("mouseenter", hoverr);
out.volume = 0.3;
a = 0.3;
let pajaro = document.getElementById("pajaro");
libroChabal.addEventListener("click", volver);

function hoverr() {
    playHoverSound();
}

function volver() {
    negro.classList.remove("fadeOutNegro");
    negro.classList.add("fadeInNegro");

    const fade = setInterval(() => {

        a -= 0.05;

        if (a <= 0) {
            out.volume = 0;
            clearInterval(fade);
            irSiguiente();
            return;
        }

        out.volume = a;

    }, 300);

}

function irMinigames() {
    negro.classList.remove("fadeOutNegro");
    negro.classList.add("fadeInNegro");

    const fade = setInterval(() => {

        a -= 0.05;

        if (a <= 0) {
            out.volume = 0;
            clearInterval(fade);
            irSiguienterres();
            return;
        }

        out.volume = a;

    }, 300);
}

function irSiguienterres() {
    window.location.href = "minigames.html";
}

function irMenu() {
    negro.classList.remove("fadeOutNegro");
    negro.classList.add("fadeInNegro");

    const fade = setInterval(() => {

        a -= 0.05;

        if (a <= 0) {
            out.volume = 0;
            clearInterval(fade);
            irSiguienterr();
            return;
        }

        out.volume = a;

    }, 300);
}

function irSiguienterr() {
    window.location.href = "index.html";
}

function irSiguienterrr() {
    window.location.href = "tiendaChabal.html";
}

function irTienda() {
    negro.classList.remove("fadeOutNegro");
    negro.classList.add("fadeInNegro");

    const fade = setInterval(() => {

        a -= 0.05;

        if (a <= 0) {
            out.volume = 0;
            clearInterval(fade);
            irSiguienterrr();
            return;
        }

        out.volume = a;

    }, 300);
}
function irRincon() {
    negro.classList.remove("fadeOutNegro");
    negro.classList.add("fadeInNegro");

    const fade = setInterval(() => {

        a -= 0.05;

        if (a <= 0) {
            out.volume = 0;
            clearInterval(fade);
            irSiguienter();
            return;
        }

        out.volume = a;

    }, 300);
}

function irSiguienter() {
    window.location.href = "rinconChabal.html";
}


function playHoverSound() {
    const sonido = btnHoverSound.cloneNode();
    sonido.volume = btnHoverSound.volume;
    sonido.play();
}

function irSiguiente() {
    window.location.href = "ChabalinPedia.html";
}

function iniciar() {
    out.play();
    if (logros[0].desbloqueado != true) {
        textoLogro.innerHTML = logros[0].nombre;
        contextoLogro.innerHTML = logros[0].descripcion;
        logro.play();
        archivement.classList.add("logro");
        setTimeout(() => {
            logro.play();
            archivement.classList.remove("logro");
            archivement.classList.add("logroOut");
            logros[0].desbloqueado = true;
            localStorage.setItem("logros", JSON.stringify(logros));
        }, 3000)
    }
    negro.classList.add("fadeOutNegro");

    pajaro.classList.add("volarBird");

    setInterval(() => {
        pajaro.classList.remove("volarBird");

        setTimeout(() => {
            pajaro.classList.add("volarBird");
        }, 100);

    }, 18000);
}



window.addEventListener("load", iniciar);