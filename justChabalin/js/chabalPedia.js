let negro = document.getElementById("negro");
let chabalinesDescubiertos = 0;
let barraProgreso = document.getElementById("labelProgreso");
let anchoProgreso = 0;
let progreso = document.getElementById("progreso");
let actual;
let chabalBailando = document.getElementById("chabalBailando");
let noLoTienes = document.getElementById("noLoTienes");
noLoTienes.volume = 0.05;
let aparicion = document.getElementById("aparicion");
let mas = document.getElementById("mas");
mas.addEventListener("click", irMas);
let numero;
let nombre;
let rareza;
let Toprareza = document.getElementById("Toprareza");
let nameCard = document.getElementById("nameCard");
let volverr = document.getElementById("volver");
let tarjetas = document.querySelectorAll("#cuadricula .tarjeta");

for (let tarjeta of tarjetas) {
    tarjeta.addEventListener("click", nombrar);
}
let bailar = {
    "001": "imagenes/chabalinPedia/chabalinAnimation/1.gif",
    "002": "imagenes/chabalinPedia/chabalinAnimation/2.gif",
    "003": "imagenes/chabalinPedia/chabalinAnimation/3.gif",
    "004": "imagenes/chabalinPedia/chabalinAnimation/4.gif",
    "005": "imagenes/chabalinPedia/chabalinAnimation/5.gif",
    "006": "imagenes/chabalinPedia/chabalinAnimation/6.gif",
    "007": "imagenes/chabalinPedia/chabalinAnimation/7.gif",
    "008": "imagenes/chabalinPedia/chabalinAnimation/8.gif",
    "009": "imagenes/chabalinPedia/chabalinAnimation/9.gif",
    "010": "imagenes/chabalinPedia/chabalinAnimation/10.gif",
    "011": "imagenes/chabalinPedia/chabalinAnimation/11.gif",
    "012": "imagenes/chabalinPedia/chabalinAnimation/12.gif",
    "013": "imagenes/chabalinPedia/chabalinAnimation/13.gif",
    "014": "imagenes/chabalinPedia/chabalinAnimation/14.gif",
    "015": "imagenes/chabalinPedia/chabalinAnimation/15.gif",
    "016": "imagenes/chabalinPedia/chabalinAnimation/16.gif",
    "017": "imagenes/chabalinPedia/chabalinAnimation/17.gif",
    "018": "imagenes/chabalinPedia/chabalinAnimation/18.gif",
    "019": "imagenes/chabalinPedia/chabalinAnimation/19.gif",
    "020": "imagenes/chabalinPedia/chabalinAnimation/20.gif",
    "021": "imagenes/chabalinPedia/chabalinAnimation/21.gif",
    "022": "imagenes/chabalinPedia/chabalinAnimation/22.gif",
    "023": "imagenes/chabalinPedia/chabalinAnimation/23.gif",
    "024": "imagenes/chabalinPedia/chabalinAnimation/24.gif",
    "025": "imagenes/chabalinPedia/chabalinAnimation/25.gif",
    "026": "imagenes/chabalinPedia/chabalinAnimation/26.gif",
    "027": "imagenes/chabalinPedia/chabalinAnimation/27.gif",
    "028": "imagenes/chabalinPedia/chabalinAnimation/28.gif",
    "029": "imagenes/chabalinPedia/chabalinAnimation/29.gif",
    "030": "imagenes/chabalinPedia/chabalinAnimation/30.gif"
};
let bird1 = document.getElementById("bird1");
let bird2 = document.getElementById("bird2");
let bird3 = document.getElementById("bird3");
let bird4 = document.getElementById("bird4");
let bird5 = document.getElementById("bird5");
let bird6 = document.getElementById("bird6");
let bird7 = document.getElementById("bird7");
let bird8 = document.getElementById("bird8");
let bird9 = document.getElementById("bird9");
let bird10 = document.getElementById("bird10");
let bird11 = document.getElementById("bird11");
let bird12 = document.getElementById("bird12");
let bird13 = document.getElementById("bird13");
let bird14 = document.getElementById("bird14");
let bird15 = document.getElementById("bird15");
let bird16 = document.getElementById("bird16");
let bird17 = document.getElementById("bird17");
let bird18 = document.getElementById("bird18");
let bird19 = document.getElementById("bird19");
let bird20 = document.getElementById("bird20");
let bird21 = document.getElementById("bird21");
let bird22 = document.getElementById("bird22");
let bird23 = document.getElementById("bird23");
let bird24 = document.getElementById("bird24");
let bird25 = document.getElementById("bird25");
let bird26 = document.getElementById("bird26");
let bird27 = document.getElementById("bird27");
let bird28 = document.getElementById("bird28");
let bird29 = document.getElementById("bird29");
let bird30 = document.getElementById("bird30");


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
]
let datos = JSON.parse(localStorage.getItem("aves"));
volverr.addEventListener("click", volver);

