function verDatos() {
    fetch("./src/data.json")
        .then((Response) => Response.json())
        .then((datos) => {
            document.getElementById("vuelos").innerHTML = JSON.stringify(datos);
        });
}

function vuelosDestino() {
    let destino = prompt("Introduce el destino");
    let lista = [];
    fetch("./src/data.json")
        .then((Response) => Response.json())
        .then((data) => {
            for (let i = 0; i < data.length; i++) {
                if (data[i].destino.includes(destino)) {
                    lista.push(JSON.stringify(data[i]))
                }
            }
            document.getElementById("ej2").innerHTML = lista
        });
}

function vuelosTarde() {
    let hora = window.prompt("Introduce la hora");
    let lista = [];
    fetch("./src/data.json")
        .then((Response) => Response.json())
        .then((data) => {
            for (let i in data) {
                if (hora < data[i].horallegada) {
                    lista.push(JSON.stringify(data[i]))
                }
            }
            document.getElementById("ej3").innerHTML = lista
        })

}