var keyCode

function tecla(e) {
    if (window.event) keyCode = window.event.keyCode;
    else if (e) keyCode = e.which;
    alert(keyCode)
}