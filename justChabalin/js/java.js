let empezar = document.getElementById("empezar");
let perfil = document.getElementById("perfil");
let negro = document.getElementById("negro");
let si = document.getElementsByClassName("si");
for (let elemento of si) {
    elemento.addEventListener("click", irFuncion);
}

let a = 0.2;
let salir = document.getElementById("salir");
let chabalin = document.getElementById("chabalin");
let btnHoverSound = document.getElementById("btnHoverSound");
let menuTheme = document.getElementById("menuTheme");
let logo = document.getElementById("logo");
let menuConfirmado = document.getElementById("menuConfirmado");
menuTheme.volume = 0.2;
const audioContext = new AudioContext();
const source = audioContext.createMediaElementSource(menuTheme);
const analyser = audioContext.createAnalyser();

source.connect(analyser);
analyser.connect(audioContext.destination);

analyser.fftSize = 256;

const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
const nombres = [
    "Chocolatín", "Clásico", "Pio", "Bolita", "Manguito",
    "Azulin", "Kiwii", "Mulata", "Emo", "Quak",
    "Fueguin", "Colibrí", "Pescador", "Parrokil", "Mordecai",
    "Dinosaurio", "Gotico", "Shiny", "Gei", "Real",
    "Rosito", "Cantante", "Shy", "Buhinwai", "Gomina",
    "Damn", "Tranquilo", "Red", "Cubico", "Ana"
];

let aves = JSON.parse(localStorage.getItem("aves"));
let dinero = JSON.parse(localStorage.getItem("dinero"));
let logros = JSON.parse(localStorage.getItem("logros"));

if (!aves) {
    aves = {};

    for (let i = 0; i < nombres.length; i++) {
        aves[i] = {
            nombre: nombres[i],
            rareza:
                i <= 5 ? "común" :
                    i <= 10 ? "raro" :
                        i <= 17 ? "legendario" :
                            i <= 29 ? "mítico" :
                                "único",
            capturada: false,
            cantidad: 0,
            favorito: false,
            carnadaCantidad: 0,
            carnadaUsada: 0

        };

    }
    localStorage.setItem("aves", JSON.stringify(aves));
}
localStorage.setItem("aves", JSON.stringify(aves));

if (localStorage.getItem("dinero") === null) {
    localStorage.setItem("dinero", 0);
}



const LogrosNombres = [
    "Bienvenido, yo",
    "¡Hola, Chocolatín!",
    "Coleccionista",
    "Mitad del álbum",
    "Ornitólogo",
    "Cliente nuevo",
    "Comprador compulsivo",
    "Gourmet",
    "Chef Chabalín",
    "Ninguno como tú",
    "Menú completo",
    "¿Minijuegos??",
    "Fashion Bird",
    "¿Quién come papitas?",
    "Minecraft confirmado",
    "No era un pájaro...",
    "La elegida",
    "Sin desperdiciar",
    "Suerte de principiante",
    "Especialista",
    "Primer ahorro",
    "Millonario",
    "Magnate del D1",
    "Brillitos",
    "Realeza",
    "El Gótico",
    "Rosado",
    "Amante de las palomas",
    "Equipo oscuro",
    "Las acuáticas",
    "Las exóticas",
    "El elegido",
    "100 % Chabalín",
    "Maestro de las carnadas"
];

const LogrosDescripcion = [
    "Entra al menú.",
    "Descubre tu primer Chabalín.",
    "Descubre 10 especies.",
    "Descubre 15 especies.",
    "Completa toda la Chabalpedia.",
    "Compra tu primera carnada.",
    "Compra las 30 carnadas.",
    "Usa todas las carnadas al menos una vez.",
    "Compra 100 carnadas.",
    "Ten tu primer Chabalín favorito.",
    "Alimenta 500 aves.",
    "Entra a los minijuegos.",
    "Atrae un ave usando un Moño.",
    "Atrae a DAMN BIRD.",
    "Descubre a Cubico.",
    "Descubre a Red.",
    "Descubre a Ana.",
    "Captura un ave con la primera carnada comprada.",
    "Consigue tu primer legendaria.",
    "Captura 20 veces la misma especie.",
    "Consigue 100 monedas.",
    "Consigue 10.000 monedas.",
    "Compra toda la tienda.",
    "Descubre a Shiny.",
    "Descubre a Real.",
    "Descubre a Gótico.",
    "Descubre a Rosito y Ana.",
    "Descubre Chocolatín, Clásico y Shiny.",
    "Descubre Emo y Gótico.",
    "Descubre Quak, Pescador y Tranquilo.",
    "Descubre Cucu, Rosito, Cantante y Buhinwai.",
    "Consigue todos los logros.",
    "Descubre las 30 especies del juego.",
    "Compra y usa todas las carnadas."
];

if (!logros) {
    logros = {};

    for (let i = 0; i < LogrosNombres.length; i++) {
        logros[i] = {
            nombre: LogrosNombres[i],
            descripcion: LogrosDescripcion[i],
            desbloqueado: false
        };
    }

    localStorage.setItem("logros", JSON.stringify(logros));
}

