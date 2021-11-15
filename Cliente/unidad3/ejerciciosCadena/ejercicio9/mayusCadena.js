let cadena = window.prompt("Escribe una cadena")

function convertirMayus(cadena) {
    return cadena
        .toLowerCase()
        .split(' ')
        .map(function(palabra) {
            return palabra[0].toUpperCase() + palabra.substr(1);
        })
        .join(' ');
}
alert(convertirMayus(cadena));