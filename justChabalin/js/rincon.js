let negro = document.getElementById("negro");
let contenedor = document.getElementById("contenedor");
let thisss = document.getElementById("thisss");
let rarezaCarta;
let epico = document.getElementById("epico");
let cartitaShow = document.getElementById("cartitaShow");
let spark = document.getElementById("spark");
let another = document.getElementById("another");
let grass = document.getElementById("grass");
let btnHoverSound = document.getElementById("btnHoverSound");
let tension = document.getElementById("tension");
let plop = document.getElementById("plop");
let tirar = document.getElementById("tirar");
let numeroThis;
let id;
let PajaroQueToco;
let posicionArray;
tension.volume = 0.6;
let rollIn = document.getElementById("rollIn");
let shock = document.getElementById("shock");
let chabalMisterioso = document.getElementById("chabalMisterioso");
let usarCarnada = document.getElementById("actualCar");
usarCarnada.addEventListener("mouseenter", hover);
let opciones = [1000, 2000, 3000, 4000, 5000, 6000, 7000];
usarCarnada.addEventListener("click", lanzarCarnada);
let actualReal = document.getElementById("actualReal");
let imgCarnadaLanzada = document.getElementById("carnadaLanzada");
let fuente = document.getElementById("fuente");
let center = document.getElementById("center");
const cartas = document.querySelectorAll(".btnComprar");
let cardd = document.getElementById("cardd");
let nameDel = document.getElementById("nameDel");
let actualBirdo = document.getElementById("actualBirdo");
let subirCantidadAnim = 0.4;
let esto;


for (let carta of cartas) {
    carta.addEventListener("click", cartaActual);
}
let barraDentro = document.getElementById("barraDentro");
let barraChabal = document.getElementById("barraChabal");
let progreso = document.getElementById("realProgress");
let valor = 0;
let espacio = false;
let right = document.getElementById("right");
let comprobar;
let cambiarPosicionChabal;
let left = document.getElementById("left");
let porcentajeBarra = 0;
let numero;
let gano = false;
let animacion;
let animacion2;
let nada = document.getElementById("nada");
let ningunoo = 0;
let rectBarra;
let rectChabal;
let canadaActual;
let carnadaImg;
let pajaritos = document.getElementById("pajaritos");
let añadir1 = document.getElementById("añadir1");
let añadir2 = document.getElementById("añadir2");
let añadir3 = document.getElementById("añadir3");
let añadir4 = document.getElementById("añadir4");
let añadir5 = document.getElementById("añadir5");
let añadir6 = document.getElementById("añadir6");
let añadir7 = document.getElementById("añadir7");
let añadir8 = document.getElementById("añadir8");
let añadir9 = document.getElementById("añadir9");
let añadir10 = document.getElementById("añadir10");
let añadir11 = document.getElementById("añadir11");
let añadir12 = document.getElementById("añadir12");
let añadir13 = document.getElementById("añadir13");
let añadir14 = document.getElementById("añadir14");
let añadir15 = document.getElementById("añadir15");
let añadir16 = document.getElementById("añadir16");
let añadir17 = document.getElementById("añadir17");
let añadir18 = document.getElementById("añadir18");
let añadir19 = document.getElementById("añadir19");
let añadir20 = document.getElementById("añadir20");
let añadir21 = document.getElementById("añadir21");
let añadir22 = document.getElementById("añadir22");
let añadir23 = document.getElementById("añadir23");
let añadir24 = document.getElementById("añadir24");
let añadir25 = document.getElementById("añadir25");
let añadir26 = document.getElementById("añadir26");
let añadir27 = document.getElementById("añadir27");
let añadir28 = document.getElementById("añadir28");
let añadir29 = document.getElementById("añadir29");
let añadir30 = document.getElementById("añadir30");

let cuadros = [];
let entro = false;

for (let i = 0; i < 30; i++) {
    cuadros[i] = document.getElementById(`cuadro${i + 1}`);
}

