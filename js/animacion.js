(function () {
  const DURACION_VISIBLE = 4300;
  const DURACION_REMOVER = 5200;
  const MAXIMO_ESPERA = 7000;

  function ocultarIntro() {
    const introLoader = document.getElementById("introLoader");

    if (!introLoader) return;

    if (introLoader.classList.contains("hide")) return;

    introLoader.classList.add("hide");

    setTimeout(() => {
      introLoader.remove();
    }, 900);
  }

  function iniciarIntro() {
    setTimeout(ocultarIntro, DURACION_VISIBLE);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciarIntro);
  } else {
    iniciarIntro();
  }

  // Seguro extra: aunque algo externo se quede colgado, el loader se va sí o sí.
  setTimeout(ocultarIntro, MAXIMO_ESPERA);
})();