let cadena1 = 'Estamos de Javascript';

let cadena2 = 'haciendo ejercicios';

let corte = 8;


let resultado = [cadena1.slice(0, corte), cadena2, cadena1.slice(corte)].join(' ')

alert(resultado);