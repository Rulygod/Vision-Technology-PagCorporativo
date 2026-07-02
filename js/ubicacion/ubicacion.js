// ======================================
// VARIABLES
// ======================================

let indice = 0;

// Elementos del HTML
const nombreSucursal = document.getElementById("nombreSucursal");
const descripcion = document.getElementById("descripcion");
const direccion = document.getElementById("direccion");
const telefono = document.getElementById("telefono");
const correo = document.getElementById("correo");
const horario = document.getElementById("horario");
const mapa = document.getElementById("mapa");

const btnAnterior = document.getElementById("anterior");
const btnSiguiente = document.getElementById("siguiente");

const indicadores = document.getElementById("indicadores");

// ======================================
// MUESTRA UNA SUCURSAL
// ======================================

function mostrarSucursal() {

    const sucursal = sucursales[indice];

    nombreSucursal.textContent = sucursal.ciudad;

    descripcion.textContent = sucursal.descripcion;

    direccion.textContent = sucursal.direccion;

    telefono.textContent = sucursal.telefono;

    correo.textContent = sucursal.correo;

    horario.textContent = sucursal.horario;

    mapa.src = sucursal.mapa;

    actualizarIndicadores();
}

// ======================================
// SIGUIENTE
// ======================================

function siguienteSucursal() {

    indice++;

    if (indice >= sucursales.length) {
        indice = 0;
    }

    mostrarSucursal();
}

// ======================================
// ANTERIOR
// ======================================

function anteriorSucursal() {

    indice--;

    if (indice < 0) {
        indice = sucursales.length - 1;
    }

    mostrarSucursal();
}

// ======================================
// CREA LOS INDICADORES
// ======================================

function crearIndicadores() {

    indicadores.innerHTML = "";

    sucursales.forEach((_, i) => {

        const punto = document.createElement("span");

        punto.classList.add("punto");

        if (i === indice) {
            punto.classList.add("activo");
        }

        punto.addEventListener("click", () => {

            indice = i;

            mostrarSucursal();

        });

        indicadores.appendChild(punto);

    });

}

// ======================================
// ACTUALIZA LOS INDICADORES
// ======================================

function actualizarIndicadores() {

    const puntos = document.querySelectorAll(".punto");

    puntos.forEach((punto, i) => {

        punto.classList.remove("activo");

        if (i === indice) {
            punto.classList.add("activo");
        }

    });

}

// ======================================
// EVENTOS
// ======================================

btnAnterior.addEventListener("click", anteriorSucursal);

btnSiguiente.addEventListener("click", siguienteSucursal);

// ======================================
// INICIALIZACIÓN
// ======================================

crearIndicadores();

mostrarSucursal();

// ======================================
// CAMBIO AUTOMÁTICO (Opcional)
// ======================================

let temporizador = setInterval(siguienteSucursal, 20000); //20 segundos

// Reinicia el temporizador cuando el usuario interactúa
function reiniciarTemporizador() {

    clearInterval(temporizador);

    temporizador = setInterval(siguienteSucursal, 20000); //20 segundos

}

btnAnterior.addEventListener("click", reiniciarTemporizador);

btnSiguiente.addEventListener("click", reiniciarTemporizador);