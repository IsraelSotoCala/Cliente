let palabras = ['perro', 'gato', 'ornitorrinco', 'puercoespin']

let resultado

let partidas = 0

let acierto = 0

function empezar() {

    let palabraEscogida = palabras[Math.floor(Math.random() * palabras.length)]

    resultado = palabraEscogida;

    let letras = palabraEscogida.split("")

    letras.sort((a, b) => 0.5 - Math.random())

    document.getElementById("pista").innerHTML = letras.join("")
}

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

function porcentajeAciertos() {
    let porcentajeFinal = Math.floor((acierto / partidas) * 100)

    document.getElementById("porcentajeAciertos").innerHTML = "Tu porcentaje de aciertos es : " + porcentajeFinal + "%"
}

window.addEventListener("load", empezar);