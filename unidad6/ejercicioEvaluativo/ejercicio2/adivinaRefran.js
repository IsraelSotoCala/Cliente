//Array de refranes, refran aleatorio, division en letras

let refranes = ["Más vale pájaro en mano que ciento volando", "El que no corre vuela", "Ojo por ojo diente por diente"]

let refran = refranes[Math.floor(Math.random() * refranes.length)]

let letras = refran.split("")

let tiempo

//Creamos 
for (let i = 0; i < letras.length; i++) {
    if (letras[i] === " " || letras[i] === "," || letras[i] === ",") {
        let input = document.createElement("input")
    } else {
        let input = document.createElement("input")

        input.setAttribute('type', 'text')

        input.setAttribute('size', '1')

        input.id = "letra" + i

        let contenedor = document.getElementById("contenedor")

        contenedor.appendChild(input)
    }
}

//Esta funcion se encarga de elegir una posicion aleatoria de los contenedores y los rellena con la letra

function rellenar() {
    let posicion = Math.floor(Math.random() * letras.length)

    document.getElementById("letra" + posicion).value = letras[posicion]
}

//Al pulsar el boton de parar terminamos de mostrar letras

function finalizar() {
    if (tiempo) {
        clearInterval(tiempo)
    }
}

//Esta funcion llama a la de rellenar y pone una letra cada segundo

function intervalo() {
    tiempo = setInterval(rellenar, 1000)
}