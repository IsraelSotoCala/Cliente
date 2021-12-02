function comprobarEmail() {
    let servidores;
    let texto;
    let soloServidor;
    let found = 0;

    servidores = ["google.com", "hotmail.es", "proton.es"];

    texto = document.getElementById("mail").value;

    soloServidor = texto.substring(texto.indexOf("@") + 1);

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(texto)) {
        alert("Formato email incorrecto");
    } else {
        for (let i = 0; i < servidores.length; i++) {
            if (soloServidor === servidores[i]) {
                found++;
            }
        }

        if (found >= 1) {
            alert("Formato correcto, servidor encontrado");
        } else {
            alert("Formato correcto, pero servidor no encontrado");
        }
    }
}