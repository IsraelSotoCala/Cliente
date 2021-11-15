let variableInicial = "variable";
let nombreVariable = window.prompt("Introduzca el nombre de la variable: ");

let x = {
    [variableInicial]: nombreVariable,
};


alert((x[variableInicial]));