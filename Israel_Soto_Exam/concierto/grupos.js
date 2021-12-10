var festivales = {
    "Festival": "Navar-Pop",
    "Ciudad": "Ablitas",
    "Anno": 2018,
    "Grupos": [{
            "nombre": "Love of lesbian",
            "compañia": "Warner Music",
            "discos": [
                "Microscopic Movies",
                "Is it Fiction?",
                "Ungravity",
                "Maniobras de escapismo",
                "Cuentos chinos para niños del Japón",
                "1999",
                "La noche eterna. Los días no vividos",
                "El poeta Halley"
            ]
        },
        {
            "nombre": "Izal",
            "compañia": "Autoeditado",
            "discos": [
                "Teletransporte",
                "Magia y efectos especiales",
                "Agujeros de gusano",
                "Copacabana",
                "VIVO",
                "Autoterapia"
            ]
        },
        {
            "nombre": "Miss Caffeina",
            "compañia": "Warner Music",
            "discos": [
                "Imposibilidad del fenómeno",
                "De polve y flores",
                "Detroit"
            ]
        }
    ]
}

//Funcion que carga los datos a mostrar al iniciar la pagina

window.onload = function() {

    //Festival, ciudad y año
    document.getElementById("festival").innerHTML = "Festival: " + festivales.Festival;
    document.getElementById("ciudad").innerHTML = "Ciudad: " + festivales.Ciudad;
    document.getElementById("anno").innerHTML = "Año: " + festivales.Anno;

    //Grupo 1
    document.getElementById("grupo1").innerHTML = festivales.Grupos[0].nombre
    document.getElementById("discografica1").innerHTML = festivales.Grupos[0].compañia;
    //Discos
    document.getElementById("lol1").innerHTML = festivales.Grupos[0].discos[0]
    document.getElementById("lol2").innerHTML = festivales.Grupos[0].discos[1]
    document.getElementById("lol3").innerHTML = festivales.Grupos[0].discos[2]
    document.getElementById("lol4").innerHTML = festivales.Grupos[0].discos[3]
    document.getElementById("lol5").innerHTML = festivales.Grupos[0].discos[4]
    document.getElementById("lol6").innerHTML = festivales.Grupos[0].discos[5]
    document.getElementById("lol7").innerHTML = festivales.Grupos[0].discos[6]
    document.getElementById("lol8").innerHTML = festivales.Grupos[0].discos[7]

    //Grupo 2
    document.getElementById("grupo2").innerHTML = festivales.Grupos[1].nombre
    document.getElementById("discografica2").innerHTML = festivales.Grupos[1].compañia;
    //Discos
    document.getElementById("i1").innerHTML = festivales.Grupos[1].discos[0]
    document.getElementById("i2").innerHTML = festivales.Grupos[1].discos[1]
    document.getElementById("i3").innerHTML = festivales.Grupos[1].discos[2]
    document.getElementById("i4").innerHTML = festivales.Grupos[1].discos[3]
    document.getElementById("i5").innerHTML = festivales.Grupos[1].discos[4]
    document.getElementById("i6").innerHTML = festivales.Grupos[1].discos[5]

    //Grupo 3
    document.getElementById("grupo3").innerHTML = festivales.Grupos[2].nombre
    document.getElementById("discografica3").innerHTML = festivales.Grupos[2].compañia;
    //Discos
    document.getElementById("mf1").innerHTML = festivales.Grupos[2].discos[0]
    document.getElementById("mf2").innerHTML = festivales.Grupos[2].discos[1]
    document.getElementById("mf3").innerHTML = festivales.Grupos[2].discos[2]
}