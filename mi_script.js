document.addEventListener('DOMContentLoaded', function() {
    const miBoton = document.getElementById('miBoton');

    if (miBoton) {
        miBoton.addEventListener('click', function() {
            alert('¡Gracias por interactuar con el botón!');
        });
    }
});
