let email = window.prompt("Introduce tu e-mail: ");

let ocultador = "...";

let arroba = "@";

let partir = email.split("@");

partir[0] = "...";

alert(partir[0] + ocultador + arroba + partir[1]);