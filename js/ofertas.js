
document.addEventListener("DOMContentLoaded", () => {
    const rutaOfertas = "imgs/ofertas/";

    const ofertas = [
        "IMPRESORA HP M611.png",
        "lenovo legion 5.jpg",
        "monitor lenovo 23plg.jpeg",
        "orico ssd externo.jpg",
        "rac apc servidor.jpg",
        "Oferta.jpeg"
    ];

    const tiempoCambio = 9000; //9 segundos
    const duracionTransicion = 650;

    const grid = document.querySelector(".offers__grid");
    const imagenes = document.querySelectorAll(".offers__img");

    if (!grid || imagenes.length < 2 || ofertas.length < 2) return;

    let indice = 0;
    let animando = false;

    const estilos = document.createElement("style");
    estilos.textContent = `
        .offers__grid {
            overflow: hidden;
        }

        .offers__item {
            overflow: hidden;
        }

        .offers__img {
            transition:
                transform ${duracionTransicion}ms cubic-bezier(.22,.61,.36,1),
                opacity ${duracionTransicion}ms ease;
            will-change: transform, opacity;
        }

        .offers__img.slide-out {
            transform: translateX(-120%);
            opacity: 0;
        }

        .offers__img.slide-in {
            transform: translateX(120%);
            opacity: 0;
        }

        .offers__img.slide-active {
            transform: translateX(0);
            opacity: 1;
        }
    `;
    document.head.appendChild(estilos);

    function cargarOfertas() {
        imagenes[0].src = rutaOfertas + ofertas[indice % ofertas.length];
        imagenes[1].src = rutaOfertas + ofertas[(indice + 1) % ofertas.length];

        imagenes[0].alt = "Oferta empresarial";
        imagenes[1].alt = "Oferta empresarial";
    }

    function cambiarOfertas() {
        if (animando) return;
        animando = true;

        imagenes.forEach(img => {
            img.classList.remove("slide-in", "slide-active");
            img.classList.add("slide-out");
        });

        setTimeout(() => {
            indice = (indice + 2) % ofertas.length;

            imagenes[0].src = rutaOfertas + ofertas[indice % ofertas.length];
            imagenes[1].src = rutaOfertas + ofertas[(indice + 1) % ofertas.length];

            imagenes.forEach(img => {
                img.classList.remove("slide-out");
                img.classList.add("slide-in");
            });

            requestAnimationFrame(() => {
                imagenes.forEach(img => {
                    img.classList.remove("slide-in");
                    img.classList.add("slide-active");
                });

                setTimeout(() => {
                    animando = false;
                }, duracionTransicion);
            });
        }, duracionTransicion);
    }

    cargarOfertas();

    imagenes.forEach(img => {
        img.classList.add("slide-active");
    });

    setInterval(cambiarOfertas, tiempoCambio);
});