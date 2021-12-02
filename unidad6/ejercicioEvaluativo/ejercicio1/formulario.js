//Validación nombre

function validarNombre() {
    let nombre = document.getElementById("nombre").value
    if (nombre == "") {
        document.getElementById("infoNombre").innerHTML = "Nombre inválido, debe completar el campo"
        document.getElementById("infoNombre").style.color = "red"
        nombre.focus();
        document.getElementById("nombre").style.borderColor = "red";
    } else {
        document.getElementById("infoNombre").innerHTML = "Nombre válido"
        document.getElementById("infoNombre").style.color = "black"
        document.getElementById("nombre").style.borderColor = "black";
    }
}

//Validación email

function validarEmail() {
    let email = document.getElementById("email").value
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("infoEmail").innerHTML = "La dirección de email " + email + " es correcta.";
        document.getElementById("infoEmail").style.color = "black"
        document.getElementById("email").style.borderColor = "black";
    } else {
        document.getElementById("infoEmail").innerHTML = "La dirección de correo electrónico es incorrecta"
        document.getElementById("infoEmail").style.color = "red";
        email.focus();
        document.getElementById("email").style.borderColor = "red";
    }
}

//Validacion contraseña

function validarContrasenia() {

    var p1 = document.getElementById("password").value;

    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(p1)) {
        document.getElementById("infoContrasenia").innerHTML = "La contraseña es válida";
        document.getElementById("infoContrasenia").style.color = "black"
        document.getElementById("password").style.borderColor = "black";
    } else {
        document.getElementById("infoContrasenia").innerHTML = "Contraseña no válida, debe contener mínimo 8 caracteres y un número"
        document.getElementById("infoContrasenia").style.color = "red"
        p1.focus();
        document.getElementById("password").style.borderColor = "red";
    }

}

//Contraseña repetida

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
        p2.focus();
        document.getElementById("password2").style.borderColor = "red";
    }
}

//Hace que el checkbox este desmarcado al cargar la página 

window.onload = function() {
    var inputs = document.getElementsByTagName('input');

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type == 'checkbox') {
            inputs[i].checked = false;
        }
    }
}

//Verificacion suma

let num1 = Math.floor(Math.random() * 10)

let num2 = Math.floor(Math.random() * 10)

window.onload = function cargar() {
    document.getElementById("infoSuma").innerHTML = "Cuál sería la suma de " + num1 + " + " + num2;
}

function suma() {

    let suma = num1 + num2;

    if (document.getElementById("verificacion").value == suma) {
        document.getElementById("resultado").innerHTML = "El resultado es el correcto"
        document.getElementById("resultado").style.color = "black"
        document.getElementById("verificacion").style.borderColor = "black"
    } else {
        document.getElementById("resultado").innerHTML = "El resultado es incorrecto"
        document.getElementById("resultado").style.color = "red"
        document.getElementById("verificacion").style.borderColor = "red"
        document.getElementById("verificacion").focus();
    }
}

//Enviar formulario

function habilitar() {

    if (document.getElementById("condiciones").checked == true) {
        document.getElementById("enviar").disabled = false;
    } else {
        document.getElementById("enviar").disabled = true;
    }
}