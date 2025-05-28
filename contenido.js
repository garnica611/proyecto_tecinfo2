// Función para inicializar el mapa de Google Maps
// Esta función se llama automáticamente por la API de Google Maps una vez que se carga.
function initMap() {
    // Coordenadas para Naucalpan de Juárez, Estado de México, México
    const naucalpan = { lat: 19.4756, lng: -99.2319 };

    // Crea una nueva instancia del mapa y la adjunta al elemento con id 'map'
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12, // Nivel de zoom inicial
        center: naucalpan, // Centra el mapa en Naucalpan
        mapTypeControl: false, // Opcional: oculta el control de tipo de mapa
        streetViewControl: false // Opcional: oculta el control de Street View
    });

    // Puedes añadir marcadores para puntos de interés (ej. centros de reciclaje de agua, jardines sostenibles)
    // Ejemplo de un marcador en el centro de Naucalpan
    new google.maps.Marker({
        position: naucalpan,
        map: map,
        title: "Centro de Naucalpan",
        icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png' // Icono de punto verde
    });

    // Otro marcador de ejemplo (simulando un punto de ahorro de agua)
    new google.maps.Marker({
        position: { lat: 19.49, lng: -99.25 }, // Coordenadas ficticias
        map: map,
        title: "Jardín Sostenible de la Comunidad",
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' // Icono de punto azul
    });

    // Puedes añadir más marcadores y personalizarlos
}

// Lógica para el formulario de contacto (simulación de envío)
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita el envío real del formulario

            // Simula el procesamiento del formulario
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Validación muy básica
            if (name && email && message) {
                formMessage.textContent = '¡Gracias por tu mensaje, ' + name + '! Lo hemos recibido y nos pondremos en contacto pronto.';
                formMessage.className = 'success'; // Clase para estilo de éxito
                formMessage.classList.remove('hidden');

                // Opcional: Limpiar el formulario
                contactForm.reset();

                // Aquí es donde en una aplicación real enviarías los datos a un servidor
                // Ejemplo: fetch('/submit-form', { method: 'POST', body: JSON.stringify({ name, email, message }) })
                // .then(response => response.json())
                // .then(data => console.log(data))
                // .catch(error => console.error('Error:', error));

            } else {
                formMessage.textContent = 'Por favor, completa todos los campos del formulario.';
                formMessage.className = 'error'; // Clase para estilo de error
                formMessage.classList.remove('hidden');
            }
        });
    }
});
