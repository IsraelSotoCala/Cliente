//Javascript Ejercicio 1

// Calcular letraDNI

function calcularLetra(numeroDni) {
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    return letras[numeroDni % 23];
}

//Separamos los números y la letra

function comprobarDNI() {
    let numerosDNI = document.getElementById("textoDNI");
    let texto = numerosDNI.value.toUpperCase();
    numerosDNI.value = texto;
    let dni = texto.substring(0, 8);
    let letra = texto[8];

    //Llamamos a la función de calcular letra
    //Si no coincide con el calculo no es la letra
    //Si coincide si pertenece

    if (letra !== calcularLetra(dni)) {
        alert("La letra no coincide con DNI");
    }
    alert("La letra del DNI coincide")
}

//Javascript Ejercicio 2

//Función para comprobar si el email es correcto

function comprobarEmail() {
    //Variables
    let servidores;
    let texto;
    let despuesServidor;
    let servidoresEncontrados = 0;

    //Servidores de correo
    servidores = ["gmail.com", "hotmail.es", "proton.es"];

    //Lo que va antes del @
    texto = document.getElementById("mail").value;

    //Lo que va después de la @
    despuesServidor = texto.substring(texto.indexOf("@") + 1);

    //Comprobamos que el formato del email sea correcto
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(texto)) {
        //Email incorrecto
        alert("Formato email incorrecto");
    } else {
        //Si es correcto coomprobamos los servidores de correo
        for (let i = 0; i < servidores.length; i++) {
            if (despuesServidor ===
                servidores[i]) {
                servidoresEncontrados++;
            }
        }

        //Si ha encontrado coincidencia con uno o más servidores
        //Servidor encontrado
        if (servidoresEncontrados >= 1) {
            alert("Formato correcto, servidor encontrado");
        } else {
            //Si no, servidor no encontrado
            alert("Formato correcto, pero servidor no encontrado");
        }
    }
}

//Javascript Ejercicio 3

//Función para comprobar el anagrama

function comprobarAnagrama() {

    //Separamos las letras
    let t1 = document.getElementById("texto1").value.split('');
    let t2 = document.getElementById("texto2").value.split('');

    //Y ahora las ordenamos 
    let result1 = t1.sort();
    let result2 = t2.sort();

    //Si las letras ordenadas son iguales son anagramas si no, no lo son
    if (result1.toString() === result2.toString()) {
        alert("Son anagramas");
    } else {
        alert("No son anagramas");
    }

}

//Javascript Ejercicio 4

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