let fecha1 = new Date("November 10, 2021")

let fecha2 = new Date("June 24, 2007")

let diferenciaDias = Math.trunc(((((fecha1 - fecha2) / 1000) / 3600) / 24));

alert("Las dos fechas son " + fecha1 + " y " + fecha2)
alert("Las dos fechas se diferencian por " + diferenciaDias + " dias")