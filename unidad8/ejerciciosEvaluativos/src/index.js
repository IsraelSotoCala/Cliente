//Esta funcion consulta el tiempo de un dia

function consultarDia() {

    //Obtenemos la ciudad y la fecha
    let ciudadaConsultada = document.getElementById("ciudad").value;
    let fecha = document.getElementById("fecha").value;

    let numCiudad;

    //Creamos la tabla
    let tabla = document.createElement("table");

    tabla.style.cssText = "background-color:white";
    "border: 3px solid black";

    document.getElementById("consulta").textContent = null;
    document.getElementById("consulta").appendChild(tabla);

    //Creamos la fila
    let fila;

    fila = document.createElement("tr");

    fila.style.cssText = "border: 3px solid black";

    //Creamos las columnas
    let columna1;

    columna1 = document.createElement("th");

    columna1.style.cssText = "border: 3px solid black";

    columna1.innerHTML = "Ciudad";

    let columna2;

    columna2 = document.createElement("th");

    columna2.style.cssText = "border: 3px solid black";

    columna2.innerHTML = "Dia"

    let columna3;

    columna3 = document.createElement("th");

    columna3.style.cssText = "border: 3px solid black";

    columna3.innerHTML = "Viento(KM/H)"

    let columna4;

    columna4 = document.createElement("th");

    columna4.style.cssText = "border: 3px solid black";

    columna4.innerHTML = "Temperatura(ºC)"

    let columna5;

    columna5 = document.createElement("th");

    columna5.style.cssText = "border: 3px solid black";

    columna5.innerHTML = "Sol"

    //Añadimos las columnas a la fil
    fila.appendChild(columna1);
    fila.appendChild(columna2);
    fila.appendChild(columna3);
    fila.appendChild(columna4);
    fila.appendChild(columna5);

    //Añadimos la fila a las columnas
    tabla.appendChild(fila);


    //Si la ciudad consultada es Cadiz asignamos 0 a numCiudad
    //Para recorrer el JSON, si es el Puerto le asignamos 1
    if (ciudadaConsultada == "Cadiz") {
        numCiudad = 0;
    } else {
        if (ciudadaConsultada == "El Puerto de Santa Maria") {
            numCiudad = 1;
        } else {
            alert("La ciudad introducida no es válida")
        }
    }

    //Hacemos fetch del JSON
    fetch("./src/data.json")
        .then((Response) => Response.json())
        .then((datos) => {
            //Recorremos el JSON
            for (let i in datos[numCiudad].tiempo) {
                //Si la fecha coincide con la que se encuentre en el JSON
                if (fecha == datos[numCiudad].tiempo[i].dia) {
                    //Creamos la filas y columnas donde aparecerán los datos
                    fila = document.createElement("tr");

                    fila.style.cssText = "border: 3px solid black";

                    columna1 = document.createElement("th");

                    columna1.style.cssText = "border: 3px solid black";

                    //En cada columna introducimos los datos correspondientes del JSON
                    columna1.innerHTML = datos[numCiudad].ciudad;

                    columna2 = document.createElement("th");

                    columna2.style.cssText = "border: 3px solid black";

                    columna2.innerHTML = datos[numCiudad].tiempo[i].dia

                    columna3 = document.createElement("th");

                    columna3.style.cssText = "border: 3px solid black";

                    columna3.innerHTML = datos[numCiudad].tiempo[i].viento

                    columna4 = document.createElement("th");

                    columna4.style.cssText = "border: 3px solid black";

                    columna4.innerHTML = datos[numCiudad].tiempo[i].temperatura

                    columna5 = document.createElement("th");

                    columna5.style.cssText = "border: 3px solid black";

                    columna5.innerHTML = datos[numCiudad].tiempo[i].luz

                    //Añadimos las columnas a la fila
                    fila.appendChild(columna1);
                    fila.appendChild(columna2);
                    fila.appendChild(columna3);
                    fila.appendChild(columna4);
                    fila.appendChild(columna5);

                    //Añadimos la fila a la tabla
                    tabla.appendChild(fila);
                }
            }
        })
}