let menuTheme = document.getElementById("menuTheme");
let btnHoverSound = document.getElementById("btnHoverSound");
btnHoverSound.volume = 0.1;

let si = document.getElementsByClassName("tarjeta");
for (let elemento of si) {
    elemento.addEventListener("mouseenter", irFuncion);
}

menuTheme.volume = 0.5;
let a = 0.5;


function irMas() {
    actual = localStorage.getItem("actual").replace(/^0+/, "");
    actual = actual - 1;

    mas.classList.remove("incorrecto");

    if (datos[actual].capturada == false) {
        void mas.offsetWidth;
        dontHave();
        mas.classList.add("incorrecto");
    }
    else {
        negro.classList.remove("fadeOutNegro");
        negro.classList.add("fadeInNegro");

        const fade = setInterval(() => {

            a -= 0.05;

            if (a <= 0) {
                menuTheme.volume = 0;
                clearInterval(fade);
                irNext();
                return;
            }

            menuTheme.volume = a;

        }, 300);
    }
}

function irNext() {
    window.location.href = "descripcion.html";
}

function irFuncion() {
    playHoverSound();
}

function nombrar(e) {
    const tarjeta = e.currentTarget;

    numero = tarjeta.querySelector("p").textContent.slice(1);
    nombre = tarjeta.querySelector("h2").textContent;
    rareza = tarjeta.querySelector("div[id^='rareza']");

    localStorage.setItem("actual", numero);

    cambiarNombre();
}

function cambiarNombre() {
    playPopSound();
    actual = localStorage.getItem("actual").replace(/^0+/, "");
    actual = actual - 1;
    console.log(actual);
    if (datos[actual].capturada == true) {
        chabalBailando.style.filter = "brightness(1)";
    }
    else {
        chabalBailando.style.filter = "brightness(0)";
    }
    if (numero == 19) {
        chabalBailando.style.transform = ("scale(0.7)");
        chabalBailando.style.bottom = "-8px";
    }
    else {
        chabalBailando.style.transform = ("");
        chabalBailando.style.bottom = "";
    }
    chabalBailando.src = bailar[numero];
    nameCard.style.whiteSpace = "nowrap";
    nameCard.innerHTML = nombre;
    Toprareza.id = "Top" + rareza.id;
}


function playHoverSound() {
    const sonido = btnHoverSound.cloneNode();
    sonido.volume = btnHoverSound.volume;
    sonido.play();
}

function playPopSound() {
    const sonido = aparicion.cloneNode();
    sonido.volume = aparicion.volume;
    sonido.play();
}

function dontHave() {
    const sonido = noLoTienes.cloneNode();
    sonido.volume = noLoTienes.volume;
    sonido.play();
}

function iniciar() {
    localStorage.setItem("aves", JSON.stringify(datos));


    rollIn.volume = 0.5;
    localStorage.setItem("actual", "001");

    for (let i = 0; i <= 29; i++) {
        let nombre = tarjetas[i].querySelector("h2");

        if (datos[i].capturada == false) {
            birds[i].style.filter = "brightness(0)";
            nombre.textContent = "desconocido\n??";
        } else {
            nombre.textContent = "chabalin\n" + datos[i].nombre;
        }
    }

    for (let i = 0; i <= 29; i++) {
        if (datos[i].capturada == true) {
            chabalinesDescubiertos++;
            anchoProgreso = anchoProgreso + 3.33;
            progreso.style.setProperty("width", anchoProgreso + "%", "important");
            barraProgreso.innerHTML = "progreso: " + chabalinesDescubiertos + "/30 chabalines"
        }
    }

    menuTheme.play();
    negro.classList.add("fadeOutNegro");
    setTimeout(() => {
        rollIn.play();
    }, 2000)
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

function volver() {
    negro.classList.remove("fadeOutNegro");
    negro.classList.add("fadeInNegro");

    const fade = setInterval(() => {

        a -= 0.05;

        if (a <= 0) {
            menuTheme.volume = 0;
            clearInterval(fade);
            irSiguiente();
            return;
        }

        menuTheme.volume = a;

    }, 300);
}
function irSiguiente() {
    window.location.href = "menú.html";
}




window.addEventListener("load", iniciar);