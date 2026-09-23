let hitboxMartin = document.getElementById("hitboxMartin");
let derecha = false;
let pescadorTheme = document.getElementById("pescadorTheme");
pescadorTheme.volume = 0.5;
let a = 0.5;
let martinPesca = document.getElementById("martinPesca");
let hitboxMartinReal = hitboxMartin.getBoundingClientRect();
let fish1 = document.getElementById("fish1");
let hitbox1 = fish1.getBoundingClientRect();
let fish2 = document.getElementById("fish2");
let hitbox2 = fish2.getBoundingClientRect();
let fish3 = document.getElementById("fish3");
let dinero = document.getElementById("dinero");
let hitbox3 = fish3.getBoundingClientRect();
let izquierda = false;
let money = JSON.parse(localStorage.getItem("dinero"));
let negro = document.getElementById("negro");
let posicionLeft = 550;
let volver = document.getElementById("volver");
let dead = document.getElementById("dead");
let rotacionMartin = 0;
let habilidado = true;
let habilidadoBajar = true;
let queso = false;
let puntaje = 0;
let hecho1 = false;
let hecho2 = false;
let hecho3 = false;
let num = 0;
let intervaloColor1;
let intervaloColor2;
let intervaloColor3;
let moverPajaro;
let finalizado = false;
let moreMoney = document.getElementById("moreMoney");
let puntajeHtml = document.getElementById("puntajeHtml");
volver.addEventListener("click", volverMenu);


function moverMartin(e) {
    if (!habilidado) return;

    if (e.code === "ArrowRight") {
        derecha = true;
        queso = true;

        if (!martinPesca.src.includes("pescadorCaminante.gif")) {
            martinPesca.src = "imagenes/minijuegos/pescadorCaminante.gif";
        }
    }

    if (e.code === "ArrowLeft") {
        izquierda = true;
        queso = false;

        if (!martinPesca.src.includes("pescadorCaminante.gif")) {
            martinPesca.src = "imagenes/minijuegos/pescadorCaminante.gif";
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
        martinPesca.src = "imagenes/minijuegos/martinIdle.gif";
    }

}

function volverMenu() {
    negro.classList.remove("fadeOutNegro");
    negro.classList.add("fadeInNegro");

    const fade = setInterval(() => {

        a -= 0.05;

        if (a <= 0) {
            pescadorTheme.volume = 0;
            clearInterval(fade);
            window.location.href = "minigames.html";
            return;
        }

        pescadorTheme.volume = a;


    }, 300);

}

function rotarColor(e) {
    let brillo = 1;
    e.style.filter = `sepia(1) saturate(5) hue-rotate(320deg)`;
    let intervalo = setInterval(() => {
        if (brillo == 1) {
            brillo = 0.7;
        }
        else {
            brillo = 1;
        }

        e.style.filter = `sepia(1) saturate(5) hue-rotate(320deg) brightness(${brillo})`;

    }, 500);

    if (e == fish1) {
        intervaloColor1 = intervalo;
    }
    else if (e == fish2) {
        intervaloColor2 = intervalo;
    }
    else if (e == fish3) {
        intervaloColor3 = intervalo;
    }
}

function retirarColor() {
    clearInterval(intervaloColor1);
    clearInterval(intervaloColor2);
    clearInterval(intervaloColor3);

    fish1.style.filter = "";
    fish2.style.filter = "";
    fish3.style.filter = "";
}

function mover() {
    if (derecha) {
        posicionLeft += 7;

        if (posicionLeft >= 1100) {
            posicionLeft = 1100;
        }

        martinPesca.style.transform = "rotateY(180deg)";
    }

    if (izquierda) {
        posicionLeft -= 7;

        if (posicionLeft <= 120) {
            posicionLeft = 120;
        }

        martinPesca.style.transform = "rotateY(0deg)";
    }

    actualizarTransform();

    let hitboxMartinReal = hitboxMartin.getBoundingClientRect();
    let hitbox1 = fish1.getBoundingClientRect();
    let hitbox2 = fish2.getBoundingClientRect();
    let hitbox3 = fish3.getBoundingClientRect();

    if (
        hitboxMartinReal.left < hitbox1.right &&
        hitboxMartinReal.right > hitbox1.left &&
        hitboxMartinReal.top < hitbox1.bottom &&
        hitboxMartinReal.bottom > hitbox1.top
    ) {
        if (!hecho1) {
            hecho1 = true;
            sumarPuntos();
            rotarColor(fish1);
            fish1.classList.add("desvanecer");
        }
    }

    if (
        hitboxMartinReal.left < hitbox2.right &&
        hitboxMartinReal.right > hitbox2.left &&
        hitboxMartinReal.top < hitbox2.bottom &&
        hitboxMartinReal.bottom > hitbox2.top
    ) {
        if (!hecho2) {
            hecho2 = true;
            sumarPuntos();
            rotarColor(fish2);
            fish2.classList.add("desvanecer");
        }
    }

    if (
        hitboxMartinReal.left < hitbox3.right &&
        hitboxMartinReal.right > hitbox3.left &&
        hitboxMartinReal.top < hitbox3.bottom &&
        hitboxMartinReal.bottom > hitbox3.top
    ) {
        if (!hecho3) {
            hecho3 = true;
            sumarPuntos();
            rotarColor(fish3);
            fish3.classList.add("desvanecer");
            setTimeout(() => {
                puntaje = 0;
                hecho1 = false;
                hecho2 = false;
                hecho3 = false;
                fish3.classList.remove("desvanecer");
                fish1.classList.remove("desvanecer");
                fish2.classList.remove("desvanecer");
                retirarColor();
            }, 2000)
        }
    }

    moverPajaro = requestAnimationFrame(mover);
}

function sumarPuntos() {
    dead.play();
    console.log("YES");
    puntaje++;
    num++;
    puntajeHtml.innerHTML = num;
    if (num == 12) {
        finalizado = true;
        dinero.play();
        moreMoney.classList.add("gettinMoney");
        cancelAnimationFrame(moverPajaro);
        money += 30;
        localStorage.setItem("dinero", JSON.stringify(money));
    }
}

function actualizarTransform() {
    hitboxMartin.style.transform =
        `translateX(${posicionLeft}px) rotate(${rotacionMartin}deg)`;
}

function iniciar() {
    fish1.classList.add("correr1");
    fish2.classList.add("correr2");
    fish3.classList.add("correr3");
    pescadorTheme.play();
    negro.classList.add("fadeOutNegro");
    mover();
}

function bajarPesca(e) {
    if (!finalizado) {
        if (e.code !== "Space") return;
        if (!habilidadoBajar) return;

        habilidadoBajar = false;

        if (puntaje == 0) {
            hitboxMartin.style.top = "40%";
        }
        else if (puntaje == 1) {
            hitboxMartin.style.top = "60%";
        }
        else {
            hitboxMartin.style.top = "85%";
        }

        if (queso) {
            rotacionMartin = 90;
        }
        else {
            rotacionMartin = -90;
        }

        actualizarTransform();

        setTimeout(() => {
            hitboxMartin.style.top = "0%";
            rotacionMartin = 0;
            actualizarTransform();
        }, 400);
    }

}

hitboxMartin.addEventListener("transitionend", () => {
    habilidadoBajar = true;
});

window.addEventListener("load", iniciar);
window.addEventListener("keydown", moverMartin);
window.addEventListener("keyup", ponerOtra);
window.addEventListener("keypress", bajarPesca);