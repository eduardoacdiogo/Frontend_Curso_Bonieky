import $ from 'jquery';
import './css/style.css';
import CameraGallery from './images/chave.jpg';
import Botao from './componentes/botao/index.js';

const moment = require('moment');

moment.locale('pt-br');

let dia = moment().format('dddd');
document.getElementById("dia").innerHTML = "O dia de semana eh " + dia + ".";

//console.log(`O dia da semana é: ${dia}`);

$(function() {

    let botao = new Botao();

    botao.setTitle('Testador');
    botao.setClick(function() {
        alert("Clicou!");
    });
    $('.area').html(botao.render());
});
$(function() {
    $('#bootao').on('click', function() {
        $('h1').html('Ola Mundo Alterado!!');
        $(this).addClass('bootao');
        $('#imagem').attr('src', CameraGallery);

    });
});