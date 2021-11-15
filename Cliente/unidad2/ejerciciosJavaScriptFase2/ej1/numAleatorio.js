let numAleatorio = (Math.random() * 10) + 1;

numAleatorio = Math.trunc(numAleatorio);

let numEscrito
numEscrito = window.prompt("Introduzca un número")

if (numEscrito == numAleatorio) {
    alert("Buen trabajo")
} else
    alert("No coincide")