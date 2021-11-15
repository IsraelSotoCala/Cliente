let suma = () => {
    let a = window.prompt("Introduzca el primer número: ")
    let b = window.prompt("Introduzca el segundo número: ")
    document.innerHTML = a;
    document.innerHTML = b;
    let resultado;
    resultado = parseInt(a) + parseInt(b)
    document.write("El resultado de la suma es " + resultado)
}

let resta = () => {
    let a = window.prompt("Introduzca el primer número: ")
    let b = window.prompt("Introduzca el segundo número: ")
    document.innerHTML = a;
    document.innerHTML = b;
    let resultado;
    resultado = parseInt(a) - parseInt(b)
    document.write("El resultado de la resta es " + resultado)
}

let multiplicacion = () => {
    let a = window.prompt("Introduzca el primer número: ")
    let b = window.prompt("Introduzca el segundo número: ")
    document.innerHTML = a;
    document.innerHTML = b;
    let resultado;
    resultado = parseInt(a) * parseInt(b)
    document.write("El resultado del producto es " + resultado)
}

let division = () => {
    let a = window.prompt("Introduzca el primer número: ")
    let b = window.prompt("Introduzca el segundo número: ")
    document.innerHTML = a;
    document.innerHTML = b;
    let resultado;
    resultado = parseInt(a) / parseInt(b)
    document.write("El resultado de la división es " + resultado)
}