let actual = localStorage.getItem("actual").replace(/^0+/, "");
let Dancing = document.getElementById("Dancing");
let favSvg = document.getElementById("favSvg");
let favorito = document.getElementById("favorito");
favorito.addEventListener("click", volverFavorito);
let voz = document.getElementById("voz");
voz.addEventListener("click", canto);
let volver = document.getElementById("volver");
let rarezaP = document.getElementById("rarezaP");
volver.addEventListener("click", volverAnterior);
let menuTheme = document.getElementById("menuTheme");
menuTheme.volume = 0.5;
let a = 0.5;
let name = document.getElementById("name");
let rarezaHtml = document.getElementById("rareza");
let rareza;
let tamaño = document.getElementById("tamaño");
let alimentacion = document.getElementById("alimentacion");
let habitad = document.getElementById("habitad");
let datos = JSON.parse(localStorage.getItem("aves"));
let tamaños = [
    "Tamaño: 22-33 cm",
    "Tamaño: 31-34 cm",
    "Tamaño: 5-10 cm",
    "Tamaño: 20-23 cm",
    "Tamaño: 13-15 cm",
    "Tamaño: 16-18 cm",
    "Tamaño: 21-25 cm",
    "Tamaño: 36-43 cm",
    "Tamaño: 56-74 cm",
    "Tamaño: 50-65 cm",
    "Tamaño: 13-14 cm",
    "Tamaño: 10-12 cm",
    "Tamaño: 38-41 cm",
    "Tamaño: 37-43 cm",
    "Tamaño: 25-30 cm",
    "Tamaño: 40-45 cm",
    "Tamaño: 54-67 cm",
    "Tamaño: 31-34 cm",
    "Tamaño: 120-145 cm",
    "Tamaño: 100-230 cm",
    "Tamaño: 35-38 cm",
    "Tamaño: 45-55 cm",
    "Tamaño: 25-29 cm",
    "Tamaño: 52-71 cm",
    "Tamaño: 11-13 cm",
    "Tamaño: 30 cm",
    "Tamaño: 90-100 cm",
    "Tamaño: 20 cm",
    "Tamaño: 85-95 cm",
    "Tamaño: 13-15 cm"
];

let alimentaciones = [
    "Alimentación: Semillas, granos y pequeños frutos.",
    "Alimentación: Semillas, granos y restos de comida.",
    "Alimentación: Granos, semillas e insectos.",
    "Alimentación: Insectos y pequeños frutos.",
    "Alimentación: Semillas e insectos.",
    "Alimentación: Frutos, semillas e insectos.",
    "Alimentación: Insectos, frutas y pequeños vertebrados.",
    "Alimentación: Insectos, frutas y semillas.",
    "Alimentación: Carroña.",
    "Alimentación: Plantas acuáticas, semillas e insectos.",
    "Alimentación: Insectos voladores.",
    "Alimentación: Néctar e insectos pequeños.",
    "Alimentación: Peces e insectos acuáticos.",
    "Alimentación: Semillas, frutas y brotes.",
    "Alimentación: Frutos, semillas e insectos.",
    "Alimentación: Granos, semillas e insectos.",
    "Alimentación: Insectos, frutos y carroña.",
    "Alimentación: Semillas y granos.",
    "Alimentación: Algas, crustáceos y pequeños invertebrados.",
    "Alimentación: Semillas, frutos e insectos.",
    "Alimentación: Semillas, frutos, flores e insectos.",
    "Alimentación: Semillas, frutos, nueces e insectos.",
    "Alimentación: Insectos, larvas, escarabajos y termitas.",
    "Alimentación: Lemmings, ratones, liebres y otras aves.",
    "Alimentación: Insectos, arañas y pequeños invertebrados.",
    "Alimentación: Galletas, migas de pan y cualquier cosa comestible.",
    "Alimentación: Peces, calamares y krill.",
    "Alimentación: Huevos (cerdos verdes).",
    "Alimentación: Semillas, frutas y galletas.",
    "Alimentación: Insectos y arañas."
];

