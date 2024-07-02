// const h1 = document.querySelector('.container h1'); // Esta é a forma de pegar um elemento que está dentro de outro
// const data = new Date();

// function getDiaDaSemana(dia) {
//     switch(dia) {
//         case 0 : 
//             return "domingo";
//         case 1 : 
//             return "segunda-feira";
//         case 2 : 
//             return "terça-feira";
//         case 3 : 
//             return "quarta-feira";
//         case 4 : 
//             return "quinta-feira";
//         case 5 : 
//             return "sexta-feira";
//         case 6 : 
//             return "sábado";
//         default:
//             return '';
//     }
// }

// function getDiaNomeMes(mes) {
//     switch(mes) {
//         case 0 : 
//             return "janeiro";
//         case 1 : 
//             return "fevereiro";
//         case 2 : 
//             return "março";
//         case 3 : 
//             return "abril";
//         case 4 : 
//             return "maio";
//         case 5 : 
//             return "junho";
//         case 6 : 
//             return "julho";
//         case 7 : 
//             return "agosto";
//         case 8 : 
//             return "setembro";
//         case 9 : 
//             return "outubro";
//         case 10 : 
//             return "novembro";
//         case 11 : 
//             return "dezembro";
//         default:
//             return '';
//     }
// }

// function ZeroAEsquerda(num) {
//     return num >= 10 ? num : `0${num}`;
// }

// function criaData(data) {
//     const diaSemana = getDiaDaSemana(data.getDay());
//     const mes = getDiaNomeMes(data.getMonth());
//     const hours = ZeroAEsquerda(data.getHours());
//     const minutes = ZeroAEsquerda(data.getMinutes());
//     const seconds = ZeroAEsquerda(data.getSeconds());

//     console.log(`${diaSemana}, ${data.getDate()} de ${mes} de ${data.getFullYear()} às ${hours}:${minutes}:${seconds}`);
//     return `${diaSemana}, ${data.getDate()} de ${mes} de ${data.getFullYear()} às ${hours}:${minutes}:${seconds}`;
// }

// h1.innerHTML = criaData(data);

//maneira mais simples de se fazer
const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });

