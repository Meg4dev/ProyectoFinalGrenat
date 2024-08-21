//! De este archivo diferentes eventos que se ejecutan cuando el usuario hace click en un elemento de la barra de navegación o el icono flotante.

document.querySelector('.guitarras-nav').addEventListener('click', function (event) {
    event.preventDefault();

    document.querySelector('.guitarrasContainer').scrollIntoView({ behavior: 'smooth' });
})

document.querySelector('.bajos-nav').addEventListener('click', function (event) {
    event.preventDefault();

    document.querySelector('.bajosContainer').scrollIntoView({ behavior: 'smooth' });
})

document.querySelector('.amplificadores-nav').addEventListener('click', function (event) {
    event.preventDefault();

    document.querySelector('.amplificadoresContainer').scrollIntoView({ behavior: 'smooth' });
})

document.querySelector('.accesorios-nav').addEventListener('click', function (event) {
    event.preventDefault();

    document.querySelector('.accesoriosContainer').scrollIntoView({ behavior: 'smooth' });
})

document.querySelector('.icono-carrito').addEventListener('click', function (event) {
    event.preventDefault();

    document.querySelector('.carrito-titulo').scrollIntoView({ behavior: 'smooth' });
})

const botonFlotante = document.getElementById('icono-carrito');

botonFlotante.addEventListener('click', function () {
    document.querySelector('.carrito-titulo').scrollIntoView({ behavior: 'smooth' });
})