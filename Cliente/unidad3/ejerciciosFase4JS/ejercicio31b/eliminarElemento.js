function eliminar(numeros, elemento) {
    var resultado = []
    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] !== elemento) {
            resultado.push(numeros[i]);
        }
    }
    return resultado;
}

let numeros = [1, 2, 3, 4, 5];

console.log("El array de números antes de borrar " + numeros)

numeros = eliminar(numeros, 3);

console.log("El array de números despueś de borrar " + numeros);