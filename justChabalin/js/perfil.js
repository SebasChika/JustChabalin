let negro = document.getElementById("negro");
let volver = document.getElementById("volver");
let barraProgreso = document.getElementById("labelProgreso");
let chabalinesDescubiertos = 0;
let anchoProgreso = 0;
let mayor = 0;
let carnadaFavorita = document.getElementById("cambiarImgCarnada");
let progreso = document.getElementById("progreso");
volver.addEventListener("click", volverMenu);
let cantidadUsada = document.getElementById("cantidad");
let a = 0.5;
let dineroBase = JSON.parse(localStorage.getItem("dinero"));
let dineroHTML = document.getElementById("dineroHTML");
let tarjetas = document.querySelectorAll("#cuadricula .tarjeta");
let birds = [
    bird1,
    bird2,
    bird3,
    bird4,
    bird5,
    bird6,
    bird7,
    bird8,
    bird9,
    bird10,
    bird11,
    bird12,
    bird13,
    bird14,
    bird15,
    bird16,
    bird17,
    bird18,
    bird19,
    bird20,
    bird21,
    bird22,
    bird23,
    bird24,
    bird25,
    bird26,
    bird27,
    bird28,
    bird29,
    bird30,
];

let datos = JSON.parse(localStorage.getItem("aves"));


function iniciar() {
    dineroHTML.innerHTML = dineroBase;
    let cantidadCarnita = 0;
    for (let i = 0; i <= 29; i++) {
        if (datos[i].carnadaUsada > mayor) {
            mayor = i + 1;
            cantidadCarnita = datos[i].carnadaUsada;
        }
        console.log("mayor: " + mayor);
    }
    carnadaFavorita.src = "imagenes/tienda/l0_sprite_" + mayor + ".png";
    cantidadUsada.innerHTML = "usado "+cantidadCarnita+" veces";

    for (let i = 0; i <= 29; i++) {
        if (datos[i].capturada == true) {
            chabalinesDescubiertos++;
            anchoProgreso = anchoProgreso + 3.33;
            progreso.style.setProperty("width", anchoProgreso + "%", "important");
            barraProgreso.innerHTML = "progreso: " + chabalinesDescubiertos + "/30 chabalines"
        }
    }
    for (let i = 0; i <= 29; i++) {
        let nombre = tarjetas[i].querySelector("h2");
        if (datos[i].capturada == false) {
            birds[i].style.filter = "brightness(0)";
            nombre.textContent = "desconocido\n??";
        } else {
            nombre.textContent = "chabalin\n" + datos[i].nombre;
        }
    }
    negro.classList.add("fadeOutNegro");
}


function volverMenu() {
    negro.classList.remove("fadeOutNegro");
    negro.classList.add("fadeInNegro");

    const fade = setInterval(() => {

        a -= 0.05;

        if (a <= 0) {
            //menuTheme.volume = 0;
            clearInterval(fade);
            irSiguiente();
            return;
        }

        //menuTheme.volume = a;

    }, 300);
}
function irSiguiente() {
    window.location.href = "menú.html";
}


const lenis = new Lenis({
    lerp: 0.07,
    smoothWheel: true
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


window.addEventListener("load", iniciar);