console.log("Conexión con Javascript");

// CARRUSEL
const imagenes = [
    { src: "static/img/Soporte técnico en terreno.jpg", titulo: "Soporte técnico en terreno", color: "#a0a0a0" },
    { src: "static/img/Instalación de redes corporativas.png", titulo: "Instalación de redes corporativas", color: "#8c9eff" },
    { src: "static/img/Desarrollo de software a medida.jpg", titulo: "Desarrollo de software a medida", color: "#b9f6ca" },
    { src: "static/img/Ciberseguridad y protección de datos.jpg", titulo: "Ciberseguridad y protección de datos", color: "#ffe082" }
];

let indiceActual = 0;
function cambiarImagen(direccion) {
    indiceActual += direccion;
    if (indiceActual >= imagenes.length) indiceActual = 0;
    else if (indiceActual < 0) indiceActual = imagenes.length - 1;

    document.getElementById("tit-carr").innerText = imagenes[indiceActual].titulo;
    document.getElementById("box").style.backgroundColor = imagenes[indiceActual].color;
    document.getElementById("img-carr").src = imagenes[indiceActual].src;

    document.querySelectorAll(".punto").forEach((punto, index) => {
        punto.className = index === indiceActual ? "punto activo" : "punto";
    });
}

document.getElementById("izq").onclick = () => cambiarImagen(-1);
document.getElementById("der").onclick = () => cambiarImagen(1);

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

imgActual.forEach((img, i) => {
    img.addEventListener("mouseover", () => img.src = rutasHover[i]);
    img.addEventListener("mouseout", () => img.src = rutasNormal[i]);
});

// ME GUSTA
document.querySelectorAll(".like").forEach(boton => {
    boton.onclick = (e) => {
        e.stopPropagation();
        const countSpan = boton.querySelector(".count");
        const corazonSpan = boton.querySelector(".corazon");
        let count = parseInt(countSpan.innerText);

        if (boton.classList.contains("liked")) {
            count--;
            boton.classList.remove("liked");
            corazonSpan.innerText = "♡";
        } else {
            count++;
            boton.classList.add("liked");
            corazonSpan.innerText = "♥";
        }
        countSpan.innerText = count;
    };
});

// MODAL
const modal = document.getElementById("modal");
document.querySelectorAll(".t-proy").forEach(tarjeta => {
    tarjeta.onclick = () => {
        document.getElementById("m-tit").innerText = tarjeta.querySelector(".titulo-proy").innerText;
        document.getElementById("m-badge").innerText = tarjeta.querySelector(".badge").innerText;
        document.getElementById("m-info").innerText = tarjeta.querySelector(".info-oculta").innerText;
        document.getElementById("m-tech").innerText = tarjeta.querySelector(".tech-oculta").innerText;

        const rutaImg = tarjeta.querySelector(".img-proy").src;
        document.getElementById("m-img").innerHTML = `<img src="${rutaImg}">`;

        modal.className = "c-modal activo";
    };
});

document.getElementById("cerrar").onclick = () => {
    modal.className = "c-modal";
};