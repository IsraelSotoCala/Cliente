let archivo1 = "50.xsl";
let archivo2 = "30.doc";

getFileExtension(archivo1);
getFileExtension(archivo2);

function getFileExtension(nombreArchivo) {
    alert(nombreArchivo.split('.').pop());
}