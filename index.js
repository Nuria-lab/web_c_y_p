var password = "12345"

function passcheck() {
    if(document.getElementById("pass1").value != password) {
        alert("Contraseña incorrecta");
        return false;

    }

    if(document.getElementById("pass1").value == password) {
        alert("Contraseña válida, click ACEPTAR para entrar en la página");
    }

}