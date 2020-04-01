/* Comentario 
que tem 
varias 
linhas
*/

// Definindo a variável com o nome do usuário
var nome = "Usuario";

// Para o usuario porder insirir uma variavel
//var nome02 = prompt("Qual o seu nome?");

// Para escrever/inserir na pagina textos, imagens e qualquer outra coisa

document.write("<strong>Teste negrito</strong>");

document.write("<br/>");

document.write("<br/>");

document.write("<img src ='http://www.google.com.br/google.jpg' />");

document.write("<br/>");


// Criando funcoes modificando as variaveis do html
function chamandoFuncao() {
    var area = document.getElementById("area");
    var texto = prompt('Qual o seu nome?');

    area.innerHTML = texto;
}

function funcaoComParametro(nome) {
    var area = document.getElementById("area");
    var sobrenome = prompt('Qual o seu sobrenome?');

    area.innerHTML = nome + " " + sobrenome;
}

function adicionarItem() {
    item = document.getElementById("item").value;
    var listahtml = document.getElementById("lista").innerHTML;
    listahtml = listahtml + "<li>" + item + "</li>";
    document.getElementById("lista").innerHTML = listahtml;
}

function somar() {
    var campo1 = parseInt(document.getElementById("campo1").value);
    var campo2 = parseInt(document.getElementById("campo2").value);

    var soma = campo1 + campo2;
    alert(soma);
}

// Criando um Array
var array = ["arroz", "macarrao", "farinha", 20];
// Tamanho do Array
array.length;
// Chamar o primeiro item do Array
array[0];
// Achar a posicao do objeto no array
array.indexOf("macarrao");
// Transformar o Array em uma string
array.join(",");
// Deletar o ultimo item da lista
array.pop();
// Deletar o primeiro item da lista
array.shift();
// Adicionar um item a lista
array.push("inserindo");

// Verificador
function verificacao() {
    if (array.length < 0) {
        alert("array vazia!!");
    } else {
        alert("existe um array");
    }
}

// Loops
var x = 0;
while (x < 10) {
    document.write("numero: " + x + "<br/>");
    x++;
}
x = 0;

for (x = 0; x < 10; x++) {
    document.write("numero: " + x + "<br/>");
}

// Switch
x = prompt("Qual o numero?");

switch (x) {
    case "0":
        alert("X eh 0");
        break;
    case "1":
        alert("X eh 1");
        break;
    default:
        alert("Default");
        break;
}