//closure: é a habilidade de uma funcao de acessar seue scopo lexico

function retornaFuncao(){
    const nome =  "Luiz";
    return function(){
        return nome
    };
}

const funcao = retornaFuncao();
console.log(funcao);