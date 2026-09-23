let cuadricula = document.getElementById("cuadricula");
let concentSong = document.getElementById("concentSong");
let moreMoney = document.getElementById("moreMoney");
let dinero = JSON.parse(localStorage.getItem("dinero"));
let monie = 20;
let moni = document.getElementById("moni");
let yay = document.getElementById("yay");
let mix = document.getElementById("mix");
concentSong.volume = 0.3;
let point = document.getElementById("point");
cuadricula.addEventListener("click", elemento);
let negro = document.getElementById("negro");
let volver = document.getElementById("volver");
volver.addEventListener("click", volverMenu);
let a = 0.3;
let fichaSeleccionada;
let cantidadGanada = 0;
let imagenes = ["imagenes/minijuegos/primero.png", "imagenes/minijuegos/segundo.png", "imagenes/minijuegos/tercero.png", "imagenes/minijuegos/cuarto.png"];
let click = true;
let cartasClass = [];
let encontrado = false;
let arrayOrganizado = [];
let cantidadPrecionada = 0;
let parejas =
    [
        "15",
        "26",
        "37",
        "48",
        "51",
        "62",
        "73",
        "84"
    ];
let actualAdivinar = "";

function elemento(e) {
    if (click != true) return;
    mix.play();

    fichaSeleccionada = e.target.id;
    fichaHTML = e.target;

    let indice = (parseInt(fichaSeleccionada) - 1) % 4;
    fichaHTML.src = imagenes[indice];

    fichaHTML.classList.remove("devolver");
    fichaHTML.classList.add("rotarIn");
    cartasClass.push(fichaHTML);
    actualAdivinar += (fichaSeleccionada);
    console.log(actualAdivinar);
    if (cantidadPrecionada < 1) {
        cantidadPrecionada++;
    }
    else {
        for (let i = 0; i <= parejas.length; i++) {
            if (actualAdivinar == parejas[i]) {
                console.log("CORRECTO es: " + actualAdivinar);
                encontrado = true;
                click = false;
                reiniciar();
            }
        }
        if (!encontrado) {
            click = false;
            setTimeout(() => {
                nada();
            }, 1000)
        }
    }
};

function reiniciar() {
    cantidadGanada++;
    point.play();
    if (cantidadGanada == 4) {
        Ganaste();
    }
    console.log("adivinados:" + cantidadGanada);
    actualAdivinar = "";
    cartasClass = [];
    cantidadPrecionada = 0;
    setTimeout(() => {
        encontrado = false;
        click = true;
    }, 500);
}
function nada() {
    for (let i = 0; i < 2; i++) {
        cartasClass[i].classList.remove("rotarIn");
        cartasClass[i].classList.add("devolver");
        cartasClass[i].src = "imagenes/minijuegos/cartaConcentrate.png";
    }
    actualAdivinar = "";
    cartasClass = [];
    cantidadPrecionada = 0;
    console.log("no Es");
    setTimeout(() => {
        click = true;
    }, 500);
}

function Ganaste() {
    yay.play();
    setTimeout(() => {
        moreMoney.classList.add("gettinMoney");
        moni.play();
        monie = dinero + monie;
        localStorage.setItem("dinero", JSON.stringify(monie));
    }, 1000)
}


function volverMenu() {
    negro.classList.remove("fadeOutNegro");
    negro.classList.add("fadeInNegro");

    const fade = setInterval(() => {

        a -= 0.05;

        if (a <= 0) {
            concentSong.volume = 0;
            clearInterval(fade);
            window.location.href = "minigames.html";
            return;
        }

        concentSong.volume = a;


    }, 300);

}


function iniciar() {
    concentSong.play();
    negro.classList.add("fadeOutNegro");
    for (let i = 1; i <= 8; i++) {
        arrayOrganizado.push("<img id='" + i + "'src='imagenes/minijuegos/cartaConcentrate.png'>");
    }

    for (let i = arrayOrganizado.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayOrganizado[i], arrayOrganizado[j]] = [arrayOrganizado[j], arrayOrganizado[i]];
    }
    for (let i = 0; i < arrayOrganizado.length; i++) {
        cuadricula.innerHTML += arrayOrganizado[i];

    }


}
window.addEventListener("load", iniciar);