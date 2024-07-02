function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12:false
    });
}

function funcaoDointerval(){
    console.log(mostraHora());
}

//ele execulta uma funcao de tempo em tempo escolhido
//note que nao precisamos colocar os () para dizer que é uma funcao, basta apenas colocarmos a referencia
//setInterval(funcaoDointerval, 1000);

let timer = setInterval(funcaoDointerval, 1000);
//setTimeout retorna apenas uma vez e finaliza
setTimeout(function(){
    clearInterval(timer);
}, 3000); 

setTimeout(function(){
    console.log("Finalizando")
}, 1000)