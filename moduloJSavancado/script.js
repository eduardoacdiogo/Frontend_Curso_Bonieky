var contador = 0;

function acao() {
    document.write("Executou...");
    if (timer == 1) {
        contador = contador + 1;
        document.write(contador + "<br/>");
    }
    if (contador == 7) {
        contador = 0;
        clearInterval(timer);
    }
}

function acao2() {
    document.write("TESTANDO!!! <br/>");
}
// setar para que algo aconteca de tanto em tanto tempo
var timer = setInterval(acao, 1000);
// sera executado apenas umas vez
setTimeout(acao2, 5000);
// para parar o tempo de uma temporização
//var timer = setInterval(acao, 1000);
//clearInterval(timer);
//clearTimeout(timer);