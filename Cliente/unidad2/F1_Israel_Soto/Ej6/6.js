let nota1
let nota2
let nota3
let promedio
let clave1
let clave2

//Notas

nota1 = window.prompt("Ingrese la primera nota: ")
nota2 = window.prompt("Ingrese la segunda nota: ")
nota3 = window.prompt("Ingrese la tercera nota: ")


promedio = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3))/3

if (promedio >= 7) {
document.write("Promocionado <br>")
}
else {
    document.write("No promocionado <br>")
}

//Claves

clave1 = window.prompt("Ingrese la clave:")
clave2 = window.prompt("Vuelva a introducir la clave")

if(clave1===clave2) {
    document.write("Las claves son iguales")
}
else {
    document.write("Las claves no son iguales")
}
