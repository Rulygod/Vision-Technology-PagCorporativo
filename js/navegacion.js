(function () {
    const enlacesHeader = document.querySelectorAll(
        '.header a[href^="#"]'
    );

    enlacesHeader.forEach((enlace) => {
        enlace.addEventListener("click", function (event) {
            const destinoId = this.getAttribute("href");

            if (!destinoId || destinoId === "#") return;

            const destino = document.querySelector(destinoId);

            if (!destino) return;

            event.preventDefault();

            const header = document.querySelector(".header");
            const altoHeader = header ? header.offsetHeight : 0;

            const posicionSeccion = destino.getBoundingClientRect().top + window.scrollY;
            const altoSeccion = destino.offsetHeight;
            const altoPantalla = window.innerHeight;

            const posicionFinal =
                posicionSeccion -
                ((altoPantalla - altoSeccion) / 2) -
                altoHeader / 2;

            window.scrollTo({
                top: Math.max(posicionFinal, 0),
                behavior: "smooth"
            });

            history.pushState(null, "", destinoId);
        });
    });
})();