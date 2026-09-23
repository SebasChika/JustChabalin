let uno = document.getElementById("uno");
let dos = document.getElementById("dos");
let tres = document.getElementById("tres");
let cuatro = document.getElementById("cuatro");
let cinco = document.getElementById("cinco");
let character = document.getElementById("character");
let congrats = document.getElementById("congrats");
let upp = document.getElementById("upp");
let bird = document.getElementById("bird");
let seis = document.getElementById("seis");
let logros = JSON.parse(localStorage.getItem("logros"));
let datos = JSON.parse(localStorage.getItem("aves"));
let KMON = document.getElementById("KMON");
let trumpetBoy = document.getElementById("trumpetBoy");
let determination = document.getElementById("determination");
let trianguloBoy = document.getElementById("trianguloBoy");
let drumsBoy = document.getElementById("drumsBoy");
let pianoBoy = document.getElementById("pianoBoy");
let archivement = document.getElementById("archivement");
let siete = document.getElementById("siete");
let ocho = document.getElementById("ocho");
let passingBy = document.getElementById("passingBy");
let negro = document.getElementById("negro");
let soul = document.getElementsByClassName("soul");
let anaEntering = document.getElementById("anaEntering");
let almas = document.getElementById("almas");
let anaIntroduction = document.getElementById("anaIntroduction");
let thisUpper = document.getElementById("thisUpper");
let allOfHearts = document.getElementById("allOfHearts");
let theme = document.getElementById("theme");
a = 1;
let banda = document.getElementById("banda");
let spark = document.getElementById("spark");
let another = document.getElementById("another");
let cardd = document.getElementById("cardd");
let actualBirdo = document.getElementById("actualBirdo");
let subirCantidadAnim = 0.4;
let cartitaShow = document.getElementById("cartitaShow");
let esto;
let yay = document.getElementById("yay");

const audioContext = new AudioContext();
const source = audioContext.createMediaElementSource(theme);
const analyser = audioContext.createAnalyser();

source.connect(analyser);
analyser.connect(audioContext.destination);

analyser.fftSize = 256;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

let escalaActual = 0.6;

function animarLogo() {
    analyser.getByteFrequencyData(dataArray);

    let energia = 0;

    for (let i = 0; i < 16; i++) {
        energia += dataArray[i];
    }

    energia /= 16;

    let escala = 0.6 + Math.random() * (energia / 255) * 0.5;

    ocho.style.setProperty(
        "transform",
        `translateX(-55%) scale(${escala})`,
        "important"
    );

    requestAnimationFrame(animarLogo);
}

function distorsionarFondo() {

    let fondo = document.getElementById("transicionFondo");

    fondo.style.transition = "transform 0.15s ease-out";

    fondo.style.transform = "scale(1.08)";

    setTimeout(() => {
        fondo.style.transform = "scale(1)";
    }, 150);
}

