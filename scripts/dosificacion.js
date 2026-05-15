// botones categorias//
const botones = document.querySelectorAll(".categoria-btn");

// elementos html//
const titulo = document.getElementById("titulo-producto");

const imagen = document.getElementById("imagen-producto");

const slider = document.getElementById("slider");

const valorSlider = document.getElementById("valor-slider");

const resultado = document.getElementById("resultado-ml");

const ruedaSelect = document.getElementById("rueda-select");


// actualizar valor del slider//
slider.addEventListener("input", () => {

    valorSlider.textContent = slider.value;

    calcularResultado();

});


// funcion para calcular el resultado//
function calcularResultado(){

    // convertir valor a numero//
    const valor = Number(slider.value);

    // detectar boton activo//
    const botonActivo = document.querySelector(".categoria-btn.active");

    // obtener tipo//
    const tipo = botonActivo.dataset.tipo;

    let ml = 0;


    // patinetas//
    if(tipo === "patineta"){

        ml = valor * 3;
    }

    // motos//
    if(tipo === "moto"){

        ml = valor * 5;
    }

    // bicicletas//
    if(tipo === "bicicleta"){

        ml = valor * 4;
    }

    // mostrar resultado
    resultado.textContent = `${ml} ml`;
}


// recorrer botones//
botones.forEach(boton => {

    // evento click//
    boton.addEventListener("click", () => {

        // quitar active//
        botones.forEach(btn => {

            btn.classList.remove("active");

        });

        // agregar active
        boton.classList.add("active");

        // obtener tipo
        const tipo = boton.dataset.tipo;


        // patinetas//

        if(tipo === "patineta"){

            // cambiar titulo//
            titulo.textContent = "Patineta";

            // cambiar imagen//
            imagen.src = "../multimedia/patineta.png";

            // cambiar slider
            slider.min = 10;

            slider.max = 50;

            slider.value = 20;

            // mostrar valor//
            valorSlider.textContent = 20;

            // cambiar ruedas//
            ruedaSelect.innerHTML = `

                <option>8"</option>

                <option>8.5"</option>

                <option>9"</option>

            `;
        }


        //motos//

        if(tipo === "moto"){

            // cambiar titulo//
            titulo.textContent = "Moto";

            // cambiar imagen//
            imagen.src = "../multimedia/Llanta moto.png";

            // cambiar slider//
            slider.min = 50;

            slider.max = 200;

            slider.value = 90;

            // mostrar valor//
            valorSlider.textContent = 90;

            // cambiar ruedas//
            ruedaSelect.innerHTML = `

                <option>120/70</option>

                <option>180/55</option>

                <option>200/55</option>

            `;
        }


        //  bicicletas//

        if(tipo === "bicicleta"){

            // cambiar titulo//
            titulo.textContent = "Bicicleta";

            // cambiar imagen//
            imagen.src = "../multimedia/bicicleta.png";

            // cambiar slider//
            slider.min = 20;

            slider.max = 80;

            slider.value = 40;

            // mostrar valor//
            valorSlider.textContent = 40;

            // cambiar ruedas//
            ruedaSelect.innerHTML = `

                <option>29"</option>

                <option>27.5"</option>

                <option>26"</option>

            `;
        }

        // recalcular resultado//
        calcularResultado();

    });

});


// resultado inicial//
calcularResultado();