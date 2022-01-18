let arrayPeliculas = [];

//Con esto añadimos el array al local storage
if (localStorage.getItem("peliculas") == null) {
    localStorage.setItem("peliculas", JSON.stringify(arrayPeliculas))
}

//Con esto escribimos el array en el label
document.getElementById("pelis").textContent = localStorage.getItem("peliculas")

//Con esta función guardamos las peliculas
function guardarPelicula() {
    arrayPeliculas = JSON.parse(localStorage.getItem("peliculas"));

    //Aquí añadimos las nuevas películas que escribimos
    arrayPeliculas.push(document.getElementById("pelicula").value)

    localStorage.setItem("peliculas", JSON.stringify(arrayPeliculas))
}