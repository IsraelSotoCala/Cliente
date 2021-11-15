// Definimos la clase Colegio

class Colegio {

    constructor(nombre, nAulas, nAlumnos) {
        // Atributos del colegio
        this.nombre = nombre;
        this.nAulas = nAulas;
        // Aqui guardaremos Array de alumnos
        this.arrayAlumnos = new Array();

        // Codigo inicializador del colegio	
        for (let i = 0; i < nAlumnos; i++) {
            // Creamos alumnos con id i, nombre Alumno + i que es el nº de alumno y media 5.0
            //Si metemos en la opción del id más de 10 alumnnos no funcionará
            this.arrayAlumnos[i] = new Alumno(i, "Alumno" + i, 5.0);
        }

    }

    //Preguntamos el id del alumno para consultar la nota
    consultarNotaMedia() {
        let n = window.prompt("Introduce el id del alumno: ")
        this.arrayAlumnos[n].consultarNota();
    }


    //Preguntamos el id del alumno para luego cambiar la nota
    cambiarNotaMedia() {
        let n = window.prompt("Introduce el id del alumno: ")
        let nuevaNota = window.prompt("Introduzca la nueva nota del alumno : ")
        this.arrayAlumnos[n].cambiarNotaMedia(nuevaNota);
    }
}

// Definimos la clase alumno

class Alumno {


    constructor(id, nombre, notaMedia) {
        // Atributos clase alumno
        this.id = id;
        this.nombre = nombre;
        this.notaMedia = notaMedia;
    }

    // Funciones clase alumno

    consultarNota() {
        alert("El alumno " + this.nombre + " tiene de nota " + this.notaMedia);
    }

    // Cambia la nota media

    cambiarNotaMedia(nuevaNota) {
        this.notaMedia = nuevaNota;
        alert("La nueva nota media del alumno es : " + this.notaMedia)
    }

}

function main() {

    // Creo un colegio

    let miCole = new Colegio("Ceed", 10, 10);
    let continuar = new Boolean(true)
    let menu;

    while (continuar) {
        menu = window.prompt("Elija la opción que desea del menú : \n " +
            "1-Consultar nota media \n " +
            "2-Modificar nota media \n " +
            "3-Terminar")
        switch (menu) {
            case '1':
                miCole.consultarNotaMedia()
                break;
            case '2':
                miCole.cambiarNotaMedia()
                break;
            case '3':
                continuar = false
                break
        }
    }

}

// Llamamos a la funcion principal
main();