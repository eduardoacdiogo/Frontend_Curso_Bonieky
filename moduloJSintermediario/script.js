function apertouMouse() {
    console.log("Apertou o mouse!!!");
}

function soltouMouse() {
    console.log("Soltou o mouse!!!");
}

function mousePassouCima() {
    console.log("Mouse passou por cima!!!");
}

function mouseSaiuDeCima() {
    console.log("Mouse saiu de cima!!!");
}

function moveuMouse() {
    console.log("Moveu o mouse!!!");
}

function clicou() {
    console.log("Clicou!!!");
}

function botaoDireito() {
    console.log("Botao direito");

    return false;
}

function clickDuplo() {
    console.log("Clicou duas vezes!!!");
}

function apertouTecla(event) {
    console.log("Apertou alguma tecla: " + event.keyCode);

}

function soltouTecla(event) {
    console.log("Soltou a tecla: " + event.keyCode);

    if (event.shiftKey && event.keyCode == 69) {
        console.log("Apertou com o shift!!! + e");
    }
}

function carregou() {
    alert("Pagina carregada!!!");
}