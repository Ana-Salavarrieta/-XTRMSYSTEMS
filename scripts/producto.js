// tarjetas productos

document.querySelectorAll('.producto-card').forEach((card, index) => {

    card.addEventListener('click', () => {

        // mostrar overlay
        const detalleSeccion = document.getElementById('detalle-producto');

        detalleSeccion.style.display = 'block';

        // ocultar todos
        document.querySelectorAll(
            '.detalle-container, .detalle-container-2, .detalle-container-3'
        ).forEach(div => {

            div.classList.remove('active');

        });

        // mostrar solo el correcto
        const clases = [
            '.detalle-container',
            '.detalle-container-2',
            '.detalle-container-3'
        ];

        const target = document.querySelector(clases[index]);

        if (target) {

            target.classList.add('active');

        }

        // bloquear scroll fondo
        document.body.style.overflow = 'hidden';

    });

});

// cerrar detalle

const cerrar = document.querySelector('.cerrar');

cerrar.addEventListener('click', () => {

    document.getElementById('detalle-producto').style.display = 'none';

    // ocultar todos otra vez
    document.querySelectorAll(
        '.detalle-container, .detalle-container-2, .detalle-container-3'
    ).forEach(div => {

        div.classList.remove('active');

    });

    // activar scroll normal
    document.body.style.overflow = 'auto';

});

// cerrar dando click afuera

document.getElementById('detalle-producto').addEventListener('click', (e) => {

    if (e.target.id === 'detalle-producto') {

        document.getElementById('detalle-producto').style.display = 'none';

        document.querySelectorAll(
            '.detalle-container, .detalle-container-2, .detalle-container-3'
        ).forEach(div => {

            div.classList.remove('active');

        });

        document.body.style.overflow = 'auto';

    }

});