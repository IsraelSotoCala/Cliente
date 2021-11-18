function tecla(event) {
    let codigoTecla = event.keyCode;
    let teclaConvertida = String.fromCharCode(codigoTecla);
    document.getElementById('texto').innerHTML = "Código: " + codigoTecla + " = Tecla: " + teclaConvertida;
}