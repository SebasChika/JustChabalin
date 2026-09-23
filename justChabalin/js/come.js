let kiwi = document.getElementById("hitBoxKiwi");
let kiwiSrc = document.getElementById("kiwi");
let kiwiHitbox;
let seed = document.getElementById("semilla");
let yumm = document.getElementById("yumm");
let puntaje = document.getElementById("puntaje");
let themee = document.getElementById("themee");
let moreMoney = document.getElementById("moreMoney");
let moni = document.getElementById("moni");
let monie = 20;
themee.volume = 0.5;
let a = 0.5;
let intervaloSemillas;
let volver = document.getElementById("volver");
volver.addEventListener("click", volverM);
let yay = document.getElementById("yay");
let hitboxSeed;
let puntos = 0;
let dinero = JSON.parse(localStorage.getItem("dinero"));
let posicionLeft = 0;

let derecha = false;
let izquierda = false;
let tocados = false;

function moverKiwii(e) {
    if (e.code === "ArrowRight") {
        derecha = true;

        if (!kiwiSrc.src.includes("runKiwi.gif")) {
            kiwiSrc.src = "imagenes/minijuegos/runKiwi.gif";
        }
    }

    if (e.code === "ArrowLeft") {
        izquierda = true;

        if (!kiwiSrc.src.includes("runKiwi.gif")) {
            kiwiSrc.src = "imagenes/minijuegos/runKiwi.gif";
        }
    }
}

function ponerOtra(e) {
    if (e.code === "ArrowRight") {
        derecha = false;
    }

    if (e.code === "ArrowLeft") {
        izquierda = false;
    }

    if (!derecha && !izquierda) {
        kiwiSrc.src = "imagenes/minijuegos/idleKiwii.gif";
    }
}

function mover() {
    if (derecha) {
        posicionLeft += 7;

        if (posicionLeft >= 450) {
            posicionLeft = 450;
        }

        kiwi.style.transform =
            `translateX(${posicionLeft}px) rotateY(180deg)`;
    }

    if (izquierda) {
        posicionLeft -= 7;

        if (posicionLeft <= -500) {
            posicionLeft = -500;
        }

        kiwi.style.transform =
            `translateX(${posicionLeft}px) rotateY(0deg)`;
    }
    comprobarToque();
    requestAnimationFrame(mover);
}

function volverM() {
    console.log("hi");
    negro.classList.remove("fadeOutNegro");
    negro.classList.add("fadeInNegro");

    const fade = setInterval(() => {

        a -= 0.05;

        if (a <= 0) {
            themee.volume = 0;
            clearInterval(fade);
            window.location.href = "minigames.html";
            return;
        }

        themee.volume = a;


    }, 300);

}


function comprobarToque() {
    hitboxSeed = seed.getBoundingClientRect();
    kiwiHitbox = kiwi.getBoundingClientRect();
    if (kiwiHitbox.left < hitboxSeed.right && kiwiHitbox.right > hitboxSeed.left && kiwiHitbox.top < hitboxSeed.bottom && kiwiHitbox.bottom > hitboxSeed.top
    ) {
        if (tocados) return;
        tocados = true;
        seed.classList.remove("bajarSeed");
        puntos++;
        yumm.play();
        puntaje.innerHTML = puntos;
        if (puntos === 20) {
            ganaste();
        }
        else {
            setTimeout(() => {
                tocados = false;
            }, 2000);
            console.log("TOCARON");
        }

    }
}

function ganaste() {
    yay.play();
    clearInterval(intervaloSemillas);
    moreMoney.classList.add("gettinMoney");
    moni.play();
    monie = dinero + monie;
    localStorage.setItem("dinero", monie);
}

function iniciar() {
    negro.classList.add("fadeOutNegro");
    themee.play();
    intervaloSemillas = setInterval(() => {
        let numeroRandom = Math.floor(Math.random() * 80) + 1;
        seed.classList.remove("bajarSeed");
        void seed.offsetWidth;
        seed.classList.add("bajarSeed");
        seed.style.left = numeroRandom + "%";

    }, 3200);
}

window.addEventListener("keydown", moverKiwii);
window.addEventListener("keyup", ponerOtra);
window.addEventListener("load", iniciar);

mover();