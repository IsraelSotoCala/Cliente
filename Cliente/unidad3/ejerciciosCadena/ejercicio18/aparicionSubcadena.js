let frase = window.prompt("Introduzca una frase")

let buscar = window.prompt("Introduzca la palabra a buscar");
document.innerHTML = buscar;

alert(frase.split(buscar).length - 1)