let habitats = [
    "Hábitat: Parques, jardines, campos y bosques abiertos.",
    "Hábitat: Ciudades, plazas, parques y edificios.",
    "Hábitat: Granjas y corrales.",
    "Hábitat: Bosques abiertos, sabanas y zonas urbanas.",
    "Hábitat: Pastizales, cultivos y jardines.",
    "Hábitat: Bosques, jardines y parques.",
    "Hábitat: Bosques, parques y zonas urbanas.",
    "Hábitat: Ciudades, parques y campos abiertos.",
    "Hábitat: Bosques, montañas y zonas urbanas.",
    "Hábitat: Lagos, ríos, humedales y estanques.",
    "Hábitat: Campos abiertos y matorrales.",
    "Hábitat: Bosques, jardines y montañas.",
    "Hábitat: Ríos, lagos y manglares.",
    "Hábitat: Bosques, parques y zonas urbanas.",
    "Hábitat: Bosques templados y parques.",
    "Hábitat: Granjas y corrales.",
    "Hábitat: Bosques, montañas y ciudades.",
    "Hábitat: Parques, jardines y plazas.",
    "Hábitat: Lagunas, humedales y costas.",
    "Hábitat: Bosques tropicales y jardines.",
    "Hábitat: Bosques, sabanas y parques.",
    "Hábitat: Bosques tropicales y selvas.",
    "Hábitat: Praderas, campos abiertos y zonas agrícolas.",
    "Hábitat: Tundra ártica, costas heladas y regiones polares.",
    "Hábitat: Páramos andinos, matorrales y bosques de alta montaña.",
    "Hábitat: Ciudades, parques y cualquier lugar donde encuentre comida.",
    "Hábitat: Costas subantárticas, islas frías y océano Austral.",
    "Hábitat: Isla Piggy y escenarios de Angry Birds.",
    "Hábitat: Selvas y bosques de Minecraft.",
    "Hábitat: Bosques templados y matorrales."
];
let descripciones = [
    "Aunque muchos ni me notan, soy una de las aves más comunes de Colombia. Me encanta pasear por parques y jardines buscando algo para comer.",
    "Dicen que invadí las ciudades... yo prefiero decir que mejoré el vecindario. Si ves migas en el piso, probablemente ya voy hacia ellas.",
    "Todavía soy un pollito y todo me sorprende. Corro detrás de mi mamá convencido de que ella tiene respuesta para todo.",
    "No puedo quedarme quieto ni un segundo. Si un insecto vuela cerca de mí, ya es demasiado tarde para él.",
    "Soy pequeño, amarillo y canto como si estuviera dando un concierto. No me importa si alguien me escucha, yo disfruto el espectáculo.",
    "Con este plumaje azul es imposible pasar desapercibido. Me gusta posar entre las ramas como si supiera que todos me están mirando.",
    "Mi voz es más fuerte que mi tamaño. Si hay algo pasando cerca, seré el primero en anunciarlo a todo el barrio.",
    "Soy inteligente, curioso y un poquito travieso. Si dejas comida sola unos segundos... bueno, ya sabes quién fue.",
    "Puede que mi trabajo no sea el más elegante, pero alguien tiene que mantener limpia la naturaleza. Yo hago el trabajo que otros evitan.",
    "Nadar es mi especialidad. Caminar también... aunque algunos dicen que lo hago con mucho estilo y un poquito de torpeza.",
    "Mi color rojo hace que todos volteen a mirarme. No es mi culpa haber nacido tan llamativo.",
    "Parpadear y ya no estoy. Paso el día visitando flores porque el néctar nunca se toma solo.",
    "La paciencia es mi superpoder. Espero el momento perfecto... y cuando menos lo esperan, ¡pez atrapado!",
    "Hablo mucho, aprendo rápido y siempre tengo algo que decir. A veces hasta repito lo que escucho sin querer.",
    "Soy curioso por naturaleza. Si hay algo nuevo en el bosque, seguramente ya fui el primero en investigarlo.",
    "Todos creen que solo pongo huevos, pero también soy una mamá muy dedicada. Mis pollitos siempre son mi prioridad.",
    "Dicen que soy una de las aves más inteligentes. Yo no lo niego... pero tampoco necesito presumirlo.",
    "Mi color blanco hace que muchos me relacionen con la paz. Yo solo intento vivir tranquilo y disfrutar del vuelo.",
    "¿Una pata? ¿La otra? Así camino yo. Y sí, nací con estas piernas tan largas, no son zancos.",
    "Cuando abro mi cola, el espectáculo comienza. Admito que me gusta llamar un poquito la atención.",
    "Soy muy sociable y nunca me falta energía. Si me ves moviendo la cresta, seguramente estoy de buen humor.",
    "Mi cresta es mi peinado favorito y no necesito espejo para saber que luce increíble.",
    "Con mi pico largo encuentro insectos escondidos donde nadie más buscaría. La paciencia siempre tiene recompensa.",
    "Mi hogar está entre el hielo y la nieve. El frío no me molesta... de hecho, ahí es donde mejor me siento.",
    "Vivo en lo más alto de los páramos. El aire es frío, pero eso nunca me ha impedido seguir cantando.",
    "Nadie sabe muy bien de dónde salí, pero siempre aparezco cuando menos lo esperan. Supongo que ese es mi talento.",
    "Mi traquilidad invade cada lugar donde voy, aunque no sepas por que...",
    "No le tengo miedo a los cerdos verdes ni a salir disparado por los aires. Para eso nací.",
    "Vengo de un mundo hecho de bloques, pero eso no significa que no sepa volar con estilo.",
    "Puede que sea pequeño, pero mi pecho rosado roba miradas donde quiera que voy. A veces menos es más."
];
let nombreCientifico = document.getElementById("nombreCientifico");
let nombresCientificos = [
    "Zenaida auriculata",
    "Columba livia",
    "Gallus gallus domesticus",
    "Tyrannus melancholicus",
    "Sicalis flaveola",
    "Thraupis episcopus",
    "Pitangus sulphuratus",
    "Quiscalus mexicanus",
    "Coragyps atratus",
    "Anas platyrhynchos",
    "Pyrocephalus rubinus",
    "Colibri coruscans",
    "Megaceryle torquata",
    "Psittacula krameri",
    "Cyanocitta cristata",
    "Gallus gallus domesticus",
    "Corvus corax",
    "Columba livia",
    "Phoenicopterus roseus",
    "Pavo cristatus",
    "Eolophus roseicapilla",
    "Cacatua galerita",
    "Upupa epops",
    "Bubo scandiacus",
    "Oxypogon guerinii",
    "Damnus avis ficticius",
    "Aptenodytes patagonicus",
    "Cardinalis cardinalis",
    "Ara macao",
    "Petroica rodinogaster"
];
function canto() {
    let actualCanto = new Audio("audio/cantos/" + actual + ".mp3");

    menuTheme.volume = 0.1;

    actualCanto.addEventListener("ended", () => {
        menuTheme.volume = 0.5;
    });

    actualCanto.play();
}

