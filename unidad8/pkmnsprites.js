//El contenedor que contendrá las imágenes
let imagenes = document.getElementById("imagenes")

//Función que muestra los sprites si el pkmn tiene género o diferencias
function renderPokemon(frontDef, frontShi, frontFem, frontFemShi) {

    let img1 = document.createElement("img")
    img1.setAttribute('src', frontDef)

    let img2 = document.createElement("img")
    img2.setAttribute('src', frontShi)

    let img3 = document.createElement("img")
    img3.setAttribute('src', frontFem)

    let img4 = document.createElement("img")
    img4.setAttribute('src', frontFemShi);

    //Creamos las imagenes dentro del contenedor
    imagenes.appendChild(img1);
    imagenes.appendChild(img2);
    imagenes.appendChild(img3);
    imagenes.appendChild(img4);
}

//Función que muestra los sprites si no tienen diferencia o son únicos
function renderUnicos(frontDef, frontShiny) {

    let img1 = document.createElement("img")
    img1.setAttribute('src', frontDef)

    let img2 = document.createElement("img")
    img2.setAttribute('src', frontShiny)

    //Creamos las imágenes dentro del contenedor
    imagenes.appendChild(img1)
    imagenes.appendChild(img2)

}

//Función que llama a las otras para mostrar a los sprites del pkmn que busques
function verPokemon() {
    let nombre = document.getElementById("nombre").value
    fetch('https://pokeapi.co/api/v2/pokemon/' + nombre)
        .then(response => response.json())
        .then(pokemon => {
            let frontDef = pokemon.sprites.front_default;
            let frontShiny = pokemon.sprites.front_shiny;
            //Si el pkmn no tiene diferencias mostramos los normales
            if (pokemon.sprites.front_female == null) {
                renderUnicos(frontDef, frontShiny)
            } else {
                //Si las tiene mostramos todos
                let frontF = pokemon.sprites.front_female;
                let frontFShiny = pokemon.sprites.front_shiny_female;

                renderPokemon(frontDef, frontShiny, frontF, frontFShiny)
            }
        });
}

//Con esto recargamos la página para borrar el historial de sprites
function borrarHistorial() {
    location.reload();
}