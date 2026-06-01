// producto.js

const cards = document.querySelectorAll(".producto-card");

const overlay = document.getElementById("detalle-producto");

const contenedores = [
    document.querySelector(".detalle-container"),
    document.querySelector(".detalle-container-2"),
    document.querySelector(".detalle-container-3")
];

// abrir modal al hacer click en cada card

cards.forEach((card, index) => {

    card.addEventListener("click", () => {

        // mostrar overlay centrado
        overlay.classList.add("active");

        // bloquear scroll del body
        document.body.style.overflow = "hidden";

        // ocultar todos
        contenedores.forEach(container => {
            container.classList.remove("active");
        });

        // mostrar el correspondiente
        if (contenedores[index]) {
            contenedores[index].classList.add("active");
        }
    });
});

// boton cerrar
const botonesCerrar = document.querySelectorAll(".cerrar");

botonesCerrar.forEach(btn => {

    btn.addEventListener("click", cerrarModal);
});

// Cerrar al hacer click fuera del contenedor

overlay.addEventListener("click", (e) => {

    if (e.target === overlay) {
        cerrarModal();
    }
});

// Cerrar con Escape

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {
        cerrarModal();
    }
});

// Función para cerrar modal

function cerrarModal() {

    overlay.classList.remove("active");

    document.body.style.overflow = "auto";

    contenedores.forEach(container => {
        container.classList.remove("active");
    });
}