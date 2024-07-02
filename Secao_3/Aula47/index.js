const data  = new Date('1975-06-12');
const diaSemana = data.getDay();
let diaSemanaTexto;

switch(diaSemana){
case 0 : 
    diaSemanaTexto = "Domingo";
    break;
case 1 : 
    diaSemanaTexto = "Segunda";
    break;
case 2 : 
    diaSemanaTexto = "Terça";
    break;
case 3 : 
    diaSemanaTexto = "Quarta";
    break;
case 4 : 
    diaSemanaTexto = "Quinta";
    break;
case 5 : 
    diaSemanaTexto = "Sexta";
    break;
case 6 : 
    diaSemanaTexto = "Sabado";
    break;
default:
    diaSemana = '';
}

console.log("o dia da semana é: " + diaSemanaTexto)