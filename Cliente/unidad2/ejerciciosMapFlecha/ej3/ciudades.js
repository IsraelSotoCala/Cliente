const ciudades = new Map([
    ["Lima", "15000"],
    ["Guarroman", "1500"],
    ["Villabajo", "759"],
    ["Villarriba", "760"],
    ["Villamedio", "350"],
    ["Cuenca", "50000"]
])

function verTodo() {
    let result = "";
    for (let [key, value] of ciudades) {
        result += key + " = " + value + " ; ";
    }
    alert(
        result
    );
}

function numCiudades() {
    alert("El número de ciudades es : " + ciudades.size)
}

function borrar() {
    const ciudadBorrar = window.prompt("Ingrese el nombre de la ciudad a borrar : ")
    if (ciudades.has(ciudadBorrar)) {
        ciudades.delete(ciudadBorrar)
    }
}

function anadir() {
    let ciudadAnadida = window.prompt("Ingrese el nombre de la ciudad a añadir: ")
    let habitantesAnadidos = window.prompt("Ingrese el número de habitantes de la ciudad añadida: ")
    ciudades.set(ciudadAnadida, habitantesAnadidos);
}