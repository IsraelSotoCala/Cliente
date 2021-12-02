function ej4() {
    let provincia;
    let ciudad;

    //Cogemos los datos de los selects
    provincia = document.getElementById("provincia").value;
    ciudad = document.getElementById("ciudad").value;

    //Si los campos no estan seleccionados,advertimos
    if (provincia
        .match("Ninguno seleccionado") || ciudad.match("Ninguno seleccionado")) {
        alert("Rellena ambos campos")
    }
}

//Funcion que carga las opciones

function cargarOpciones() {
    let provincia;
    let ciudad;
    let valor;

    provincia = document.getElementById("provincia");
    ciudad = document.getElementById("ciudad");
    // Obtenemos el valor del seleccionado
    valor = provincia.options[provincia
        .selectedIndex].value;

    //Opciones del 1º
    if (valor === "1") {
        ciudad.innerHTML = "<option>Ninguno seleccionado</option><option>Alicante capital</option><option>Elche</option><option>Orihuel</option>";
    } else {
        //Opciones del 2º
        if (valor === "2") {
            ciudad.innerHTML = "<option>Ninguno seleccionado</option><option>Castellon capital</option><option>Oropesa</option><option>Vinaroz</option>";
        } else {
            //Opciones del 3º
            if (valor === "3") {
                ciudad.innerHTML = "<option>Ninguno seleccionado</option><option>Valencia capital</option><option selected='selected'>Torrent</option><option>Mislata</option>";
            }
        }
    }
}

window.onload = function() {
    let provincia;

    provincia = document.getElementById("provincia");
    provincia.onchange = cargarOpciones;
}