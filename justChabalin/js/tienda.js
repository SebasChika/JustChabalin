let lista = document.getElementById("this");
let volver = document.getElementById("volver");
let pagar = document.getElementById("pagar");
let other = document.getElementById("other");
let noMoney = document.getElementById("noMoney");
let pagado = false;
pagar.addEventListener("click", pagarCuenta);
volver.addEventListener("click", volverr);
let id;
let svg = `
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
        <circle cx="12" cy="12" r="10" stroke="#000000" stroke-width="2"></circle>
        <path
            d="M15 9.94728C14.5 9.3 13.8 8.5 12 8.5C10.2 8.5 9 9.51393 9 9.94728C9 10.3806 9.06786 10.9277 10 11.5C10.7522 11.9618 12.6684 12.0439 13.5 12.5C14.679 13.1467 14.8497 13.8202 14.8497 14.0522C14.8497 14.6837 13.4175 15.4852 12 15.5C10.536 15.5153 9.5 14.7 9 14.0522"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round">
        </path>
        <path
            d="M12 7V17"
            stroke="#000000"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round">
        </path>
    </g>
</svg>
`;
let a = 0.4;
let productos = new Map();
let cantidadItems = 0;
let totall = 0;
let negro = document.getElementById("negro");
let dineroActual = document.getElementById("dineroActual");
let dollar = document.getElementById("dollar");
let cantidadProductos = 0;
let cantidad = 1;
let abrir = document.getElementById("abrir");
abrir.volume = 0.2;
let totalHTML = document.getElementById("total");
let cartaActual;
let menuTheme = document.getElementById("theme");
menuTheme.volume = 0.4;
let dineroBase = JSON.parse(localStorage.getItem("dinero"));
let guardar = JSON.parse(localStorage.getItem("aves"));

let botones = document.querySelectorAll(".añadir");

for (let boton of botones) {
    boton.addEventListener("click", añadir);
}

let productosGuardados = [];

function añadir(e) {
    cartaActual = e.target.closest(".cuadro");
    id = Number(cartaActual.id.slice(6));
    cantidadProductos++;
    cantidadItems = productos.size;
    cantidad = parseInt(cartaActual.querySelector("input").value) || 1;
    producto = cartaActual.querySelector("h1").textContent;
    if (!productos.has(producto) && productos.size >= 12) {
        return;
    }
    precio = cartaActual.querySelector("p").textContent;
    totall += parseInt(precio.slice(1)) * cantidad;
    if (productos.has(producto)) {
        productos.set(producto, productos.get(producto) + cantidad);
    } else {
        productos.set(producto, cantidad);
    }
    const existente = productosGuardados.find(p => p.id === id);
    if (existente) {
        existente.cantidad += cantidad;
    } else {
        productosGuardados.push({
            id: id,
            cantidad: cantidad
        });
    }
    playHoverSound2();
    lista.innerHTML = "";
    for (let [nombre, cant] of productos) {
        lista.innerHTML += nombre + " x" + cant + "<br>";
    }
    total.innerHTML = "TOTAL: " + totall;
}

function playHoverSound() {
    const sonido = dollar.cloneNode();
    sonido.volume = dollar.volume;
    sonido.play();
}

function playHoverSound2() {
    const sonido = other.cloneNode();
    sonido.volume = other.volume;
    sonido.play();
}


function pagarCuenta() {
    if (pagado) return;
    pagado = true;
    if (productos.size === 0) return;
    else {
        if (dineroBase < totall) {
            noMoney.play();
        }
        else {
            playHoverSound();
            dineroBase = dineroBase - totall;
            dineroActual.innerHTML = dineroBase + svg;
            localStorage.setItem("dinero", JSON.stringify(dineroBase));
            for (let i = 0; i < productosGuardados.length; i++) {
                guardar[productosGuardados[i].id - 1].carnadaCantidad += productosGuardados[i].cantidad;
            }
            localStorage.setItem("aves", JSON.stringify(guardar));
        }
    }
}


function iniciar() {
    dineroActual.innerHTML = dineroBase + svg;
    negro.classList.add("fadeOutNegro");
    menuTheme.play();
    abrir.play();
}

function volverr() {
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