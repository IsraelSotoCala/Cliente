let visitas;

if (localStorage.getItem("visitas") != null) {
    visitas = JSON.parse(localStorage.getItem("visitas"));
    visitas++;

    localStorage.setItem("visitas", JSON.stringify(visitas));

} else {
    visitas = 1;

    localStorage.setItem("visitas", JSON.stringify(visitas));

    alert("Esta es tu primera visita")
}



function verCookie() {

    visitas = JSON.parse(localStorage.getItem("visitas"))


    if (visitas == null) {
        visitas = 0;
    }

    alert("Ha visitado la pagina " + visitas + " veces.");

}

function borrarCookie() {
    localStorage.removeItem("visitas")

    alert("Se han reiniciado las visitas.");
}