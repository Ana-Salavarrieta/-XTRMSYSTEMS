// PRODUCTOS

const cards = document.querySelectorAll(".producto-card");

const overlay = document.getElementById("detalle-producto");

const contenedores = [
    document.querySelector(".detalle-container"),
    document.querySelector(".detalle-container-2"),
    document.querySelector(".detalle-container-3")
];

// ABRIR MODAL

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

// BOTONES CERRAR

const botonesCerrar = document.querySelectorAll(".cerrar");

botonesCerrar.forEach(btn => {

    btn.addEventListener("click", cerrarModal);
});

// CERRAR HACIENDO CLICK FUERA

overlay.addEventListener("click", (e) => {

    if (e.target === overlay) {
        cerrarModal();
    }
});

// CERRAR CON ESC

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {
        cerrarModal();
    }
});

// FUNCIÓN CERRAR

function cerrarModal() {

    overlay.classList.remove("active");

    document.body.style.overflow = "auto";

    contenedores.forEach(container => {
        container.classList.remove("active");
    });
}