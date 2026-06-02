// países
const countries = [
    { name: "Colombia",  code: "+57" },
    { name: "España",    code: "+34" },
    { name: "EEUU",      code: "+1"  },
    { name: "México",    code: "+52" },
    { name: "Argentina", code: "+54" },
];

// elementos
const select         = document.getElementById("country");
const phoneInput     = document.getElementById("phone");
const contactForm    = document.getElementById("contactForm");
const mensajeGracias = document.getElementById("mensaje-gracias");

// quitar validación nativa del navegador
contactForm.setAttribute("novalidate", true);

// poblar select de países
select.innerHTML = countries.map(
    (c) => `<option value="${c.code}">${c.code} ${c.name}</option>`
).join("");

// utilidades
function showError(input, msg) {
    clearError(input);
    input.classList.add("invalid");
    input.classList.remove("valid");
    const span = document.createElement("span");
    span.className = "mensaje-error";
    span.textContent = msg;
    const container = input.closest(".campo") || input.parentElement.closest(".campo");
    container.appendChild(span);
}

function clearError(input) {
    const container = input.closest(".campo") || input.parentElement.closest(".campo");
    const prev = container.querySelector(".mensaje-error");
    if (prev) prev.remove();
    input.classList.remove("invalid");
}

function markValid(input) {
    clearError(input);
    input.classList.add("valid");
}

// filtro nombre y apellido — solo letras
["nombre", "apellido"].forEach((id) => {
    document.getElementById(id).addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
    });
});

// filtro teléfono — solo números, máx 30
phoneInput.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D/g, "").slice(0, 30);
});

// contador mensaje
const mensajeTextarea = document.getElementById("mensaje");
const MAX_MSG = 500;

const contador = document.createElement("span");
contador.className = "mensaje-error";
contador.style.color = "#7a7a7a";
contador.style.textAlign = "right";
contador.textContent = `0 / ${MAX_MSG}`;
mensajeTextarea.closest(".campo").appendChild(contador);

mensajeTextarea.addEventListener("input", () => {
    const len = mensajeTextarea.value.length;
    contador.textContent = `${len} / ${MAX_MSG}`;
    contador.style.color = len > MAX_MSG ? "#ff4d4d" : "#7a7a7a";
});

// validaciones por campo
function validateNombre() {
    const input = document.getElementById("nombre");
    const val = input.value.trim();
    if (!val)            { showError(input, "El nombre es obligatorio.");  return false; }
    if (val.length < 3)  { showError(input, "Mínimo 3 caracteres.");       return false; }
    if (val.length > 35) { showError(input, "Máximo 35 caracteres.");      return false; }
    markValid(input);
    return true;
}

function validateApellido() {
    const input = document.getElementById("apellido");
    const val = input.value.trim();
    if (!val)            { showError(input, "El apellido es obligatorio."); return false; }
    if (val.length < 3)  { showError(input, "Mínimo 3 caracteres.");        return false; }
    if (val.length > 35) { showError(input, "Máximo 35 caracteres.");       return false; }
    markValid(input);
    return true;
}

function validateEmail() {
    const input = document.getElementById("email");
    const val = input.value.trim();
    // debe tener algo antes del @, el @, algo después, un punto y al menos 2 letras de dominio
    const regex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    if (!val)               { showError(input, "El correo es obligatorio.");                return false; }
    if (!val.includes("@")) { showError(input, "El correo debe contener @.");               return false; }
    if (!regex.test(val))   { showError(input, "Formato inválido. Ej: nombre@correo.com"); return false; }
    if (val.length > 100)   { showError(input, "Máximo 100 caracteres.");                   return false; }
    markValid(input);
    return true;
}

function validateTelefono() {
    const val     = phoneInput.value.trim();
    const wrapper = phoneInput.closest(".telefono-input");
    const campo   = wrapper.closest(".campo");

    function showPhoneError(msg) {
        phoneInput.classList.add("invalid");
        phoneInput.classList.remove("valid");
        wrapper.style.border = "1px solid #ff4d4d";
        const prev = campo.querySelector(".mensaje-error");
        if (prev) prev.remove();
        const span = document.createElement("span");
        span.className = "mensaje-error";
        span.textContent = msg;
        campo.appendChild(span);
        return false;
    }

    function clearPhoneError() {
        phoneInput.classList.remove("invalid");
        phoneInput.classList.add("valid");
        wrapper.style.border = "1px solid #00b347";
        const prev = campo.querySelector(".mensaje-error");
        if (prev) prev.remove();
    }

    if (!val)            return showPhoneError("El teléfono es obligatorio.");
    if (val.length < 7)  return showPhoneError("Mínimo 7 dígitos.");
    if (val.length > 30) return showPhoneError("Máximo 30 dígitos.");
    clearPhoneError();
    return true;
}

function validateMensaje() {
    // mensaje opcional — solo valida el límite de caracteres
    const val = mensajeTextarea.value.trim();
    if (val.length > MAX_MSG) {
        showError(mensajeTextarea, `El mensaje no puede superar ${MAX_MSG} caracteres.`);
        return false;
    }
    clearError(mensajeTextarea);
    return true;
}

// validación en blur
document.getElementById("nombre").addEventListener("blur",   validateNombre);
document.getElementById("apellido").addEventListener("blur", validateApellido);
document.getElementById("email").addEventListener("blur",    validateEmail);
phoneInput.addEventListener("blur",                          validateTelefono);
mensajeTextarea.addEventListener("blur",                     validateMensaje);

// envío
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const ok = [
        validateNombre(),
        validateApellido(),
        validateEmail(),
        validateTelefono(),
        validateMensaje(),
    ].every(Boolean);

    if (!ok) return;

    // ocultar formulario y mostrar mensaje de gracias
    contactForm.closest(".contacto").style.display = "none";
    mensajeGracias.style.display = "block";
    mensajeGracias.classList.add("visible");
});