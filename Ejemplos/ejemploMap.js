const mapa1 = new Map([
    ["peruano", "peruvian"],
    ["verde", "green"],
    ["espada", "sword"],
]);

const palcastellano = window.prompt("Ingrese la palabra:");

if (mapa1.has(palcastellano)){
    document.write(`La traducción de ${palcastellano} es ${mapa1.get(palcastellano)}`);
}
else
document.write(`No existe una traducción para la palabra ${palcastellano}`)