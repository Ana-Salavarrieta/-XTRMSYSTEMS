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

// El mensaje deja de ser obligatorio
document.getElementById("mensaje").removeAttribute("required");

// Solo letras y espacios para el nombre
const nombreInput = document.getElementById("nombre");

nombreInput.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
});

// Solo números para teléfono
phoneInput.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D/g, "");

    // Máximo 15 dígitos
    if (e.target.value.length > 15) {
        e.target.value = e.target.value.slice(0, 15);
    }
});

// Validación avanzada
contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = phoneInput.value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const paisCodigo = select.value;

    // Nombre obligatorio
    if (!nombre) {
        alert("Debes ingresar tu nombre y apellido.");
        return;
    }

    // Mínimo y máximo nombre
    if (nombre.length < 3) {
        alert("El nombre debe tener mínimo 3 caracteres.");
        return;
    }

    if (nombre.length > 50) {
        alert("El nombre no puede superar los 50 caracteres.");
        return;
    }

    // Debe contener al menos dos palabras
    if (nombre.split(" ").filter(p => p !== "").length < 2) {
        alert("Ingresa nombre y apellido.");
        return;
    }

    // Correo obligatorio
    if (!email) {
        alert("Debes ingresar un correo electrónico.");
        return;
    }

    // Validación de email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email)) {
        alert("Ingresa un correo electrónico válido.");
        return;
    }

    if (email.length > 100) {
        alert("El correo es demasiado largo.");
        return;
    }

    // Teléfono obligatorio
    if (!telefono) {
        alert("Debes ingresar un número telefónico.");
        return;
    }

    if (telefono.length < 7) {
        alert("El teléfono debe tener al menos 7 dígitos.");
        return;
    }

    if (telefono.length > 15) {
        alert("El teléfono no puede tener más de 15 dígitos.");
        return;
    }

    // Mensaje opcional pero con límite
    if (mensaje.length > 500) {
        alert("El mensaje no puede superar los 500 caracteres.");
        return;
    }

    const numeroCompleto = `${paisCodigo} ${telefono}`;

    console.log("Formulario enviado con éxito:", {
        nombre,
        email,
        telefono: numeroCompleto,
        mensaje
    });

    alert("¡Formulario enviado correctamente!");

    contactForm.reset();
});

