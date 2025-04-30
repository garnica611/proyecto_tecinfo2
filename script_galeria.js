document.addEventListener('DOMContentLoaded', function() {
    const imagenes = document.querySelectorAll('.galeria img');

    imagenes.forEach(imagen => {
        imagen.addEventListener('click', function() {
            // Puedes personalizar la acción al hacer clic en la imagen aquí
            alert(`Hiciste clic en: ${this.alt}`); // Ejemplo: Mostrar una alerta con el texto alternativo
            // Otra opción podría ser abrir la imagen en un modal, cambiar el borde, etc.
        });
    });
});