function reiniciarAves() {
    for (const id in aves) {
        aves[id].capturada = false;
        aves[id].cantidad = 0;
        aves[id].favorito = false;
        aves[id].carnadaCantidad = 0
        aves[id].carnadaUsada = 0;
    }
    dinero = 0;
    localStorage.setItem("dinero", JSON.stringify(dinero));


    localStorage.setItem("aves", JSON.stringify(aves));
}

function animarLogo() {
    analyser.getByteFrequencyData(dataArray);

    let promedio = 0;

    for (let i = 0; i < 15; i++) {
        promedio += dataArray[i];
    }

    promedio /= 15;

    const escala = 0.8 + promedio / 2500;

    logo.style.transform = `translateY(5px) scale(${escala})`;

    const brillo = promedio / 8;
    logo.style.filter =
        `drop-shadow(-1px ${brillo}px 0px rgba(124, 57, 133, 0.8)) drop-shadow(1px -${brillo}px 0px rgba(207, 140, 216, 0.8))`;

    requestAnimationFrame(animarLogo);
}
let actualBoton = 0;

empezar.addEventListener("mouseenter", () => {
    actualBoton = 0;
    playHoverSound();
    actualizarBoton();
});

perfil.addEventListener("mouseenter", () => {
    actualBoton = 1;
    playHoverSound();
    actualizarBoton();
});

salir.addEventListener("mouseenter", () => {
    actualBoton = 2;
    playHoverSound();
    actualizarBoton();
});

function irFuncion() {
    menuConfirmado.play();
}


function playHoverSound() {
    const sonido = btnHoverSound.cloneNode();
    sonido.volume = btnHoverSound.volume;
    sonido.play();
}

function actualizarBoton() {
    empezar.innerHTML = "<img class='other' src='imagenes/empezar.png' alt='Empezar'>";
    perfil.innerHTML = "<img class='other' src='imagenes/perfil.png' alt='Perfil'>";
    salir.innerHTML = "<img class='other' src='imagenes/salir.png' alt='Salir'>";

    if (actualBoton === 0) {
        empezar.classList.add("hoverButton");
        perfil.classList.remove("hoverButton");
        salir.classList.remove("hoverButton");
        empezar.innerHTML = "<img id='anaIcon' src='imagenes/anaIcon.png'><img class='other' src='imagenes/empezar.png' alt='Empezar'>";
        let anaIcon = document.getElementById("anaIcon");
        anaIcon.style.left = "-240px";
        anaIcon.style.transform = "scale(0.1)";
    }

    if (actualBoton === 1) {
        perfil.classList.add("hoverButton");
        empezar.classList.remove("hoverButton");
        salir.classList.remove("hoverButton");
        perfil.innerHTML = "<img id='anaIcon' src='imagenes/anaIcon.png'><img class='other' src='imagenes/perfil.png' alt='Perfil'>";
        let anaIcon = document.getElementById("anaIcon");
        anaIcon.style.left = "-220px";
        anaIcon.style.transform = "scale(0.1)";
    }

    if (actualBoton === 2) {
        salir.classList.add("hoverButton");
        perfil.classList.remove("hoverButton");
        empezar.classList.remove("hoverButton");
        salir.innerHTML = "<img id='anaIcon' src='imagenes/anaIcon.png'><img class='other' src='imagenes/salir.png' alt='Salir'>";
        let anaIcon = document.getElementById("anaIcon");
        anaIcon.style.left = "-180px";
        anaIcon.style.transform = "scale(0.1)";
    }
}

function iniciar() {
    negro.classList.add("fadeOutNegro");
    logo.classList.add("logoIn");
    chabalin.classList.add("chabalinEntrando");
    console.log(menuTheme.paused);
    setTimeout(() => {
        menuTheme.play();
    }, 1000);
    setTimeout(() => {
        negro.classList.remove("fadeOutNegro");
        logo.classList.remove("logoIn");
        animarLogo();
        logo.style.opacity = 1;
        chabalin.classList.remove("chabalinEntrando");
        chabalin.classList.add("chabalinDancante");
    }, 2000);

    actualizarBoton();
}

function botonesTry(e) {
    if (e.key === "ArrowDown") {
        actualBoton++;

        if (actualBoton > 2) {
            actualBoton = 0;
        }

        playHoverSound();
        actualizarBoton();
    }

    if (e.key === "ArrowUp") {
        actualBoton--;

        if (actualBoton < 0) {
            actualBoton = 2;
        }

        playHoverSound();
        actualizarBoton();
    }
    if (e.code === "Space" || e.code === "Enter") {

        negro.classList.add("fadeInNegro");

        const fade = setInterval(() => {
            menuTheme.volume = a;
            document.body.style.pointerEvents = "none";
            a -= 0.05;
            if (a <= 0) {
                menuTheme.volume = 0;
                clearInterval(fade);
                irSiguiente();
            }
        }, 800);

        menuConfirmado.play();
    }
}

function irSiguiente() {
    if (actualBoton === 0) {
        window.location.href = "menú.html";

    }

    if (actualBoton === 1) {
        window.location.href = "perfil.html";
    }

    if (actualBoton === 2) {
        console.log("salir");
    }
}

window.addEventListener("keydown", botonesTry);
window.addEventListener("load", iniciar);