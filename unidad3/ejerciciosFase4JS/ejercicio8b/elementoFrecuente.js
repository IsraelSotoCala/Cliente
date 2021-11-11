const numeros = [1, 2, 2, 3, 4, 4, 5];
let duplicados = [];

const arrayTemporal = [...numeros].sort();

for (let i = 0; i < arrayTemporal.length; i++) {
    if (arrayTemporal[i + 1] === arrayTemporal[i]) {
        duplicados.push(arrayTemporal[i]);
    }
}

alert("Los números duplicados son " + duplicados)