//Con esta función consultamos los días buenos para ir a la playa
function consultarEntreDias() {
    //Recogemos los datos introducidos, ciudad y las 2 fechas
    let ciudadaConsultada = document.getElementById("ciudad").value;
    let fecha1 = new Date(document.getElementById("fecha1").value);
    let fecha2 = new Date(document.getElementById("fecha2").value);

    //Creamos la tabla
    let tabla = document.createElement("table");

    tabla.style.cssText = "background-color:white";
    "border: 3px solid black";

    document.getElementById("consultaentre").textContent = null;
    document.getElementById("consultaentre").appendChild(tabla);

    //Creamos la fila
    let fila;

    fila = document.createElement("tr");

    fila.style.cssText = "border: 3px solid black";

    //Creamos las columnas
    let columna1;

    columna1 = document.createElement("th");

    columna1.style.cssText = "border: 3px solid black";

    columna1.innerHTML = "Ciudad";

    let columna2;

    columna2 = document.createElement("th");

    columna2.style.cssText = "border: 3px solid black";

    columna2.innerHTML = "Dia"

    let columna3;

    columna3 = document.createElement("th");

    columna3.style.cssText = "border: 3px solid black";

    columna3.innerHTML = "Viento(KM/H)"

    let columna4;

    columna4 = document.createElement("th");

    columna4.style.cssText = "border: 3px solid black";

    columna4.innerHTML = "Temperatura(ºC)"

    let columna5;

    columna5 = document.createElement("th");

    columna5.style.cssText = "border: 3px solid black";

    columna5.innerHTML = "Sol"

    //Añadimos las filas a las columnas
    fila.appendChild(columna1);
    fila.appendChild(columna2);
    fila.appendChild(columna3);
    fila.appendChild(columna4);
    fila.appendChild(columna5);

    //Añadimos la fila a la tabla
    tabla.appendChild(fila);

    let numCiudad;

    //Si la ciudad consultada es Cadiz asignamos 0 a numCiudad
    //Para recorrer el JSON, si es el Puerto le asignamos 1
    if (ciudadaConsultada == "Cadiz") {
        numCiudad = 0;
    } else {
        if (ciudadaConsultada == "El Puerto de Santa Maria") {
            numCiudad = 1;
        } else {
            alert("La ciudad introducida no es válida")
        }
    }

    //Hacemos Fetch al JSON
    fetch("./src/data.json")
        .then((Response) => Response.json())
        .then((datos) => {
            //Recorremos el JSON buscando el tiempo 
            for (let i in datos[numCiudad].tiempo) {
                //Creamos una variable que almacene la fecha recorrida para compararla ahora
                let fechasIntermedias = new Date(JSON.parse(JSON.stringify(datos[numCiudad].tiempo[i].dia)));
                //Aquí hacemos la comprobación
                //El dia de la fecha que almacenamos tiene que ser mayor que el de la primera
                //Y menor que el de la segunda
                //El mes tiene que ser igual al de uno de los 2 y el año lo mismo
                if (fechasIntermedias.getDate() >= fecha1.getDate() && fechasIntermedias.getDate() <= fecha2.getDate() &&
                    fechasIntermedias.getMonth() == (fecha1.getMonth() || fecha2.getMonth()) &&
                    fechasIntermedias.getFullYear() == (fecha1.getFullYear() || fecha2.getFullYear())) {
                    //Ahora comprobamos que sea buen día para ir a la playa
                    //Para ello el viento tiene que ser menor que 10 KM/H, la temperatura mayor a 20ºC y el clima soleado
                    if (parseInt(datos[numCiudad].tiempo[i].viento) < 10 && parseInt(datos[numCiudad].tiempo[i].temperatura) > 20 && datos[numCiudad].tiempo[i].luz == "Soleado") {

                        //Creamos la fila
                        fila = document.createElement("tr");

                        fila.style.cssText = "border: 3px solid black";

                        //Creamos las columnas
                        columna1 = document.createElement("th");

                        columna1.style.cssText = "border: 3px solid black";

                        //Les insertamos los datos correspondientes del JSON
                        columna1.innerHTML = datos[numCiudad].ciudad;

                        columna2 = document.createElement("th");

                        columna2.style.cssText = "border: 3px solid black";

                        columna2.innerHTML = datos[numCiudad].tiempo[i].dia

                        columna3 = document.createElement("th");

                        columna3.style.cssText = "border: 3px solid black";

                        columna3.innerHTML = datos[numCiudad].tiempo[i].viento

                        columna4 = document.createElement("th");

                        columna4.style.cssText = "border: 3px solid black";

                        columna4.innerHTML = datos[numCiudad].tiempo[i].temperatura

                        columna5 = document.createElement("th");

                        columna5.style.cssText = "border: 3px solid black";

                        columna5.innerHTML = datos[numCiudad].tiempo[i].luz

                        //Añadimos las columnas a las filas
                        fila.appendChild(columna1);
                        fila.appendChild(columna2);
                        fila.appendChild(columna3);
                        fila.appendChild(columna4);
                        fila.appendChild(columna5);

                        //Añadimos la fila a la tabla
                        tabla.appendChild(fila);

                    }
                }
            }
        })
}