//Esta función busca la pelicula o serie por titulo
function buscar() {
  let pelicula = document.getElementById("pelicula").value;
  fetch("http://www.omdbapi.com/?t=" + pelicula + "&apikey=fda40987")
    .then((Response) => Response.json())
    .then((datos) => {
      //Aquí con jquery añadimos la tabla al contenedor vacio
      $("#resultado").append(
        "<table><tr><th>" +
          datos.Title +
          "</th></tr><th>" +
          datos.Year +
          "</th></tr><th>" +
          datos.Rated +
          "</th></tr><th>" +
          datos.Released +
          "</th></tr><th>" +
          datos.Runtime +
          "</th></tr><th>" +
          datos.Genre +
          "</th></tr><th>" +
          datos.Director +
          "</th></tr></table>"
      );
    });
}

//Con esta función vaciamos el contenido del contenedor vaciando la tabla
function borrar() {
  $("#resultado").empty();
}
