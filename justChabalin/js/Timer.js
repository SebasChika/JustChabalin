let numerosArray = [
    "imagenes/minijuegos/numeros/0.png",
    "imagenes/minijuegos/numeros/1.png",
    "imagenes/minijuegos/numeros/2.png",
    "imagenes/minijuegos/numeros/3.png",
    "imagenes/minijuegos/numeros/4.png",
    "imagenes/minijuegos/numeros/5.png",
    "imagenes/minijuegos/numeros/6.png",
    "imagenes/minijuegos/numeros/7.png",
    "imagenes/minijuegos/numeros/8.png",
    "imagenes/minijuegos/numeros/9.png"
]
let posicion4 = 0;
let posicion3 = 0;
let posicion2 = 0;
let posicion = 0;
let volver = document.getElementById("volver");
volver.addEventListener("click", volverMenu);
let moni = document.getElementById("moni");
let button = document.getElementById("button");
let moreMoney = document.getElementById("moreMoney");
let intervalo;
let segundo4 = document.getElementById("segundo4");
let thing = document.getElementById("thing");
let segundo3 = document.getElementById("segundo3");
let segundo2 = document.getElementById("segundo2");
let segundo = document.getElementById("segundo");
let buttonRed = document.getElementById("buttonRed");
let segundoPrueba = document.getElementById("segundoPrueba");
let segundoPrueba2 = document.getElementById("segundoPrueba2");
let theme = document.getElementById("theme");
theme.volume = 0.4;
let a = 0.4;
let segundoPrueba3 = document.getElementById("segundoPrueba3");
let negro = document.getElementById("negro");
let clickeado = false;
let numeroSegundo = Math.floor(Math.random() * 3);
let numeroSegundo2 = Math.floor(Math.random() * 10);
let numeroSegundo3 = Math.floor(Math.random() * 7);
let sumaMoney = 0;
let verificado = false;
let dinero = JSON.parse(localStorage.getItem("dinero"));
buttonRed.addEventListener("click", precionado);
let fail = document.getElementById("fail");

function precionado() {
    buttonRed.src = "imagenes/minijuegos/buttonWith.png";
    setTimeout(() => {
        buttonRed.src = "imagenes/minijuegos/buttonWithouth.png";
    }, 200);
    if (clickeado) {
        clearInterval(intervalo);
        button.play();
        if (verificado) return;
        verificar();
    } else {
        button.play();
        clickeado = true;
        console.log("entre");
        intervalo = setInterval(() => {
            posicion4++;
            segundo.src = numerosArray[posicion];
            segundo3.src = numerosArray[posicion3];
            segundo4.src = numerosArray[posicion4];
            segundo2.src = numerosArray[posicion2];
            if (posicion4 == 9) {
                posicion4 = 0;
                posicion3++;
            }
            if (posicion3 == 7) {
                posicion3 = 0;
                posicion2++;
                thing.play();
            }

            if (posicion2 == 10) {
                posicion2 = 0;
                posicion++;
            }
            if (posicion == 6) {
                alert("te pasaste");
                clearInterval(intervalo);
            }
        }, 23);
    }

}

function volverMenu() {
    negro.classList.remove("fadeOutNegro");
    negro.classList.add("fadeInNegro");

    const fade = setInterval(() => {

        a -= 0.05;

        if (a <= 0) {
            theme.volume = 0;
            clearInterval(fade);
            window.location.href = "minigames.html";
            return;
        }

        theme.volume = a;


    }, 300);

}


function verificar() {
    verificado = true;
    let objetivo = (numeroSegundo * 10 + numeroSegundo2) * 100 + numeroSegundo3 * 10;
    let obtenido = (posicion * 10 + posicion2) * 100 + posicion3 * 10 + posicion4;

    let diferencia = Math.abs(objetivo - obtenido);

    console.log("Objetivo:", objetivo);
    console.log("Obtenido:", obtenido);
    console.log("Diferencia:", diferencia);

    if (diferencia == 0) {
        sumaMoney = 50;
    } else if (diferencia <= 5) {
        sumaMoney = 40;
    } else if (diferencia <= 10) {
        sumaMoney = 30;
    } else if (diferencia <= 25) {
        sumaMoney = 20;
    } else if (diferencia <= 80) {
        sumaMoney = 10;
    } else {
        sumaMoney = 0;
    }

    if (sumaMoney == 0) {
        const fade = setInterval(() => {

            a -= 0.05;

            if (a <= 0) {
                theme.volume = 0;
                clearInterval(fade);
                fail.play();
                moreMoney.innerHTML = "ni cerca...";
                moreMoney.classList.add("gettinMoney");
                return;
            }

            theme.volume = a;
        }, 300);
    }
    else {
        moreMoney.innerHTML = "+" + sumaMoney + "<img src='imagenes/minijuegos/coin.png'>";
        moreMoney.classList.add("gettinMoney");
        moni.play();
    }

    dinero += sumaMoney;
    localStorage.setItem("dinero", JSON.stringify(dinero));

}

function iniciar() {
    theme.play();
    negro.classList.add("fadeOutNegro");
    segundoPrueba.src = numerosArray[numeroSegundo];
    segundoPrueba2.src = numerosArray[numeroSegundo2];
    segundoPrueba3.src = numerosArray[numeroSegundo3];
}

window.addEventListener("load", iniciar);

