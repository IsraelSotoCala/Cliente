function validarNombre() {
    let nombre = document.getElementById("nombre").value
    if (nombre == "") {
        document.getElementById("infoNombre").innerHTML = "Nombre inválido, debe completar el campo"
        document.getElementById("infoNombre").style.color = "red"
        nombre.focus;
        document.getElementById("nombre").style.borderColor = "red";
    } else {
        document.getElementById("infoNombre").innerHTML = "Nombre válido"
        document.getElementById("infoNombre").style.color = "black"
        document.getElementById("nombre").style.borderColor = "black";
    }
}

function validarEmail() {
    let email = document.getElementById("email").value
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("infoEmail").innerHTML = "La dirección de email " + email + " es correcta.";
        document.getElementById("infoEmail").style.color = "black"
        document.getElementById("email").style.borderColor = "black";
    } else {
        document.getElementById("infoEmail").innerHTML = "La dirección de correo electrónico es incorrecta"
        document.getElementById("infoEmail").style.color = "red";
        email.focus;
        document.getElementById("email").style.borderColor = "red";
    }
}

function validarContrasenia() {

    var p1 = document.getElementById("password").value;

    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(p1)) {
        document.getElementById("infoContrasenia").innerHTML = "La contraseña es válida";
        document.getElementById("infoContrasenia").style.color = "black"
        document.getElementById("password").style.borderColor = "black";
    } else {
        document.getElementById("infoContrasenia").innerHTML = "Contraseña no válida, debe contener mínimo 8 caracteres y un número"
        document.getElementById("infoContrasenia").style.color = "red"
        p1.focus;
        document.getElementById("password").style.borderColor = "red";
    }

}

function contraseniaRepetida() {
    var p1 = document.getElementById("password").value;
    var p2 = document.getElementById("password2").value;

    if (p2.match(p1)) {
        document.getElementById("infoRepetida").innerHTML = "Las contraseñas coinciden";
        document.getElementById("infoRepetida").style.color = "black"
        document.getElementById("password2").style.borderColor = "black"
    } else {
        document.getElementById("infoRepetida").innerHTML = "Las contraseñas no coinciden, por favor haz que coincidan"
        document.getElementById("infoRepetida").style.color = "red"
        p2.focus
        document.getElementById("password2").style.borderColor = "red";
    }
}