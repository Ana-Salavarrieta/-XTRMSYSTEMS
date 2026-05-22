const countries = [
  { name: "Colombia", code: "+57", flag: "🇨🇴" },
  { name: "España", code: "+34", flag: "🇪🇸" },
  { name: "EEUU", code: "+1", flag: "🇺🇸" },
  { name: "México", code: "+52", flag: "🇲🇽" },
  { name: "Argentina", code: "+54", flag: "🇦🇷" }
];

const select = document.getElementById("country");
const phoneInput = document.getElementById("phone");
const contactForm = document.getElementById("contactForm");

// MODIFICADO: Ahora añade el emoji de la bandera en el menú desplegable
countries.forEach(c => {
  const option = document.createElement("option");
  // Aquí combinamos el emoji de la bandera con el código del país
  option.textContent = `${c.flag} ${c.code}`; 
  option.value = c.code;
  select.appendChild(option);
});

// Restringir el input de teléfono para que SOLO acepte números
phoneInput.addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, "");
});

// Validación avanzada al intentar enviar el formulario
contactForm.addEventListener("submit", (e) => {
  e.preventDefault(); 

  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefono = phoneInput.value.trim();
  const paisCodigo = select.value;

  if (nombre.length < 2) {
    alert("El nombre debe tener al menos 2 caracteres.");
    return;
  }

  if (apellido.length < 3) {
    alert("El apellido debe tener al menos 3 caracteres.");
    return;
  }

  if (!email.includes("@")) {
    alert("Por favor, introduce una dirección de correo electrónico válida (falta el @).");
    return;
  }

  if (telefono.length < 6) {
    alert("Por favor, introduce un número de teléfono válido.");
    return;
  }

  const numeroCompleto = `${paisCodigo} ${telefono}`;
  
  console.log("Formulario enviado con éxito:", {
    nombre,
    apellido,
    email,
    telefono: numeroCompleto
  });

  alert("¡Formulario enviado correctamente! Nos pondremos en contacto contigo pronto.");
  contactForm.reset(); 
});