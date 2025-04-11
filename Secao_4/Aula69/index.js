//o arguments, quando uso o function, ele pega todos os valores dos argumentos como um array
function funcao(){
    let total = 0;
    for(let argumento of arguments){
        total += argumento;
    }
}

funcao(1,2,3,4,5,6,7,8,9,10); 
//se passarmos um argumento em uma chamada de funcao e nao tiver declarada no cabecario da funcao que ira receber umaargumento
//o JS execulta mesmo assim, porem esse argumento fica dentro de arguments
//arguments sustenta todos os argumentos enviados

function funcao2(a, b=2, c=4){
console.log(a + b + c)
}

//caso nao queiramos atrilbuir o valor de b, basta colocar undefined
funcao2(2, undefined, 20)

//podemos fazer atribuicao por desestruturacao
function funcao3({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}
funcao3({nome:'luiz', sobrenome:"Otavio", idade: 20});
