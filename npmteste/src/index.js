const moment = require('moment');

moment.locale('pt-br');

let dia = moment().format('dddd');
document.getElementById("dia").innerHTML = "O dia de semana eh " + dia + ".";

//console.log(`O dia da semana é: ${dia}`);