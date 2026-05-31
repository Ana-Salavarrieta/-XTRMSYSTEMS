const btnMostrar = document.getElementById('mostrar')
const resumen = document.getElementById('resumen')

if (window.innerWidth <= 768) {
    btnMostrar.addEventListener('click', () => {
        resumen.style.display == 'block' ? resumen.style.display = 'none' : resumen.style.display = 'block'

        if (resumen.style.display == 'block') {
            btnMostrar.style.borderBottomLeftRadius = '0'
            btnMostrar.style.borderBottomRightRadius = '0'
        } else {
            btnMostrar.style.borderBottomLeftRadius = '12px'
            btnMostrar.style.borderBottomRightRadius = '12px'
        }
    })
    
}
const countries = [
  { name: "Colombia", code: "+57" },
  { name: "España", code: "+34" },
  { name: "EEUU", code: "+1" },
  { name: "México", code: "+52" },
  { name: "Argentina", code: "+54" }
];
const select = document.getElementById("country");
const phoneInput = document.getElementById("phone");
const contactForm = document.getElementById("contactForm");

select.innerHTML = countries.map(
    country => `<option value="${country.code}"> ${country.code} ${country.name}</option>`
).join('');

// Restringir el input de teléfono para que SOLO acepte números//
document.addEventListener("DOMContentLoaded", () => {

    // formulario

    const form = document.getElementById("contactForm");

    // campos

    const email = document.getElementById("email");
    const phone = document.getElementById("phone");

    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");

    const tipoIdentificacion =
        document.getElementById("t-identificacion");

    const numeroIdentificacion =
        document.getElementById("n-identificacion");

    const direccion =
        document.getElementById("direccion");

    // boton

    const btn =
        form.querySelector("button[type='submit']");

    // expresiones regulares

    const regexNombre =
        /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    const regexEmail =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // solo numeros

    function soloNumeros(input, max) {

        input.addEventListener("input", () => {

            let valor =
                input.value.replace(/\D/g, "");

            input.value =
                valor.slice(0, max);
        });

    }

    // mostrar error

function mostrarError(input, mensaje) {

    eliminarError(input);

    const error =
        document.createElement("small");

    error.classList.add("mensaje-error");

    error.textContent = mensaje;

    const contenedor =
        input.closest(".campo");

    if (contenedor) {
        contenedor.appendChild(error);
    }

    input.classList.add("invalid");
}

    // eliminar error

function eliminarError(input) {

    const contenedor =
        input.closest(".campo");

    if (!contenedor) return;

    const error =
        contenedor.querySelector(".mensaje-error");

    if (error) {
        error.remove();
    }

    input.classList.remove("invalid");
}

    // validar correo

function validarCorreo() {

    const valor =
        email.value.trim();

    if (valor.length === 0) {

        mostrarError(
            email,
            "Estimado usuario, el correo electrónico es obligatorio."
        );

        return false;
    }

    if (valor.length > 180) {

        mostrarError(
            email,
            "Estimado usuario, el correo electrónico no puede superar los 180 caracteres."
        );

        return false;
    }

    if (!regexEmail.test(valor)) {

        mostrarError(
            email,
            "Estimado usuario, es necesario ingresar un correo válido."
        );

        return false;
    }

    eliminarError(email);

    return true;
}

    // validar telefono

    function validarTelefono() {

        const valor =
            phone.value.trim();

        if (!/^\d{10}$/.test(valor)) {

            mostrarError(
                phone,
                "Estimado usuario, el teléfono debe tener 10 dígitos."
            );

            return false;
        }

        eliminarError(phone);

        return true;
    }

   // validar nombre

function validarNombre() {

    const valor =
        nombre.value.trim();

    if (!regexNombre.test(valor)) {

        mostrarError(
            nombre,
            "Estimado usuario, el nombre solo puede contener letras."
        );

        return false;
    }

    if (valor.length < 3) {

        mostrarError(
            nombre,
            "Estimado usuario, el nombre debe tener mínimo 3 caracteres."
        );

        return false;
    }

    if (valor.length > 25) {

        mostrarError(
            nombre,
            "Estimado usuario, el nombre no puede superar los 25 caracteres."
        );

        return false;
    }

    eliminarError(nombre);

    return true;
}

// validar apellido

function validarApellido() {

    const valor =
        apellido.value.trim();

    if (!regexNombre.test(valor)) {

        mostrarError(
            apellido,
            "Estimado usuario, el apellido solo puede contener letras."
        );

        return false;
    }

    if (valor.length < 3) {

        mostrarError(
            apellido,
            "Estimado usuario, el apellido debe tener mínimo 3 caracteres."
        );

        return false;
    }

    if (valor.length > 45) {

        mostrarError(
            apellido,
            "Estimado usuario, el apellido no puede superar los 45 caracteres."
        );

        return false;
    }

    eliminarError(apellido);

    return true;
}
    // validar identificacion

    function validarDocumento() {

        const valor =
            numeroIdentificacion.value.trim();

        if (!/^\d{5,15}$/.test(valor)) {

            mostrarError(
                numeroIdentificacion,
                "Estimado usuario, la identificación debe contener entre 5 y 15 números."
            );

            return false;
        }

        eliminarError(
            numeroIdentificacion
        );

        return true;
    }

   // validar direccion

function validarDireccion() {

    const valor =
        direccion.value.trim();

    if (valor.length === 0) {

        mostrarError(
            direccion,
            "Estimado usuario, la dirección es obligatoria."
        );

        return false;
    }

    if (valor.length < 5) {

        mostrarError(
            direccion,
            "Estimado usuario, la dirección debe tener mínimo 5 caracteres."
        );

        return false;
    }

    if (valor.length > 180) {

        mostrarError(
            direccion,
            "Estimado usuario, la dirección no puede superar los 180 caracteres."
        );

        return false;
    }

    eliminarError(direccion);

    return true;
}

    // permitir solo numeros

    soloNumeros(phone, 10);
    soloNumeros(numeroIdentificacion, 15);

    // envio

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const valido =
            validarCorreo() &&
            validarTelefono() &&
            validarNombre() &&
            validarApellido() &&
            validarDocumento() &&
            validarDireccion();

  if (!valido) return;

if (!valido) return;

console.log("Formulario enviado correctamente");

// ocultar formulario
document.querySelector(".formulario").style.display = "none";

// mostrar mensaje
document.getElementById("mensaje-gracias").style.display = "block";

});
});