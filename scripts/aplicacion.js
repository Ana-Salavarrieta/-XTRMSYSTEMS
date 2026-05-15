window.addEventListener("scroll", () => {

    let scroll = window.scrollY;

    const imagenes = document.querySelectorAll(".rueda-eje-1 img");

    imagenes.forEach((img, index) => {

        let velocidad = (index + 1) * 0.05;

        img.style.transform = `
            rotate(${scroll * velocidad}deg)
            translateY(${scroll * velocidad}px)
            scale(${1 + scroll * 0.0003})
        `;
    });

});