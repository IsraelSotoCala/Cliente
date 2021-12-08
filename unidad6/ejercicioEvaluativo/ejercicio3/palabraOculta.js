//Array de palabras
let palabras = ['perro', 'gato', 'ornitorrinco', 'puercoespin']

let resultado

let partidas = 0

let acierto = 0

//Esta funcion eescoge una palabra aleatoria, la divide en letras y las desordena
function empezar() {

    let palabraEscogida = palabras[Math.floor(Math.random() * palabras.length)]

    resultado = palabraEscogida;

    let letras = palabraEscogida.split("")

    letras.sort((a, b) => 0.5 - Math.random())

    document.getElementById("pista").innerHTML = letras.join("")
}

//Esta funcion verifica si hemos o no acertado la palabra 

function comprobar() {

    if (document.getElementById("adivinar").value == resultado) {
        acierto++
        document.getElementById("acierto").innerHTML = "Has acertado"
        partidas++
    } else {
        document.getElementById("acierto").innerHTML = "Has fallado"
        partidas++;
    }
}

//En esta funcion se calcula el porcentaje de aciertos

function porcentajeAciertos() {
    let porcentajeFinal = Math.floor((acierto / partidas) * 100)

    document.getElementById("porcentajeAciertos").innerHTML = "Tu porcentaje de aciertos es : " + porcentajeFinal + "%"
}

//Esto hace que al cargar la pagina se ejecute la funcion de empezar

window.addEventListener("load", empezar);