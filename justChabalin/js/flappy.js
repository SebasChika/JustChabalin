let personaje = document.getElementById("jugador");
let tuberias = document.querySelectorAll(".tuber");
let chocado = document.getElementById("chocado");
let clickHere = document.getElementById("clickHere");
let icon = document.getElementById("icon");
let lesgo = document.getElementById("lesgo");
let rendirse = document.getElementById("rendirse");
rendirse.addEventListener("click", volver);
let continuar = document.getElementById("continuar");
continuar.addEventListener("click", volver2);
let youLose = document.getElementById("youLose");
let puntajeHtml = document.getElementById("puntajeHtml");
let gameOut = document.getElementById("gameOut");
let negro = document.getElementById("negro");
let beep = document.getElementById("beep");
let arrayText = [];
let point = document.getElementById("point");
let saltito = document.getElementById("saltito");
let textAparecer = document.getElementById("textAparecer");
saltito.volume = 1;
let bad = document.querySelectorAll(".bad");
let contador = document.getElementById("contador");
let playing = document.getElementById("playing");
let datos = Number(localStorage.getItem("dinero")) || 0
playing.volume = 0.4;
let hitboxTuberia;
let tuberiaPasada = false;
let a = 1;
let este;
let hitboxJugador;
let bajar = 50;
let tecla;
let puntaje = 0;
let esCentro = 0;
let juego;
let perdido = false;
let dinero = 0;
let gameOverHecho = false;
let posicion = 0;
let jstOne = false;
const fondo = document.getElementById("fondo");
const pasto = document.getElementById("pasto");


tuberias.forEach(tuberia => {
    tuberia.pasada = false;
});

function volver2() {
    console.log("thiss")
    youLose.classList.remove("fadeInNegro");
    youLose.classList.add("fadeOutNegro");
    lesgo.play();

    const fade = setInterval(() => {

        a -= 0.1;

        if (a <= 0) {
            gameOut.volume = 0;
            clearInterval(fade);
            irSiguiente2();
            return;
        }


        gameOut.volume = a;

    }, 300);

}

function irSiguiente2() {
    window.location.href = "flappy.html";
}

function volver() {
    console.log("thiss")
    youLose.classList.remove("fadeInNegro");
    youLose.classList.add("fadeOutNegro");
    lesgo.play();

    const fade = setInterval(() => {

        a -= 0.1;

        if (a <= 0) {
            gameOut.volume = 0;
            clearInterval(fade);
            irSiguiente();
            return;
        }


        gameOut.volume = a;

    }, 300);

}

function irSiguiente() {
    window.location.href = "minigames.html";
}

function iniciar() {
    personaje = document.getElementById("jugador");
    playing.play();
    posicion -= 2;
    pasto.style.backgroundPositionX = posicion + "px";
    fondo.style.backgroundPositionX = posicion + "px";
    if (perdido != true) {
        tuberias.forEach(tuberia => {
            tuberia.classList.add("mover");
        });
    }
    if (bajar >= 1) {
        personaje.style.left = "10%";
        personaje.style.bottom = bajar + ("%");
        bajar--;
    }
    juego = requestAnimationFrame(iniciar);
    verificar();

}

function backroun() {
    negro.classList.add("fadeOutNegro");
}

function playJump() {
    const sonido = saltito.cloneNode();
    sonido.volume = saltito.volume;
    sonido.play();
}

function beeping() {
    const sonido = beep.cloneNode();
    sonido.volume = beep.volume;
    sonido.play();
}


function teclaa(e) {
    tecla = e.code;
    if (tecla == "Space" || tecla == "Click") {
        playJump();
        personaje.classList.remove("moverHead");
        void personaje.offsetWidth;
        personaje.classList.add("moverHead");
        setTimeout(() => {
        }, 500)
        if (bajar <= 90) {
            personaje.style.left = "10%";
            bajar += 20;
        }
        else {
            personaje.style.left = "10%";
            bajar -= 5;
        }
    }
}
function verificar() {
    if (perdido) return;
    let jugador = personaje.getBoundingClientRect();

    tuberias.forEach(tuberia => {
        bad.forEach(kill => {
            let tubo = tuberia.getBoundingClientRect();
            let malo = kill.getBoundingClientRect();
            if (jugador.right > malo.left && jugador.left < malo.right && jugador.bottom > malo.top && jugador.top < malo.bottom) {
                gameOver();
                perdido = true;
            }

            if (jugador.left > tubo.right && tuberia.pasada == false) {
                puntaje++;
                point.play();
                contador.innerHTML = puntaje;
                dinero = puntaje;
                dinero = dinero + datos;

                tuberia.pasada = true;

                if (tuberia.id == "tuberia4") {
                    setTimeout(() => {
                        tuberias.forEach(t => {
                            t.pasada = false;
                        });
                    }, 1500);
                }
            }

        })
    });
}

function textoLento() {
    puntajeHtml.innerHTML = "puntaje:" + puntaje;
    let texto = "Perdiste.. pero no pierdas tu determinación...";
    arrayText = texto.split("");
    for (let i = 0; i < arrayText.length; i++) {
        setTimeout(() => {
            textAparecer.innerHTML += arrayText[i];
            beeping();
        }, 100 * i);
    }

}

function gameOver() {
    if (gameOverHecho) return;
    localStorage.setItem("dinero", dinero);
    youLose.style.pointerEvents = "all";
    gameOverHecho = true;
    chocado.play();
    cancelAnimationFrame(juego);
    tuberias.forEach(tuberia => {
        playing.pause();
        tuberia.classList.add("pausado");
        tuberia.style.opacity = 1;
    });
    setTimeout(() => {
        negro.classList.remove("fadeOutNegro");
        negro.classList.add("fadeInNegro");
        youLose.classList.add("fadeInNegro");
        gameOut.play();
        textoLento();
    }, 1000)

}

function other() {
    if (jstOne) return;
    jstOne = true;
    icon.classList.add("segundoImg");
    clickHere.style.opacity = 0;
    personaje.classList.add("segundoEstado");
    setTimeout(() => {
        iniciar();
        contador.style.opacity = 1;
        window.addEventListener("keydown", teclaa);
    }, 2000)
}



window.addEventListener("load", backroun);
window.addEventListener("click", other);