const carnadas = [

    null,
    [1, 2, 3, 18],
    [2, 1, 3, 16],
    [3, 4, 16, 7],
    [4, 5, 7, 11],
    [5, 1, 2, 14],
    [6, 8, 22, 15],
    [7, 12, 4, 11],
    [8, 6, 22, 29],
    [9, 17, 20, 28],
    [10, 19, 13, 18],
    [11, 7, 4, 12],
    [12, 5, 11, 7],
    [13, 10, 19, 17],
    [14, 22, 21, 15],
    [15, 14, 22, 17],
    [16, 3, 4, 7],
    [17, 9, 13, 20],
    [18, 1, 2, 10],
    [19, 10, 13, 9],
    [20, 17, 9, 13],
    [21, 22, 14, 15],
    [22, 21, 15, 14],
    [23, 3, 4, 16, 7],
    [24, 17, 9, 20],
    [25, 4, 7, 23],
    [26, 29, 22, 14],
    [27, 13, 10, 17],
    [28, 17, 9, 20],
    [29, 22, 14, 15],
    [30, 20, 21, 28]

];
let datos = JSON.parse(localStorage.getItem("aves"));
let precionarBtn = 0;
let logo = document.getElementById("logo");
let queCarnada = document.getElementById("queCarnada");
queCarnada.addEventListener("mouseenter", hover);
queCarnada.addEventListener("click", verCarnada);
let a = 0.7
logo.addEventListener("click", volver);
pajaritos.volume = 0.05;
let chabalPlace = document.getElementById("chabalPlace");
chabalPlace.volume = 0.7;
let nube = document.getElementById("movible");

function iniciar() {
    for (let i = 0; i < 30; i++) {
        console.log(datos[i].carnadaCantidad);
        if (datos[i].carnadaCantidad > 0) {
            let actualCantidadd = datos[i].carnadaCantidad;

            cuadros[i].querySelector(".añadir").innerHTML = "x" + actualCantidadd;

            cuadros[i].style.display = "block";
        }
        else {
            ningunoo++;
            cuadros[i].style.display = "none";
        }
        if (ningunoo == 30) {
            nada.style.opacity = "1";
        }
    }
    chabalPlace.play();
    nube.classList.add("volarBird");
    negro.classList.add("fadeOutNegro");

    setInterval(() => {
        nube.classList.remove("volarBird");

        setTimeout(() => {
            nube.classList.add("volarBird");
        }, 100);

    }, 30000);
    setTimeout(() => {
        rollIn.play();
        pajaritos.play();
        fuente.classList.add("upFuente");
    }, 2000)

}

function girar() {
    console.log(id);
    rarezaCarta = datos[numeroThis].rareza;
    if (id == 20 || id == 16 || id == 27 || id == 9) {
        actualBirdo.style.setProperty(
            "transform",
            "scale(0.8) translateY(40px)",
            "important"
        );
        console.log("cambio");
    }

    if (rarezaCarta === "común") {
        nameDel.style.color = "#202742";
        cardd.style.backgroundImage = "url('../imagenes/chabalPlace/COMUN.png')";
    } else if (rarezaCarta === "raro") {
        nameDel.style.color = "#132422";
        cardd.style.backgroundImage = "url('../imagenes/chabalPlace/RARO.png')";
    } else if (rarezaCarta === "legendario") {
        nameDel.style.color = "#22180e";
        cardd.style.backgroundImage = "url('../imagenes/chabalPlace/LEGENDARIO.png')";
    } else if (rarezaCarta === "mítico") {
        nameDel.style.color = "#3b1010";
        cardd.style.backgroundImage = "url('../imagenes/chabalPlace/MITICO.png')";
    } else if (rarezaCarta === "único") {
        cardd.style.backgroundImage = "url('../imagenes/chabalPlace/UNICO.png')";
    }

    actualBirdo.src = "imagenes/chabalinPedia/chabalinAnimation/" + (carnadas[id][posicionArray]) + ".gif"
    thisss.addEventListener("click", volver);
    nameDel.innerHTML = "CHABALIN " + PajaroQueToco.toUpperCase();
    another.classList.add("another");
    cardd.classList.add("spin");
    if (subirCantidadAnim <= 1) {
        subirCantidadAnim += 0.002;
        cardd.style.animationDuration = subirCantidadAnim + "s";
        esto = requestAnimationFrame(girar);
    }
    else {
        cancelAnimationFrame(esto);
        cardd.classList.remove("spin");
        nameDel.classList.add("entrarText");
        actualBirdo.classList.add("entrarMiave");
        cardd.classList.remove("spin");
        cardd.classList.add("bordeGlow");
        cardd.style.filter = "brightness(1)";
        yay.volume = 0.1;
        spark.volume = 0.3;
        spark.play();
        setTimeout(() => {
            yay.play();
        }, 2000)

    }

}

