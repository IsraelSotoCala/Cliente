let temperaturaC
let temperaturaF

function convertirCelcius() {
    temperaturaC = window.prompt("Introduzca la temperatura en Celsius: ")
    let celsiusConvertidos = ((temperaturaC * 9) / 5) + 32;

    alert("Son " + celsiusConvertidos + "Fº");
}

function convertirFarenheit() {
    temperaturaF = window.prompt("Introduzca la temperatura en Farenheit:")
    let farenheitConvertidos = ((temperaturaF - 32) * 5) / 9;

    alert("Son " + farenheitConvertidos + "Cº")
}