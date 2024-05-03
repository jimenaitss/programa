document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todas las imágenes de la galería
    const imagenes = document.querySelectorAll('.galeria img');

    let indiceImagen = 0; // Índice de la imagen actual

    // Función para mostrar la imagen actual y ocultar las demás imágenes
    function mostrarImagenActual() {
        // Recorre todas las imágenes
        imagenes.forEach((imagen, indice) => {
            // Si el índice de la imagen coincide con el índice actual, la muestra, de lo contrario la oculta
            if (indice === indiceImagen) {
                imagen.style.display = 'block'; // Muestra la imagen
            } else {
                imagen.style.display = 'none'; // Oculta la imagen
            }
        });
    }

    // Agrega un evento de clic al botón "Anterior"
    document.getElementById('anterior').addEventListener('click', () => {
        // Si el índice actual es 0, cambia al índice de la última imagen, de lo contrario, disminuye el índice en 1
        indiceImagen = (indiceImagen === 0) ? imagenes.length - 1 : indiceImagen - 1;
        mostrarImagenActual(); // Llama a la función para mostrar la imagen actual
    });

    // Agrega un evento de clic al botón "Siguiente"
    document.getElementById('siguiente').addEventListener('click', () => {
        // Si el índice actual es igual al último índice, cambia al primer índice, de lo contrario, aumenta el índice en 1
        indiceImagen = (indiceImagen === imagenes.length - 1) ? 0 : indiceImagen + 1;
        mostrarImagenActual(); // Llama a la función para mostrar la imagen actual
    });

    // Muestra la imagen actual al cargar la página
    mostrarImagenActual();
});

const gallery = document.querySelector('.gallery');
const galleryContainer = document.querySelector('.gallery-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

prevBtn.addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    scrollGallery();
});

nextBtn.addEventListener('click', () => {
    currentIndex = Math.min(currentIndex + 1, gallery.children.length / 3 - 1);
    scrollGallery();
});

function scrollGallery() {
    const imageWidth = gallery.children[0].offsetWidth;
    galleryContainer.scrollLeft = currentIndex * imageWidth * 3;
}