function hover() {
    playHoverSound();
}

function cartaActual(e) {
    const cuadro = e.currentTarget.closest(".cuadro");
    id = cuadro.id.slice(6);
    console.log("cambiando a:" + id);
    entro = true;
    actualReal.style.opacity = 1;
    carnadaImg = "imagenes/tienda/l0_sprite_" + id + ".png";
    actualReal.src = carnadaImg;
    carnadaLanzada.src = carnadaImg;
}

function playHoverSound() {
    const sonido = btnHoverSound.cloneNode();
    sonido.volume = btnHoverSound.volume;
    sonido.play();
}

function lanzarCarnada() {
    if (entro != true) return;

    if (id == null) {
        id = 1;
    }

    if (datos[id - 1].carnadaCantidad <= 0) return;

    datos[id - 1].carnadaCantidad -= 1;
    datos[id - 1].carnadaUsada++;
    localStorage.setItem("aves", JSON.stringify(datos));

    thisss.style.pointerEvents = "all";

    let posibilidad = Math.floor(Math.random() * 100) + 1;
    let tiempoEspera = opciones[Math.floor(Math.random() * opciones.length)];

    fuente.classList.remove("upFuente");
    fuente.classList.add("downFuente");

    carnadaLanzada.classList.add("lanzar");

    actualCar.style.bottom = "-120px";
    queCarnada.style.bottom = "-120px";

    tirar.play();

    setTimeout(() => {
        plop.play();
    }, 2000);

    setTimeout(() => {
        if (posibilidad <= 60) {
            posicionArray = 0;
        }
        else if (posibilidad <= 86) {
            posicionArray = 1;
        }
        else if (posibilidad <= 95) {
            posicionArray = 2;
        }
        else {
            posicionArray = 3;
        }

        numeroThis = carnadas[id][posicionArray] - 1;
        PajaroQueToco = datos[numeroThis].nombre;

        console.log(carnadas[id][posicionArray]);
        console.log(PajaroQueToco);

        chabalMisterioso.src =
            "imagenes/chabalinPedia/chabalinAnimation/" +
            carnadas[id][posicionArray] +
            ".gif";

        setTimeout(() => {
            shock.play();

            chabalPlace.volume = 0;

            tension.play();

            chabalMisterioso.classList.add("mostrarAve");

            setTimeout(() => {
                contenedor.style.opacity = 1;

                negro.classList.remove("fadeOutNegro");
                negro.classList.remove("fadeOut");
                negro.classList.add("fadeIn");

                crearNumero();

            }, 1000);

        }, tiempoEspera);

    }, 2000);
}

function verCarnada() {
    console.log(precionarBtn);
    if (precionarBtn == 0) {
        negro.classList.remove("fadeOutNegro");
        negro.classList.remove("fadeOut");
        negro.classList.add("fadeIn");
        center.classList.remove("subirTwoCenter");
        center.classList.add("subirCenter");
        precionarBtn++;
        cartas.forEach(carta => {
            carta.classList.add("inclinar");
        });
    }
    else {
        negro.classList.remove("fadeIn");
        negro.classList.add("fadeOut");
        center.classList.remove("subirCenter");
        center.classList.add("subirTwoCenter");
        precionarBtn--;
        cartas.forEach(carta => {
            carta.classList.remove("inclinar");
        });
    }
}


function irWeird() {
    console.log("hi");
    cancelAnimationFrame(comprobar);
    clearInterval(cambiarPosicionChabal);
    contenedor.style.opacity = 0;
    negro.classList.remove("fadeIn");
    negro.classList.remove("fadeOut");
    negro.classList.remove("fadeOutNegro");
    negro.classList.add("fadeInNegro");
    setTimeout(() => {
        const fade = setInterval(() => {

            a -= 0.01;

            if (a <= 0) {
                tension.volume = 0;
                clearInterval(fade);
                window.location.href = "final.html";
                return;
            }

            tension.volume = a;

        }, 1000);
    }, 1000)


}

