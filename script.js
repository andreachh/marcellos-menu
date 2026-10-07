const menu = document.getElementById("menu");

const paginas = [
    "imagenes/pagina1.jpg",
    "imagenes/pagina2.jpg",
    "imagenes/pagina3.jpg"
];

paginas.forEach((pagina) => {

    const imagen = document.createElement("img");

    imagen.src = pagina;

    imagen.alt = "Página del menú";

    menu.appendChild(imagen);

});