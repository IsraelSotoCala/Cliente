function​​ mostrarMensaje​(evento) { if​ (evento.type === ​"keyup"​) { alert(evento.keyCode); } else​​ if​ (evento.type === ​"click"​) { alert(evento.clientX + ​" "​ + evento.clientY); } }
document​.getElementById(​"miObjeto"​).addEventListener(​"click"​, mostrarMensaje);
document​.addEventListener(​"keyup"​, mostrarMensaje);
document​.getElementById(​"miObjeto"​).addEventListener(​"dblclick"​, ​function() { alert(​"Codigo metido directamente"​); });