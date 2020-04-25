/*const moment = require('moment');

moment.locale('pt-br');

let dia = moment().format('dddd');
document.getElementById("dia").innerHTML = "O dia de semana eh " + dia + ".";

//console.log(`O dia da semana é: ${dia}`);*/

import $ from 'jquery';

$(function() {
    $('#botao').on('click', function() {
        $('h1').html('Ola Mundo Alterado!!');
    });
});