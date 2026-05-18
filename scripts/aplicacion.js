// contenedores
const carruselIzquierda = document.getElementById("carruselIzquierda");
const carruselDerecha = document.getElementById("carruselDerecha");



// movimiento scroll
window.addEventListener("scroll", () => {

    // posicion scroll
    const scroll = window.scrollY;



    // izquierda sube
    carruselIzquierda.style.transform =
        `translateY(-${scroll * 0.8}px)`;



    // derecha baja
    carruselDerecha.style.transform =
        `translateY(${scroll * 0.8}px)`;

});