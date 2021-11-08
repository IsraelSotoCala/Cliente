let navidad = new Date("December 25, 2021 12:00:00");

let diaActual = new Date("November 3, 2021 17:34:00");

let diasNavidad = Math.trunc(((((navidad - diaActual) / 1000) / 3600) / 24));

alert("Quedan " + diasNavidad + " dias hasta navidad");