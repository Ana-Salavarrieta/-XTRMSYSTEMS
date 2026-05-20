// productos //

const cards = document.querySelectorAll(".producto-card");

const overlay = document.getElementById("detalle-producto");

const contenedores = [

    document.querySelector(".detalle-container"),

    document.querySelector(".detalle-container-2"),

    document.querySelector(".detalle-container-3")

];

// abrir modal //

cards.forEach((card, index) => {

    card.addEventListener("click", () => {

        // mostrar overlay //

        overlay.classList.add("active");

        // bloquear scroll //

        document.body.style.overflow = "hidden";

        // ocultar todos los contenedores //

        contenedores.forEach(container => {

            container.classList.remove("active");

        });

        // mostrar el correspondiente //

        if (contenedores[index]) {

            contenedores[index].classList.add("active");

        }

    });

});

// botones cerrar //

const botonesCerrar = document.querySelectorAll(".cerrar");

botonesCerrar.forEach(btn => {

    btn.addEventListener("click", cerrarModal);

});

// cerrar haciendo click fuera //

overlay.addEventListener("click", (e) => {

    if (e.target === overlay) {

        cerrarModal();

    }

});

// cerrar con esc //

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        cerrarModal();

    }

});

// funcion cerrar //

function cerrarModal() {

    overlay.classList.remove("active");

    document.body.style.overflow = "auto";

    contenedores.forEach(container => {

        container.classList.remove("active");

    });

}