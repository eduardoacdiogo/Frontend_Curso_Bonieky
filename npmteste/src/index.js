const moment = require('moment');

moment.locale('pt-br');

let dia = moment().format('dddd');
document.getElementById("dia").innerHTML = "O dia de semana eh " + dia + ".";

//console.log(`O dia da semana é: ${dia}`);

import $ from 'jquery';
import './style.css';
import CameraGallery from './images/chave.jpg';

$(function() {
    $('#botao').on('click', function() {
        $('h1').html('Ola Mundo Alterado!!');
        $(this).addClass('botao');
        $('#imagem').attr('src', CameraGallery);

    });
});