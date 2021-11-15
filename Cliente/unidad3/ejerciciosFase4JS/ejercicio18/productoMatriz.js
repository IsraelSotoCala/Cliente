let numeros = [2, 4, 6, 8, 10]
let resultado = 1;

for (i = 0; i < numeros.length; i++) {
    if (numeros[i] != 0) {
        resultado = (numeros[i] * resultado)
    }
}

alert("El resultado del producto de los valores de la matriz es " + resultado)