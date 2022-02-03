function consultarDia() {
    let ciudadaConsultada = document.getElementById("ciudad").value;
    let fecha = document.getElementById("fecha").value;
    let numCiudad;

    if (ciudadaConsultada == "Cadiz") {
        numCiudad = 0;
    } else {
        if (ciudadaConsultada == "El Puerto de Santa Maria") {
            numCiudad = 1;
        } else {
            alert("La ciudad introducida no es válida")
        }
    }

    fetch("./src/data.json")
        .then((Response) => Response.json())
        .then((datos) => {
            for (let i in datos[numCiudad].tiempo) {
                if (fecha == datos[numCiudad].tiempo[i].dia) {
                    document.getElementById("consulta").innerHTML = JSON.stringify(datos[numCiudad].tiempo[i])
                }
            }
        })
}

function consultarEntreDias() {
    let ciudadaConsultada = document.getElementById("ciudad").value;
    let fecha1 = new Date(document.getElementById("fecha1").value);
    let fecha2 = new Date(document.getElementById("fecha2").value);

    let numCiudad;

    if (ciudadaConsultada == "Cadiz") {
        numCiudad = 0;
    } else {
        if (ciudadaConsultada == "El Puerto de Santa Maria") {
            numCiudad = 1;
        } else {
            alert("La ciudad introducida no es válida")
        }
    }

    console.log(fecha1);
    console.log(fecha2)

    fetch("./src/data.json")
        .then((Response) => Response.json())
        .then((datos) => {
            for (let i in datos[numCiudad].tiempo) {

            }
        })
}