// Eventos de Mouse
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
// Eventos de Teclado
function apertouTecla(event) {
    console.log("Apertou alguma tecla: " + event.keyCode);

}

function soltouTecla(event) {
    console.log("Soltou a tecla: " + event.keyCode);

    if (event.shiftKey && event.keyCode == 69) {
        console.log("Apertou com o shift!!! + e");
    }
}
// Eventos de Página
function carregou() {
    alert("Pagina carregada!!!");
}

function mudouOpcao(objeto) {
    console.log("Selecionou: " + objeto.value);
}

function focou() {
    console.log("Focou no campo!!!");
}

function saiuDoCampo() {
    console.log("Saiu do campo!!!");
}

// Manipulando Datas

var dt = new Date();
var hr = dt.getHours();
var min = dt.getMinutes();
var data = new Date(Date.parse("March 10, 2012"));

var dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
dias[dt.getDay];

dt.setDate(dt.getDay() + 60);