class Hospital {
    constructor(nombre, ciudad, numPacientes) {
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.numPacientes = numPacientes;

        this.arrayPacientes = new Array();

        for (let i = 0; i < numPacientes; i++) {
            this.arrayPacientes[i] = new Paciente("45327598F", "Pepe" + i, "Enfermo")
        }
    }

    consultarEnfermedadPaciente() {
        let n = window.prompt("Introduce el código del paciente: ")
        this.arrayPacientes[n].consultarEnfermedad();
    }

    darAltaPaciente() {
        let n = window.prompt("Introduce el código del paciente al que quiere dar de alta: ")
        delete this.arrayPacientes[n]
        alert("El paciente " + n + " ha sido dado de alta")
    }
}

class Paciente {
    constructor(DNI, nombre, enfermedad) {
        this.DNI = DNI;
        this.nombre = nombre;
        this.enfermedad = enfermedad;
    }

    consultarEnfermedad() {
        alert("El paciente " + this.nombre + " se encuentra " + this.enfermedad)
    }
}

function main() {

    let frontela = new Hospital("Frontela", "El Puerto", 10)

    let continuar = new Boolean(true)

    let menu;

    while (continuar) {
        menu = window.prompt("Elija la opción \n " +
            "1-Consultar paciente \n " +
            "2-Dar de alta a paciente \n " +
            "3-Terminar")
        switch (menu) {
            case '1':
                frontela.consultarEnfermedadPaciente()
                break;
            case '2':
                frontela.darAltaPaciente()
                break;
            case '3':
                continuar = false
                break;
        }
    }
}

main()