function cambiarFondo(imagen) {

    let fondo = document.getElementById("transicionFondo");

    fondo.style.backgroundImage =
        `url(../imagenes/final/fondosFinal/${imagen})`;

    distorsionarFondo();
}
function iniciar() {

    theme.play();

    negro.classList.add("fadeOutNegro");

    uno.classList.add("partOne");

    upp.play();

    setTimeout(() => {
        dos.classList.add("partOnee");

        setTimeout(() => {
            upp.play();
        }, 100);

    }, 2500);

    setTimeout(() => {
        tres.classList.add("partTwo");

        setTimeout(() => {
            upp.play();
        }, 100);

    }, 5000);

    setTimeout(() => {
        cuatro.classList.add("partTwoo");

        setTimeout(() => {
            upp.play();
        }, 100);

    }, 7500);

    setTimeout(() => {
        cinco.classList.add("partTree");

        setTimeout(() => {
            upp.play();
        }, 100);

    }, 10000);

    setTimeout(() => {
        seis.classList.add("partTreeeAfter");

        setTimeout(() => {
            upp.play();
        }, 100);

    }, 12500);

    setTimeout(() => {
        siete.classList.add("partOneAfter");

        setTimeout(() => {
            upp.play();
        }, 100);

    }, 15000);

    setTimeout(() => {
        ocho.classList.add("ultime");
        thisUpper.style.transform = "scale(0.8)";
    }, 17500);

    setTimeout(() => {

        for (let elemento of soul) {
            elemento.classList.add("antiRotar");
        }

        animarLogo();

        almas.classList.add("rotar");

        thisUpper.style.transform = "scale(0.6)";

    }, 20000);

    setTimeout(() => {

        allOfHearts.style.transform =
            "translateY(-200px) scale(0.9)";

        thisUpper.style.transform = "scale(0.3)";

        setTimeout(() => {
            passingBy.classList.add("pasar");
        }, 1000);

        for (let elemento of soul) {
            elemento.classList.remove("antiRotar");
            elemento.classList.add("antiRotarRapido");
        }

        almas.classList.remove("rotar");
        almas.classList.add("rotarRapido");

    }, 25000);

    setTimeout(() => {

        anaEntering.classList.add("jstEnter");

        setTimeout(() => {
            anaIntroduction.classList.add("entrarIntruccion");
        }, 2000);

    }, 30000);

    setTimeout(() => {

        character.style.opacity = 0;
        character.style.transform = "skew(5deg)";

        allOfHearts.style.transform =
            "translateY(-20px) scale(1)";

        thisUpper.style.transform = "scale(0.5)";

    }, 35000);

    setTimeout(() => {

        allOfHearts.style.transform =
            "translateY(-200px) scale(0.9)";

        thisUpper.style.transform = "scale(0.3)";

        bird.classList.add("subiendoBird");

    }, 37000);

    setTimeout(() => {

        allOfHearts.style.transform =
            "translateY(100px) scale(0.9)";

        bird.classList.add("bajandoBird");

    }, 38000);

    setTimeout(() => {

        allOfHearts.style.transform =
            "translateY(0px) scale(1)";

        bird.classList.remove("bajandoBird");

        bird.classList.add("desaparecer");

    }, 40000);

    setTimeout(() => {
        trumpetBoy.classList.add("aparecerTrumpet");
    }, 41000);

    setTimeout(() => {
        pianoBoy.classList.add("aparecerPiano");
    }, 45000);

    setTimeout(() => {
        trianguloBoy.classList.add("aparecerTriangulo");
    }, 49000);

    setTimeout(() => {
        drumsBoy.classList.add("aparecerDrums");
    }, 53000);

    setTimeout(() => {

        banda.style.opacity = 0;

        negro.classList.remove("fadeOutNegro");
        negro.classList.add("fadeInNegro");

    }, 55000);

    setTimeout(() => {

        allOfHearts.style.filter = "brightness(0)";

        determination.style.setProperty("opacity", "1", "important");

    }, 58000);

    setTimeout(() => {

        negro.classList.remove("fadeInNegro");
        negro.classList.add("fadeOutNegro");

        allOfHearts.style.transform =
            "translateY(-200px) scale(0.9)";

        determination.style.setProperty("opacity", "0", "important");
        cambiarFondo("1.png");
        girar();
    }, 60000);

    setTimeout(() => {
        cambiarFondo("2.png");
    }, 60750);

    setTimeout(() => {
        cambiarFondo("3.png");
    }, 61500);

    setTimeout(() => {
        cambiarFondo("4.png");
    }, 62250);

    setTimeout(() => {
        cambiarFondo("5.jpg");
    }, 63000);

    setTimeout(() => {
        cambiarFondo("6.png");
    }, 63750);

    setTimeout(() => {
        cambiarFondo("7.png");
    }, 64500);

    setTimeout(() => {
        cambiarFondo("8.png");
    }, 65250);

    setTimeout(() => {
        cambiarFondo("9.png");
    }, 66000);

    setTimeout(() => {
        cambiarFondo("10.png");
    }, 66750);

    setTimeout(() => {
        cambiarFondo("11.png");
    }, 67500);

    setTimeout(() => {
        cambiarFondo("12.png");
    }, 68250);

    setTimeout(() => {
        cambiarFondo("13.png");
    }, 69000);

    setTimeout(() => {
        cambiarFondo("14.png");
    }, 69750);

    setTimeout(() => {
        cambiarFondo("15.png");
    }, 70500);

    setTimeout(() => {
        cambiarFondo("16.png");
    }, 71250);

    setTimeout(() => {
        cambiarFondo("17.png");
    }, 72000);

    setTimeout(() => {
        cambiarFondo("18.png");
    }, 72750);

    setTimeout(() => {
        cambiarFondo("19.png");

    }, 73500);

    setTimeout(() => {
        cambiarFondo("20.png");
        pocoApoco();
    }, 74250);

    setTimeout(() => {
        cambiarFondo("21.png");
    }, 75000);

    setTimeout(() => {
        cambiarFondo("22.png");
    }, 75750);

    setTimeout(() => {
        cambiarFondo("23.png");
    }, 76500);

    setTimeout(() => {
        cambiarFondo("24.png");
    }, 77250);

    setTimeout(() => {
        cambiarFondo("25.png");
    }, 78000);

    setTimeout(() => {
        cambiarFondo("1.png");
    }, 78750);

    setTimeout(() => {
        cambiarFondo("2.png");
    }, 79500);

    setTimeout(() => {
        cambiarFondo("3.png");
    }, 80250);

    setTimeout(() => {
        cambiarFondo("4.png");
        negro.classList.add("fadeInNegro");
        negro.classList.remove("fadeOutNegro");
    }, 81000);

    setTimeout(() => {
        cambiarFondo("5.jpg");
    }, 81750);
    setTimeout(() => {
        cambiarFondo("6.png");
    }, 82500);

    setTimeout(() => {
        cambiarFondo("7.png");
    }, 83250);

    setTimeout(() => {
        cambiarFondo("8.png");
        KMON.play();
    }, 84000);

    setTimeout(() => {
        negro.classList.remove("fadeInNegro");
        negro.classList.add("fadeOutNegro");
        cambiarFondo("fondoFinal.png");
    }, 84750);
}

function girar() {
    another.classList.add("another");
    cardd.classList.add("spin");
    cardd.style.opacity = 1;

    subirCantidadAnim += 0.0004;
    cardd.style.animationDuration = subirCantidadAnim + "s";

    if (subirCantidadAnim <= 1) {
        esto = requestAnimationFrame(girar);
    } else {
        cardd.classList.remove("spin");
        actualBirdo.classList.add("entrarMiave");
        cardd.classList.add("bordeGlow");
        cardd.style.filter = "brightness(1)";

        yay.volume = 0.1;
        spark.volume = 0.3;
        spark.play();
        datos[29].capturada = true;
        localStorage.setItem("aves", JSON.stringify(datos));


        setTimeout(() => {
            if (logros[16].desbloqueado != true) {
                congrats.play();
                archivement.classList.add("logro");
                setTimeout(() => {
                    archivement.classList.remove("logro");
                    archivement.classList.add("logroOut");
                    logros[16].desbloqueado = true;
                    localStorage.setItem("logros", JSON.stringify(logros));
                }, 3000);
            }
        }, 2000);
    }
}



function pocoApoco() {
    const fade = setInterval(() => {

        a -= 0.05;

        if (a <= 0) {
            theme.volume = 0;
            clearInterval(fade);
            return;
        }

        theme.volume = a;

    }, 500);

}

window.addEventListener("load", iniciar);