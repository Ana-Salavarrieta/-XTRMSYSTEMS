const eje = document.querySelector('.rueda-eje');
const imagenes = document.querySelectorAll('.rueda-eje img');
let anguloActual = 0;

window.addEventListener('wheel', (evento) => {
  evento.preventDefault();

  anguloActual += evento.deltaY * 0.15; 
  
  eje.style.transform = `rotateY(${-anguloActual}deg)`;

  imagenes.forEach((img) => {
    const index = parseFloat(img.style.getPropertyValue('--index'));
    const anguloImagen = (index * 45) - anguloActual;
    const coseno = Math.cos(anguloImagen * Math.PI / 180);
    
    if (coseno > 0) {
      img.style.opacity = Math.pow(coseno, 2);
    } else {
      img.style.opacity = 0;
    }
  });
}, { passive: false });