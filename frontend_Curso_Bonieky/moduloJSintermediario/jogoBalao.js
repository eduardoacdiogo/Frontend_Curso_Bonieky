function addBola() {
    // como se estivesse fazendo <div class="bola"></div>
    var bola = document.createElement("div");
    bola.setAttribute("class", "bola");

    var x = Math.floor(Math.random() * 500);
    var y = Math.floor(Math.random() * 400);

    //posicionar a bola <div style="left:123";top:""424;></div>
    bola.setAttribute("style", "left:" + x + "px;" + "top:" + y + "px;");

    bola.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(bola);
}

function estourar(elemento) {
    document.body.removeChild(elemento);
}

function iniciar() {
    setInterval(addBola, 1000);
}