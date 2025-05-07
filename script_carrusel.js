document.addEventListener('DOMContentLoaded', () => {
    const carruselContenedor = document.querySelector('.carrusel-contenedor');
    const carruselTrack = document.querySelector('.carrusel-track');
    const imagenes = document.querySelectorAll('.carrusel-track img');
    const botonAnterior = document.querySelector('.anterior');
    const botonSiguiente = document.querySelector('.siguiente');
    const indicadores = document.querySelector('.indicadores');
    const puntos = document.querySelectorAll('.indicadores li');

    let indiceActual = 0;
    const numImagenes = imagenes.length;
    let intervalo;
    const velocidadIntervalo = 3000; // Cambia la imagen cada 3 segundos

    function actualizarCarrusel(indice) {
        carruselTrack.style.transform = `translateX(-${indice * 100}%)`;
        actualizarIndicadores(indice);
    }

    function actualizarIndicadores(indice) {
        puntos.forEach((punto, i) => {
            punto.classList.toggle('activo', i === indice);
        });
    }

    function siguienteImagen() {
        indiceActual = (indiceActual + 1) % numImagenes;
        actualizarCarrusel(indiceActual);
    }

    function anteriorImagen() {
        indiceActual = (indiceActual - 1 + numImagenes) % numImagenes;
        actualizarCarrusel(indiceActual);
    }

    function irAImagen(indice) {
        indiceActual = indice;
        actualizarCarrusel(indiceActual);
        reiniciarIntervalo();
    }

    function iniciarIntervalo() {
        intervalo = setInterval(siguienteImagen, velocidadIntervalo);
    }

    function reiniciarIntervalo() {
        clearInterval(intervalo);
        iniciarIntervalo();
    }

    botonSiguiente.addEventListener('click', () => {
        siguienteImagen();
        reiniciarIntervalo();
    });

    botonAnterior.addEventListener('click', () => {
        anteriorImagen();
        reiniciarIntervalo();
    });

    indicadores.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            const indice = parseInt(e.target.dataset.indice);
            irAImagen(indice);
        }
    });

    // Iniciar el carrusel automáticamente
    iniciarIntervalo();

    // Para que la transición se aplique correctamente al cargar la página
    setTimeout(() => {
        carruselTrack.classList.add('animating');
    }, 100);
});
