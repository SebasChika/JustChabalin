let bird = document.getElementById("bird");
let contador = document.getElementById("contador");

let clickNorma = document.getElementById("clickNormal");
clickNorma.addEventListener("click", clickNormal);

let clickAut = document.getElementById("clickAuto");
clickAut.addEventListener("click", clickAuto);

let clickGatun = document.getElementById("clickGatuno");
clickGatun.addEventListener("click", clickGatuno);

let clickGranj = document.getElementById("clickGranja");
clickGranj.addEventListener("click", clickGranja);

let clickCha = document.getElementById("clickChad");
clickCha.addEventListener("click", clickChad);

let clickGaraj = document.getElementById("clickGaraje");
clickGaraj.addEventListener("click", clickGaraje);

let clickX = document.getElementById("clickXXL");
clickX.addEventListener("click", clickXXL);

let clickFabri = document.getElementById("clickFabrica");
clickFabri.addEventListener("click", clickFabrica);

let clickU = document.getElementById("clickUwU");
clickU.addEventListener("click", clickUwU);

let clickCastill = document.getElementById("clickCastillo");
clickCastill.addEventListener("click", clickCastillo);

let clickJojo = document.getElementById("clickJojos");
clickJojo.addEventListener("click", clickJojos);

let negro = document.getElementById("negro");
const powers = document.querySelectorAll(".power");

let volverR = document.getElementById("volver");
volverR.addEventListener("click", volver);

bird.addEventListener("click", clickAve);
let sumador = document.getElementById("sumador");
let soundClicker = document.getElementById("soundClicker");
let money = document.getElementById("money");
let clickerTheme = document.getElementById("clickerTheme");
let moreMoney = document.getElementById("moreMoney");
clickerTheme.volume = 0.4;
a = 0.4;
let recompensaReclamada = false;
let monedasGanadas = 0;
let dinero = JSON.parse(localStorage.getItem("dinero"));

let añadirClick = 1;
let autoClick = 0;
let mas = 0;

setInterval(() => {
    if (autoClick > 0) {
        mas += autoClick;
        actualizarContador();
        volverNormal();
    }
}, 1000);

function actualizarContador() {
    contador.innerHTML = "<img src='imagenes/minijuegos/coin.png'>" + mas;
}


function playPopSound() {
    const sonido = soundClicker.cloneNode();
    sonido.volume = soundClicker.volume;
    sonido.play();
}

function reclamarRecompensa() {

    if (recompensaReclamada) return;

    monedasGanadas = Math.floor(mas / 100);

    if (monedasGanadas > 50) {
        monedasGanadas = 50;
    }

    moreMoney.innerHTML = !"+" + monedasGanadas + "<img src='imagenes/minijuegos/coin.png'>";
    moreMoney.classList.add("gettinMoney");
    money.play();

    recompensaReclamada = true;

    dinero += monedasGanadas;
    localStorage.setItem("dinero", JSON.stringify(dinero));
}

function clickAve() {
    playPopSound();
    bird.classList.remove("bumpp");
    void bird.offsetWidth;
    bird.classList.add("bumpp");

    mas += añadirClick;

    actualizarContador();
    mostrarSumador();
    volverNormal();
}

function mostrarSumador() {
    const suma = document.createElement("p");

    suma.className = "sumador";
    suma.textContent = "+" + añadirClick;

    suma.style.left = (55 + Math.random() * 15) + "%";
    suma.style.bottom = (100 + Math.random() * 30) + "px";

    document.getElementById("thisSide").appendChild(suma);
    suma.addEventListener("animationend", () => {
        suma.remove();
    });
}


function clickAuto() {
    if (clickAut.bloqueado) return;

    mas -= 75;
    autoClick++;

    actualizarContador();
    volverNormal();
}

function clickNormal() {
    if (clickNorma.bloqueado) return;

    mas -= 10;
    añadirClick++;

    actualizarContador();
    volverNormal();
}

function clickGatuno() {
    if (clickGatun.bloqueado) return;

    mas -= 300;
    añadirClick += 5;

    actualizarContador();
    volverNormal();
}

function clickGranja() {
    if (clickGranj.bloqueado) return;

    mas -= 1200;
    autoClick += 6;

    actualizarContador();
    volverNormal();
}

function clickChad() {
    if (clickCha.bloqueado) return;

    mas -= 8000;
    añadirClick += 100;

    actualizarContador();
    volverNormal();
}

function clickGaraje() {
    if (clickGaraj.bloqueado) return;

    mas -= 30000;
    autoClick += 100;

    actualizarContador();
    volverNormal();
}

function clickXXL() {
    if (clickX.bloqueado) return;

    mas -= 200000;
    añadirClick += 1000;

    actualizarContador();
    volverNormal();
}

function clickFabrica() {
    if (clickFabri.bloqueado) return;

    mas -= 800000;
    autoClick += 1000;

    actualizarContador();
    volverNormal();
}

function clickUwU() {
    if (clickU.bloqueado) return;

    mas -= 3000000;
    añadirClick += 5000;

    actualizarContador();
    volverNormal();
}

function clickCastillo() {
    if (clickCastill.bloqueado) return;

    mas -= 12000000;
    autoClick += 6000;

    actualizarContador();
    volverNormal();
}

function clickJojos() {
    if (clickJojo.bloqueado) return;

    mas -= 100000000;
    añadirClick += 100000;

    actualizarContador();
    volverNormal();
}

function volverNormal() {
    for (let i = 0; i < powers.length; i++) {
        let dineroCarta = Number(powers[i].querySelector(".price").textContent.trim());

        if (mas >= dineroCarta) {
            powers[i].style.filter = "brightness(1)";
            powers[i].bloqueado = false;
        } else {
            powers[i].style.filter = "brightness(0)";
            powers[i].bloqueado = true;
        }
    }
}

function volver() {

    reclamarRecompensa();

    setTimeout(() => {
        negro.classList.remove("fadeOutNegro");
        negro.classList.add("fadeInNegro");

        const fade = setInterval(() => {

            a -= 0.05;

            if (a <= 0) {
                clickerTheme.volume = 0;
                clearInterval(fade);
                window.location.href = "minigames.html";
                return;
            }

            clickerTheme.volume = a;

        }, 300);

    }, 2000)


}

function iniciar() {
    clickerTheme.play();
    for (let i = 0; i < powers.length; i++) {
        powers[i].style.filter = "brightness(0)";
        powers[i].bloqueado = true;
    }

    actualizarContador();
    negro.classList.add("fadeOutNegro");
}

window.addEventListener("load", iniciar);