let visitas;

if (getCookie("visitas") != "") {
    visitas = document.cookie.replace(/(?:(?:^|.*;\s*)visitas\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    visitas = parseInt(visitas) || 0;
    visitas++;

    document.cookie = 'visitas=' + visitas + '; expires=Mon, 1 Jan 2030 12:00:00 UTC; path=/';
} else {
    visitas = 1;

    document.cookie = "visitas=" + visitas + "; expires=Mon, 1 Jan 2030 12:00:00 UTC; path=/";

    alert("Es su primera visita.");
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];

        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }

    return "";
}

function verCookie() {
    visitas = document.cookie.replace(/(?:(?:^|.*;\s*)visitas\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    visitas = parseInt(visitas) || 0;

    alert("Ha visitado la pagina " + visitas + " veces.");
}

function borrarCookie() {
    visitas = document.cookie.replace(/(?:(?:^|.*;\s*)visitas\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    visitas = parseInt(visitas) || 0;

    document.cookie = "visitas=" + visitas + "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    alert("Se han reiniciado las visitas.");
}