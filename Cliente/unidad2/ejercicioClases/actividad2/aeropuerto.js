class Aeropuerto {
    constructor(nombre, ciudad, numeroVuelosDiarios) {
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.numeroVuelosDiarios = numeroVuelosDiarios;

        this.arrayVuelos = new Array();

        for (let i = 0; i < numeroVuelosDiarios; i++) {
            this.arrayVuelos[i] = new Vuelo(i, 16, 18)
        }
    }

    //Consultar llegadas y modificarlas

    consultarHoraLlegada() {
        let n = window.prompt("Introduce el código del vuelo: ")
        this.arrayVuelos[n].consultarLlegada();
    }

    cambiarHoraLlegada() {
        let n = window.prompt("Introduce el código del vuelo: ")
        let nuevaLlegada = window.prompt("Introduzca la nueva hora de llegada: ")
        this.arrayVuelos[n].cambiarLlegada(nuevaLlegada)
    }

    //Consultar salidas y modificarlas

    consultarHoraSalida() {
        let n = window.prompt("Introduce el código del vuelo: ")
        this.arrayVuelos[n].consultarSalida();
    }

    cambiarHoraSalida() {
        let n = window.prompt("Introduce el código del vuelo: ")
        let nuevaSalida = window.prompt("Introduzca la nueva hora de salida: ")
        this.arrayVuelos[n].cambiarSalida(nuevaSalida)
    }

    //Comprobar si la hora de salida es posterior a la de llegada

    comprobarHoraSL() {
        let n = window.prompt("Introduce el código del vuelo a comparar: ")
        this.arrayVuelos[n].comprobarHora();
    }

}
//Clase Vuelo

class Vuelo {
    constructor(codigo, hora_llegada, hora_salida) {
        this.codigo = codigo;
        this.hora_llegada = hora_llegada;
        this.hora_salida = hora_salida;
    }

    //Consultar y cambiar a llegada

    consultarLlegada() {
        alert("La hora de llegada es " + this.hora_llegada)
    }

    cambiarLlegada(nuevaLlegada) {
        this.hora_llegada = nuevaLlegada;
        alert("La hora de llegada ha sido actualizada a " + this.hora_llegada)
    }

    //Consultar y cambiar salida

    consultarSalida() {
        alert("La hora de salida es " + this.hora_salida)
    }

    cambiarSalida(nuevaSalida) {
        this.hora_salida = nuevaSalida;
        alert("La hora de salida ha sido actualizada a " + this.hora_salida)
    }

    //Comprobar Hora

    comprobarHora() {
        if (this.hora_salida > this.hora_llegada) {
            alert("La hora de salida es posterior a la de llegada")
        } else
            alert("Error, la hora de llegada es posterior a la de salida")
    }
}

//Función main

function main() {

    let aeropuertoJerez = new Aeropuerto("AeroJerez", "Jerez", 10)
    let continuar = new Boolean(true)
    let menu

    while (continuar) {
        menu = window.prompt("Elija la opción que desee : \n " +
            "1-Consultar hora de llegada \n " +
            "2-Modificar hora de llegada \n " +
            "3-Consultar hora de salida \n " +
            "4-Modificar hora de salida \n " +
            "5-Comprobar si la hora de salida es posterior a la de la llegada \n " +
            "6-Terminar")
        switch (menu) {
            case '1':
                aeropuertoJerez.consultarHoraLlegada();
                break;
            case '2':
                aeropuertoJerez.cambiarHoraLlegada();
                break;
            case '3':
                aeropuertoJerez.consultarHoraSalida();
                break;
            case '4':
                aeropuertoJerez.cambiarHoraSalida();
                break;
            case '5':
                aeropuertoJerez.comprobarHoraSL();
                break;
            case '6':
                continuar = false
                break;
        }
    }
}

//Llamamos a main

main()