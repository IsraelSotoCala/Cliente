let palabras = ["avispero", "raton", "mozalbete", "radiofaro"]

let palabra = palabras[Math.floor(Math.random() * palabras.length)]

let letras = palabra.split("")

let intentos = 3;

for (let i = 0; i < letras.length; i++) {

    //Si es un espacio en blanco o una coma dejamos un espacio en blanco

    if (letras[i] === " " || letras[i] === "," || letras[i] === ",") {
        let div = document.createElement("div");
        let contenedor = document.getElementById("contenedor");
        div.className = "espacio";
        contenedor.appendChild(div);
    } //Si no rellenamos con las letras
    else {

        //Creamos un elemento de tipo input

        let input = document.createElement("input")

        //Con esto le damos los atributos a los input para que contengan el texto y tengan el tamaño de un caracter

        input.setAttribute('type', 'text')

        input.setAttribute('size', '1')

        //Id de cada letra

        input.id = "letra" + i

        let contenedor = document.getElementById("contenedor")

        //Con esto creamos los inputs dentro del contenedor 

        contenedor.appendChild(input)
    }
}

//Con esta funcion rellenamos los huecos
//Hay veces que se repite la posicion
//Y hay que darle hasta que salga una no escrita
//No se como controlar eso

function rellenar() {
    let posicion = Math.floor(Math.random() * letras.length)

    document.getElementById("letra" + posicion).value = letras[posicion]
}

//En esta funcion comprobamos la palabra
function comprobar() {
    let palabraEscrita = document.getElementById("adivinar").value

    //Si acierta, te sale un mensaje y recarga la pagina
    if (palabraEscrita.match(palabra)) {
        alert("Has ganado!")
        location.reload()
    } else {
        //Si fallas te dice los intentos que te quedan
        intentos--;
        alert("Fallaste te quedan " + intentos + " intentos")
    }

    //Si los intentos llegan a 0 recarga la pagina
    if (intentos == 0) {
        alert("oooooh has perdido")
        location.reload()
    }
}

//Esta funcion muestra la palabra si te quieres rendir
function solucion() {
    alert("La palabra era " + palabra)
    location.reload()
}

//Esto hace que te de una letra al empezar

window.onload = rellenar()