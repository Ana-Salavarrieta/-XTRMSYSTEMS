document.querySelectorAll('.producto-card').forEach((card, index) => {
    card.addEventListener('click', () => {
        // Mostramos la sección padre
        const detalleSeccion = document.getElementById('detalle-producto');
        detalleSeccion.style.display = 'block';

        // Ocultamos todos los contenedores de info
        document.querySelectorAll('[class^="detalle-container"]').forEach(div => {
            div.classList.remove('active');
        });

        // Mostramos el que corresponde (1, 2 o 3)
        const target = document.querySelector(`.detalle-container${index === 0 ? '' : '-' + (index + 1)}`);
        if(target) target.classList.add('active');

        // Scroll suave al detalle
        detalleSeccion.scrollIntoView({ behavior: 'smooth' });
    });
});