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

        overlay.classList.add("active");

        document.body.style.overflow = "hidden";

        // ocultar todos //

        contenedores.forEach(container => {

            container.classList.remove("active");

        });

        // mostrar correspondiente //

        contenedores[index].classList.add("active");

    });

});

// botones cerrar //

const botonesCerrar = document.querySelectorAll(".cerrar");

botonesCerrar.forEach(btn => {

    btn.addEventListener("click", cerrarModal);

});

// cerrar fuera //

overlay.addEventListener("click", (e) => {

    if (e.target === overlay) {

        cerrarModal();

    }

});

// cerrar esc //

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

// contador //

const contadores = document.querySelectorAll(".contador");

contadores.forEach(contador => {

    const btnMenos = contador.querySelector(".menos");

    const btnMas = contador.querySelector(".mas");

    const cantidad = contador.querySelector(".cantidad");

    let numero = 1;

    // sumar //

    btnMas.addEventListener("click", () => {

        numero++;

        cantidad.textContent = numero;

    });

    // restar //

    btnMenos.addEventListener("click", () => {

        if (numero > 1) {

            numero--;

            cantidad.textContent = numero;

        }

    });

});

// estrellas //

const productos = document.querySelectorAll(".producto-card");

productos.forEach(producto => {

    const estrellaVacia = producto.querySelector(".estrella-forma");

    const estrellaLlena = producto.querySelector(".estrella-rellena");

    // iniciar //

    estrellaLlena.style.display = "none";

    // seleccionar //

    estrellaVacia.addEventListener("click", (e) => {

        e.stopPropagation();

        estrellaVacia.style.display = "none";

        estrellaLlena.style.display = "block";

    });

    // quitar seleccion //

    estrellaLlena.addEventListener("click", (e) => {

        e.stopPropagation();

        estrellaLlena.style.display = "none";

        estrellaVacia.style.display = "block";

    });

});