console.log("Conexión con Javascript");

// CARRUSEL
const imagenes = [
    {src: "static/img/Soporte técnico en terreno.jpg",
    titulo: "Soporte técnico en terreno",
    color: "#a0a0a0"},

    {src: "static/img/Instalación de redes corporativas.png",
    titulo: "Instalación de redes corporativas",
    color: "#8c9eff"},

    {src: "static/img/Desarrollo de software a medida.jpg",
    titulo: "Desarrollo de software a medida",
    color: "#b9f6ca"},

    {src: "static/img/Ciberseguridad y protección de datos.jpg",
    titulo: "Ciberseguridad y protección de datos",
    color: "#ffe082"}
    ];

let indiceActual = 0;
function cambiarImagen(direccion) {
    indiceActual = indiceActual + direccion;
    if (indiceActual >= imagenes.length) {
        indiceActual = 0;
    } else if (indiceActual < 0) {
        indiceActual = imagenes.length - 1;
    }

    document.getElementById("tit-carr").innerText = imagenes[indiceActual].titulo;
    document.getElementById("box").style.backgroundColor = imagenes[indiceActual].color;
    document.getElementById("img-carr").src = imagenes[indiceActual].src;

    const puntos = document.querySelectorAll(".punto");
    for (let index = 0; index < puntos.length; index++) {
        const punto = puntos[index];
        if (index === indiceActual) {
            punto.className = "punto activo";
        } else {
            punto.className = "punto";
        }
    }
} //

const btnIzq = document.getElementById("izq");
if (btnIzq) {
    btnIzq.onclick = function () {
        cambiarImagen(-1);
    };
}

const btnDer = document.getElementById("der");
if (btnDer) {
    btnDer.onclick = function () {
        cambiarImagen(1);
    };
}

// IMAGEN HOVER
const imgActual = document.querySelectorAll(".img-normal");
const rutasHover = [
    "static/images/Soporte técnico.jpg",
    "static/images/Redes y conectividad.png",
    "static/images/Desarrollo web.jpg",
    "static/images/Seguridad informática.jpg"
];
const rutasNormal = [
    "static/images/1-soporte-tecnico-informatico-por-que-es-importante-para-la-productividad-empresarial.png",
    "static/images/2-Que-es-una-instalacion-de-redes-1024x566.jpg.png",
    "static/images/3-diferencia-diseno-web-desarrollo-web.png",
    "static/images/4-principios-de-la-seguridad-informatica-y-su-implementacion1.png"
];

for (let i = 0; i < imgActual.length; i++) {
    const img = imgActual[i];
    img.onmouseover = function () {
        img.src = rutasHover[i];
    };
    img.onmouseout = function () {
        img.src = rutasNormal[i];
    };
}

// ME GUSTA
const botonesLike = document.querySelectorAll(".like");
for (let i = 0; i < botonesLike.length; i++) {
    const boton = botonesLike[i];
    boton.onclick = function (e) {
        e.stopPropagation();
        const countSpan = boton.querySelector(".count");
        const corazonSpan = boton.querySelector(".corazon");
        let count = parseInt(countSpan.innerText);

        if (boton.className === "like liked") {
            count--;
            boton.className = "like";
            corazonSpan.innerText = "♡";
        } else {
            count++;
            boton.className = "like liked";
            corazonSpan.innerText = "♥";
        }
        countSpan.innerText = count;
    };
}

// MODAL
const modal = document.getElementById("modal");
const tarjetasProyecto = document.querySelectorAll(".t-proy");

for (let i = 0; i < tarjetasProyecto.length; i++) {
    const tarjeta = tarjetasProyecto[i];
    tarjeta.onclick = function () {
        document.getElementById("m-tit").innerText = tarjeta.querySelector(".titulo-proy").innerText;
        document.getElementById("m-badge").innerText = tarjeta.querySelector(".badge").innerText;
        document.getElementById("m-info").innerText = tarjeta.querySelector(".info-oculta").innerText;
        document.getElementById("m-tech").innerText = tarjeta.querySelector(".tech-oculta").innerText;

        const rutaImg = tarjeta.querySelector(".img-proy").src;
        document.getElementById("m-img").innerHTML = '<img src="' + rutaImg + '">';

        if (modal) {
            modal.className = "c-modal activo";
        }
    };
}

const btnCerrar = document.getElementById("cerrar");
if (btnCerrar) {
    btnCerrar.onclick = function () {
        if (modal) {
            modal.className = "c-modal";
        }
    };
}