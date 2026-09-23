let frivThing = document.getElementById("frivThing");
let volver = document.getElementById("volver");
volver.addEventListener("click", volverMenu);
let negro = document.getElementById("negro");
let selected = document.getElementById("selected");
let contador = 0;
let minigames = document.getElementById("minigames");
minigames.volume = 0.2;
let a = 0.2;
let game1 = document.getElementById("game1");
let game2 = document.getElementById("game2");
let game3 = document.getElementById("game3");
let game4 = document.getElementById("game4");
let game5 = document.getElementById("game5");
let game6 = document.getElementById("game6");
game6.addEventListener("click", gameSeis);
game5.addEventListener("click", gameCinco)
game4.addEventListener("click", gameCuatro);
game3.addEventListener("click", gameTres);
game2.addEventListener("click", gameDos);
game1.addEventListener("click", gameUno)

let textoLogro = document.getElementById("textoLogro");
let contextoLogro = document.getElementById("contextoLogro");
let logros = JSON.parse(localStorage.getItem("logros"));

function gameUno() {
    negro.classList.remove("fadeOutNegro");
    negro.classList.add("fadeInNegro");
    selected.play();

    const fade = setInterval(() => {

        a -= 0.05;

        if (a <= 0) {
            minigames.volume = 0;
            clearInterval(fade);
            irSiguiente();
            return;
        }

        minigames.volume = a;

    }, 300);
}

function gameSeis() {
    negro.classList.remove("fadeOutNegro");
    negro.classList.add("fadeInNegro");
    selected.play();

    const fade = setInterval(() => {

        a -= 0.05;

        if (a <= 0) {
            minigames.volume = 0;
            clearInterval(fade);
            window.location.href = "pescador.html";
            return;
        }

        minigames.volume = a;

    }, 300);
}

function gameCinco() {
    negro.classList.remove("fadeOutNegro");
    negro.classList.add("fadeInNegro");
    selected.play();

    const fade = setInterval(() => {

        a -= 0.05;

        if (a <= 0) {
            minigames.volume = 0;
            clearInterval(fade);
            window.location.href = "come.html";
            return;
        }

        minigames.volume = a;

    }, 300);
}

function gameDos() {
    negro.classList.remove("fadeOutNegro");
    negro.classList.add("fadeInNegro");
    selected.play();

    const fade = setInterval(() => {

        a -= 0.05;

        if (a <= 0) {
            minigames.volume = 0;
            clearInterval(fade);
            window.location.href = "clicker.html";
            return;
        }

        minigames.volume = a;

    }, 300);
}

function gameTres() {
    negro.classList.remove("fadeOutNegro");
    negro.classList.add("fadeInNegro");
    selected.play();

    const fade = setInterval(() => {

        a -= 0.05;

        if (a <= 0) {
            minigames.volume = 0;
            clearInterval(fade);
            window.location.href = "Timer.html";
            return;
        }

        minigames.volume = a;

    }, 300);
}

function gameCuatro() {
    negro.classList.remove("fadeOutNegro");
    negro.classList.add("fadeInNegro");
    selected.play();

    const fade = setInterval(() => {

        a -= 0.05;

        if (a <= 0) {
            minigames.volume = 0;
            clearInterval(fade);
            window.location.href = "Concentrate.html";
            return;
        }

        minigames.volume = a;

    }, 300);
}

function volverMenu() {
    negro.classList.remove("fadeOutNegro");
    negro.classList.add("fadeInNegro");

    const fade = setInterval(() => {

        a -= 0.05;

        if (a <= 0) {
            minigames.volume = 0;
            clearInterval(fade);
            irMenuVuelta();
            return;
        }

        minigames.volume = a;

    }, 300);

}

function irMenuVuelta() {
    window.location.href = "menú.html";
}

function irSiguiente() {
    window.location.href = "flappy.html";
}

function logo() {
    console.log(contador);
    if (contador === 0) {
        frivThing.style.filter = "brightness(1.6)";
        setTimeout(() => {
            frivThing.style.opacity = 0;
        }, 200);
        setTimeout(() => {
            frivThing.style.top = "0";
            frivThing.style.left = "0";
            frivThing.style.bottom = "";
            frivThing.style.right = "";
            contador = 1;
            frivThing.style.opacity = 1;
            frivThing.style.filter = "brightness(1)";
        }, 1000)
    } else {
        frivThing.style.filter = "brightness(1.6)";
        setTimeout(() => {
            frivThing.style.opacity = 0;
        }, 200);
        setTimeout(() => {
            frivThing.style.top = "";
            frivThing.style.left = "";
            frivThing.style.bottom = "0";
            frivThing.style.right = "0";
            contador = 0;
            frivThing.style.opacity = 1;
        }, 1000)

    }
}

function iniciar() {
    minigames.play();
    negro.classList.add("fadeOutNegro");
    if (logros[11].desbloqueado != true) {
        textoLogro.innerHTML = logros[11].nombre;
        contextoLogro.innerHTML = logros[11].descripcion;
        logro.play();
        archivement.classList.add("logro");
        setTimeout(() => {
            logro.play();
            archivement.classList.remove("logro");
            archivement.classList.add("logroOut");
            logros[11].desbloqueado = true;
            localStorage.setItem("logros", JSON.stringify(logros));
        }, 3000)
    }
}



window.addEventListener("load", iniciar);
frivThing.addEventListener("mouseenter", logo);