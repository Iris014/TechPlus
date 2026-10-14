console.log("Conexión con Javascript");

// CARRUSEL PRINCIPAL
const imagenes = [
    {
        titulo: "Soporte técnico en terreno",
        color: "#a0a0a0"
    },
    {
        titulo: "Instalación de redes corporativas",
        color: "#8c9eff"
    },
    {
        titulo: "Desarrollo de software a medida",
        color: "#b9f6ca"
    },
    {
        titulo: "Ciberseguridad y protección de datos",
        color: "#ffe082"
    }
];

let indiceActual = 0;

// 3. Función principal
function cambiarImagen(direccion) {
    indiceActual = indiceActual + direccion;
    if (indiceActual >= imagenes.length) {
        indiceActual = 0;
    }
    else if (indiceActual < 0) {
        indiceActual = imagenes.length - 1;
    }
    const carruselBox = document.getElementById("carruselBox");
    const carruselTitulo = document.getElementById("carruselTitulo");
    if (carruselTitulo) {
        carruselTitulo.textContent = imagenes[indiceActual].titulo;
    }
    if (carruselBox) {
        carruselBox.style.backgroundColor = imagenes[indiceActual].color;
    }
    const puntos = document.querySelectorAll(".punto");
    puntos.forEach(function (punto, index) {
        if (index === indiceActual) {
            punto.className = "punto activo";
        } else {
            punto.className = "punto";
        }
    });
}

// Botones del carrusel
const btnIzq = document.getElementById("carruselIzq");
const btnDer = document.getElementById("carruselDer");

if (btnIzq) {
    btnIzq.onclick = function () {
        cambiarImagen(-1);
    };
}

if (btnDer) {
    btnDer.onclick = function () {
        cambiarImagen(1);
    };
}

// Clic en los puntos inferiores para saltar directamente a una posición
const puntos = document.querySelectorAll(".punto");
puntos.forEach(function (punto, index) {
    punto.onclick = function () {
        indiceActual = index;
        cambiarImagen(0);
    };
});


// CONTEO ME GUSTA
const botonesLike = document.querySelectorAll(".btn-like");

botonesLike.forEach(function (boton) {
    boton.onclick = function (e) {
        e.stopPropagation();

        let countSpan = boton.querySelector(".count-like");
        let corazonSpan = boton.querySelector(".corazon");
        let contadorActual = parseInt(boton.getAttribute("data-count"));

        if (boton.className.includes("liked")) {
            contadorActual = contadorActual - 1;
            boton.className = "btn-like";
            corazonSpan.textContent = "♡";
        } else {
            contadorActual = contadorActual + 1;
            boton.className = "btn-like liked";
            corazonSpan.textContent = "♥";
        }

        boton.setAttribute("data-count", contadorActual);
        countSpan.textContent = contadorActual;
    };
});


// MODAL
const tarjetasProyecto = document.querySelectorAll(".tarjeta-proyecto");
const modalProyecto = document.getElementById("modalProyecto");
const btnCerrarModal = document.getElementById("btnCerrarModal");

const modalTitulo = document.getElementById("modalTitulo");
const modalCategoria = document.getElementById("modalTag");
const modalDescripcion = document.getElementById("modalDescripcion");
const modalTech = document.getElementById("modalTech");
const modalImagen = document.getElementById("modalImagen");

tarjetasProyecto.forEach(function (tarjeta) {
    tarjeta.onclick = function () {
        const titulo = tarjeta.getAttribute("data-titulo");
        const categoria = tarjeta.getAttribute("data-categoria");
        const descripcion = tarjeta.getAttribute("data-descripcion");
        const tech = tarjeta.getAttribute("data-tech");

        if (modalTitulo) modalTitulo.textContent = titulo;
        if (modalCategoria) modalCategoria.textContent = categoria;
        if (modalDescripcion) modalDescripcion.textContent = descripcion;
        if (modalTech) modalTech.textContent = tech;
        if (modalImagen) modalImagen.textContent = "Vista previa: " + titulo;

        if (modalProyecto) {
            modalProyecto.className = "modal-overlay activo";
        }
    };
});

if (btnCerrarModal && modalProyecto) {
    btnCerrarModal.onclick = function () {
        modalProyecto.className = "modal-overlay";
    };

    modalProyecto.onclick = function (e) {
        if (e.target === modalProyecto) {
            modalProyecto.className = "modal-overlay";
        }
    };
}


// BUSCADOR
const inputBuscar = document.getElementById("inputBuscar");
const btnBuscar = document.getElementById("btnBuscar");

if (btnBuscar && inputBuscar) {
    btnBuscar.onclick = function () {
        const texto = inputBuscar.value;
        if (texto.length > 0) {
            console.log("Buscando: " + texto);
        }
    };
}