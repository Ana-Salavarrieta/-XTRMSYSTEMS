
/* inicio js */

console.log("carruseles listos");

/* carruseles */
const carruseles = document.querySelectorAll(".carrusel-container");

/* pausar animacion cuando paso el mouse */
carruseles.forEach((carrusel) => {

    carrusel.addEventListener("mouseenter", () => {
        carrusel.style.animationPlayState = "paused";
    });

    /* reanudar animacion cuando saco el mouse */
    carrusel.addEventListener("mouseleave", () => {
        carrusel.style.animationPlayState = "running";
    });

});

/* efecto con scroll */
window.addEventListener("scroll", () => {

    let scroll = window.scrollY;

    carruseles.forEach((carrusel, index) => {

        let speed = 0.001 + index * 0.0005;

        carrusel.style.transform = `rotate(${scroll * speed}deg)`;

    });

});

/* fin js */