function volverFavorito() {
    favSvg.style.fill = "rgb(209, 184, 101)";
    datos[actual - 1].favorito = true;
    localStorage.setItem("aves", JSON.stringify(datos));
}


function volverAnterior() {
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

function irNext() {
    window.location.href = "ChabalinPedia.html";;
}

function iniciar() {
    if (datos[actual - 1].favorito != false) {
        favSvg.style.fill = "rgb(209, 184, 101)";
    }
    if (actual <= 5) {
        rareza = "común";
        rarezaHtml.style.background = "radial-gradient(circle, #d5e0eb 0%, #8ba4bf 100%)";
    } else if (actual <= 10) {
        rareza = "raro";
        rarezaHtml.style.background = "radial-gradient(circle, #3f8a5e 0%, #154728 100%)";
    } else if (actual <= 17) {
        rareza = "legendario";
        rarezaHtml.style.background = "radial-gradient(circle, #fff3a0 0%, #e2d346 100%)";
    } else if (actual <= 29) {
        rareza = "mítico";
        rarezaHtml.style.background = "radial-gradient(circle, #8a3a3a 0%, #471818 100%)";
    } else {
        rareza = "único";
        rarezaHtml.style.background = `radial-gradient(circle,
        #ff4d4d 0%,
        #ff9a3c 18%,
        #ffe44d 34%,
        #5cff5c 50%,
        #4dc3ff 66%,
        #6f5cff 82%,
        #d24dff 100%)`;
    }
    tamaño.innerHTML = tamaños[actual - 1];
    alimentacion.innerHTML = alimentaciones[actual - 1];
    habitad.innerHTML = habitats[actual - 1];
    rarezaP.innerHTML = "Rareza: " + rareza;
    rarezaHtml.innerHTML = rareza + "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 32' fill='#edd7bd'><polygon points='27.865 31.83 17.615 26.209 7.462 32.009 9.553 20.362 0.99 12.335 12.532 10.758 17.394 0 22.436 10.672 34 12.047 25.574 20.22' /></svg>";
    menuTheme.play();
    negro.classList.add("fadeOutNegro");
    if (actual == 19) {
        Dancing.classList.add("upGei");
    }
    if (actual == 20 || actual == 16 || actual == 27) {
        Dancing.style.transform = ("scale(0.85)");
        Dancing.style.bottom = "-50px";
        Dancing.classList.add("upReal");
    }
    else {
        Dancing.style.transform = ("");
        Dancing.style.bottom = "";
        Dancing.classList.add("up");
    }
    descripcion.innerHTML = descripciones[actual - 1];
    nombreCientifico.innerHTML = nombresCientificos[actual - 1];
    Dancing.src = "imagenes/chabalinPedia/chabalinAnimation/" + actual + ".gif"
    name.src = "imagenes/description/ownName/" + actual + ".png"
}

window.addEventListener("load", iniciar);