function validar() {

    var valor = document.getElementById("numero").value;

    if (valor.length < 3 && valor != "") {
        return true;
    } else {
        return false;
    }
}