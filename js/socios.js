(function () {
    const imagenes = [
        "imgs/socios/Kodak.jpeg",
        "imgs/socios/Targus.jpeg",
        "imgs/socios/Forza.jpeg",
        "imgs/socios/Fortinet.jpeg",
        "imgs/socios/Sophos.jpeg",
        "imgs/socios/Microsoft.jpeg",
        "imgs/socios/Ricoh.jpeg",
        "imgs/socios/LG.jpeg",

        "imgs/socios/Apc.jpeg",
        "imgs/socios/Cisco.jpeg",
        "imgs/socios/Dell.jpeg",
        "imgs/socios/Epson.jpeg",
        "imgs/socios/Lenovo.jpeg",
        "imgs/socios/Logitech.jpeg",
        "imgs/socios/Samsung.jpeg",
        "imgs/socios/HP.jpeg",

        // Para que la imagen del nuevo socio aparezca en pantalla y cambie dinámicamente,
        // se debe copiar y pegar la última ruta debajo de la misma y modificar
        // la tercera sección seguida de la barra "/" por la nueva imagen.
        // Al final se debe colocar una coma ",".
        // Ejemplo:
        // "imgs/socios/nokia.jpeg",
    ];

    let indice = 0;

    const imagenGrande = document.getElementById("featuredImage");

    if (!imagenGrande) return;

    function cambiarImagen() {
        indice++;

        if (indice >= imagenes.length) {
            indice = 0;
        }

        imagenGrande.style.opacity = 0;

        setTimeout(() => {
            imagenGrande.src = imagenes[indice];
            imagenGrande.style.opacity = 1;
        }, 300);
    }

    setInterval(cambiarImagen, 3000); //3 segundos
})();