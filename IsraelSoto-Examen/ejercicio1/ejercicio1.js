//Comprueba que la contraseña es correcta

function validarContrasenia() {

    let p1 = document.getElementById("password").value

    //Si empieza por mayus, tiene 6 caracteres y un dígito es válida
    if (/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/.test(p1)) {
        document.getElementById("infoContrasenia").innerHTML = "La contraseña es válida";
        document.getElementById("infoContrasenia").style.color = "blue"
        document.getElementById("password").style.borderColor = "black";
    }
    //Si no, no lo es
    else {
        document.getElementById("infoContrasenia").innerHTML = "La contraseña debe empezar por una letra mayúscula, tener un mínimo de 6 caracteres y contener, al menos, un dígito"
        document.getElementById("infoContrasenia").style.color = "red"
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("password").focus();
        document.getElementById("password").select();
    }
}

//Aquí comprobamos que las contraseñas sean iguales

function contraseniaRepetida() {
    var p1 = document.getElementById("password").value;
    var p2 = document.getElementById("password2").value;

    if (p2.match(p1)) {
        document.getElementById("infoRepetida").innerHTML = "Las contraseñas coinciden";
        document.getElementById("infoRepetida").style.color = "blue"
        document.getElementById("password2").style.borderColor = "black"
    } else {
        document.getElementById("infoRepetida").innerHTML = "Las contraseñas no coinciden, por favor haz que coincidan"
        document.getElementById("infoRepetida").style.color = "red"
        document.getElementById("password").focus();
        document.getElementById("password").select();

    }
}

//Y aquí que en el indicio de contraseña no sea igual a la contraseña

function indicioPassw() {
    var p1 = document.getElementById("password").value;
    var indicio = document.getElementById("indicioPassword").value;

    if (indicio.match(p1)) {
        document.getElementById("infoIndicio").innerHTML = "El indicio de contraseña no puede contener la contraseña"
        document.getElementById("indicioPassword").focus("indicioPassword")
        document.getElementById("indicioPassword").select("indicioPassword")
    } else {
        document.getElementById("infoIndicio").innerHTML = "El indicio es válido"
        document.getElementById("infoIndicio").style.color = "blue"
    }

}