let cad = "Israel:Soto:147769";
let tfo;
cad = cad.toUpperCase();
alert(cad);
splitTodosCampos = cad.split(":");
split1Campo = cad.split(":", 1);
alert(splitTodosCampos);
alert(split1Campo);
tfo = splitTodosCampos[2];
//Cambio en el teléfono los números 7 por 5
tfo = tfo.replace("7", "5");
alert(tfo)
    //Muestra el 5 numero del tfo
alert(tfo.charAt(4));
alert("Gimme money")