function volver() {
    console.log("hi");
    negro.classList.remove("fadeIn");
    negro.classList.remove("fadeOut");
    negro.classList.remove("fadeOutNegro");
    negro.classList.add("fadeInNegro");

    const fade = setInterval(() => {

        a -= 0.05;

        if (a <= 0.2) {
            chabalPlace.volume = 0;
            clearInterval(fade);
            irSiguiente();
            return;
        }

        chabalPlace.volume = a;

    }, 300);
}
function irSiguiente() {
    window.location.href = "menú.html";
}

function crearNumero() {
    comprobarToque();
    cambiarPosicionChabal = setInterval(() => {
        numero = Math.floor(Math.random() * 81) - 5;
        barraChabal.style.left = numero + "%";
    }, 2000)
}

function comprobarToque() {
    rectChabal = barraChabal.getBoundingClientRect();
    rectBarra = barraDentro.getBoundingClientRect();
    if (rectBarra.right >= rectChabal.left && rectBarra.left <= rectChabal.right) {
        subirBarra();
    }
    else {
        bajarBarra();
    }
    if (!gano) {
        comprobar = requestAnimationFrame(comprobarToque);
    }
}

function bajarBarra() {
    if (porcentajeBarra == 0) {
        porcentajeBarra = 0;
    }
    else {
        porcentajeBarra--;
        progreso.style.width = porcentajeBarra / 4 + "%";
    }
}

function subirBarra() {
    if (porcentajeBarra == 400) {
        if (id == 30) {
            irWeird();
        }
        else {
            tension.pause();
            cancelAnimationFrame(comprobar);
            clearInterval(cambiarPosicionChabal);
            contenedor.style.opacity = 0;
            epico.play();
            chabalMisterioso.classList.remove("mostrarAve");
            setTimeout(() => {
                carnadaLanzada.style.setProperty("opacity", "0", "important");
                contenedor.style.opacity = 0;
            }, 500)
            setTimeout(() => {
                grass.classList.add("bajarColinas");
                cardd.style.filter = "brightness(0)";
            }, 1000)
            setTimeout(() => {
                thisss.style.opacity = 1;
                girar();
            }, 2000)
            setTimeout(() => {
                cartitaShow.volume = 0.2;
                cartitaShow.play();
            }, 4000)
            datos[numeroThis].capturada = true;
            localStorage.setItem("aves", JSON.stringify(datos));
            gano = true;
        }


    }
    else {
        porcentajeBarra++;
        progreso.style.width = porcentajeBarra / 4 + "%";
    }
}

function moverBalanza(e) {
    if (e.repeat) return;
    cancelAnimationFrame(animacion);
    espacio = true;
    right.style.opacity = 1;
    left.style.opacity = 0;
    setTimeout(() => {
        right.style.opacity = 0;
    }, 1000)
    if (e.code === "Space") {
        actualizar();
    }
}


function volverBalanza(e) {
    if (e.repeat) return;
    cancelAnimationFrame(animacion2);
    left.style.opacity = 1;
    right.style.opacity = 0;
    setTimeout(() => {
        left.style.opacity = 0;
    }, 1000)
    espacio = false;
    if (e.code === "Space") {
        if (!espacio) {
            actualizarBajar();
        }
    }
}

function actualizar() {
    if (valor <= 70) {
        valor = valor + 1;
    }
    else {
        cancelAnimationFrame(animacion2);
    }
    barraDentro.style.left = valor + "%";
    animacion2 = requestAnimationFrame(actualizar);
}


function actualizarBajar() {
    if (valor >= 5) {
        valor = valor - 1;
    }
    else {
        cancelAnimationFrame(animacion);
    }
    barraDentro.style.left = valor + "%";
    animacion = requestAnimationFrame(actualizarBajar);
}



window.addEventListener("keydown", moverBalanza);
window.addEventListener("keyup", volverBalanza);
window.addEventListener("load", iniciar); 