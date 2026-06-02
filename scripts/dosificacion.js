const botones = document.querySelectorAll(".categoria-btn");
const titulo = document.getElementById("titulo-producto");
const imagen = document.getElementById("imagen-producto");
const slider = document.getElementById("slider");
const valorSlider = document.getElementById("valor-slider");
const resultado = document.getElementById("resultado-ml");
const ruedaSelect = document.getElementById("rueda-select");
const ruedaSelectCamion = document.getElementById("rueda-select-camion");

const botonMenu = document.getElementById("botonMenu");
const opcionesMenu = document.getElementById("misOpciones");
const panelNormal = document.getElementById("panel-normal");
const panelCamion = document.getElementById("panel-camion");
const subOpciones = document.querySelectorAll(".producto");

const vehiculosPesados = [
    "315/80R22.5 - Tractocamión / bus intermunicipal",
    "295/80R22.5 - Tractocamión dirección/tracción",
    "315/70R22.5 - Tractocamión larga distancia",
    "275/80R22.5 - Camión sencillo",
    "385/65R22.5 - Eje tracción dobletroques"
];

const btpObras = [
    "20.5R25 - Cargadora frontal",
    "23.5R25 - Cargadora grande",
    "17.5R25 - Compacta"
];

const agricola = [
    "14.9R28 - Tractor",
    "18.4R34 - Tractor mediano",
    "20.8R38 - Tractor alto HP"
];

const remolques = [
    "275/70R22.5 - Remolque",
    "385/55R22.5 - Semirremolque",
    "445/65R22.5 - Remolque pesado"
];

botonMenu.addEventListener("click", (e) => {
    e.stopPropagation();
    opcionesMenu.classList.toggle("active");
});

document.addEventListener("click", () => {
    opcionesMenu.classList.remove("active");
});

slider.addEventListener("input", () => {
    valorSlider.textContent = slider.value;
    calcularResultado();
});

function calcularResultado(){
    const valor = Number(slider.value);
    const botonActivo = document.querySelector(".categoria-btn.active");
    
    if (!botonActivo) return;
    
    const tipo = botonActivo.dataset.tipo;
    let ml = 0;

    if(tipo === "patineta"){
        ml = valor * 3;
    }
    if(tipo === "moto"){
        ml = valor * 5;
    }
    if(tipo === "bicicleta"){
        ml = valor * 4;
    }
    if(tipo === "camion"){
        ml = valor * 8;
    }

    resultado.textContent = `${ml} ml`;
}

function cargarOpciones(arrayOpciones){
    ruedaSelectCamion.innerHTML = "";
    
    const opcionInicial = document.createElement("option");
    opcionInicial.textContent = "Elegir dimensión";
    ruedaSelectCamion.appendChild(opcionInicial);

    arrayOpciones.forEach(opcion => {
        const option = document.createElement("option");
        option.textContent = opcion;
        ruedaSelectCamion.appendChild(option);
    });
}

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const tipo = boton.dataset.tipo;

        if(tipo !== "camion"){
            botones.forEach(btn => {
                btn.classList.remove("active");
            });
            boton.classList.add("active");
            
            subOpciones.forEach(sub => sub.classList.remove("active-sub"));
            opcionesMenu.classList.remove("active");
            
            panelNormal.style.display = "flex";
            panelCamion.style.display = "none";
        }

        if(tipo === "moto"){
            titulo.textContent = "Moto";
            imagen.src = "../multimedia/Llanta moto.png";
            slider.min = 50;
            slider.max = 200;
            slider.value = 90;
            valorSlider.textContent = 90;
            ruedaSelect.innerHTML = `
                <option>120/70</option>
                <option>180/55</option>
                <option>200/55</option>
            `;
        }

        if(tipo === "bicicleta"){
            titulo.textContent = "Bicicleta";
            imagen.src = "../multimedia/bicicleta.png";
            slider.min = 20;
            slider.max = 80;
            slider.value = 40;
            valorSlider.textContent = 40;
            ruedaSelect.innerHTML = `
                <option>29"</option>
                <option>27.5"</option>
                <option>26"</option>
            `;
        }

        if(tipo === "patineta"){
            titulo.textContent = "Patineta";
            imagen.src = "../multimedia/patineta.png";
            slider.min = 10;
            slider.max = 50;
            slider.value = 20;
            valorSlider.textContent = 20;
            ruedaSelect.innerHTML = `
                <option>8"</option>
                <option>8.5"</option>
                <option>9"</option>
            `;
        }

        calcularResultado();
    });
});

subOpciones.forEach(opcion => {
    opcion.addEventListener("click", (e) => {
        e.stopPropagation();
        
        botones.forEach(btn => btn.classList.remove("active"));
        botonMenu.classList.add("active");

        subOpciones.forEach(sub => sub.classList.remove("active-sub"));
        opcion.classList.add("active-sub");

        panelNormal.style.display = "none";
        panelCamion.style.display = "grid";

        imagen.src = "../multimedia/camion.png";

        const categoria = opcion.dataset.categoria;
        
        const tituloCamionH3 = document.querySelector("#panel-camion h3");
        if (tituloCamionH3) {
            tituloCamionH3.textContent = categoria;
        }

        if(categoria === "Camiones pesados"){
            cargarOpciones(vehiculosPesados);
        }
        if(categoria === "BTP/Obras"){
            cargarOpciones(btpObras);
        }
        if(categoria === "Remolques"){
            cargarOpciones(remolques);
        }
        if(categoria === "Agrícola"){
            cargarOpciones(agricola);
        }

        opcionesMenu.classList.remove("active");
        calcularResultado();
    });
});