//funcoes
console.log(soma(2,5))
console.log(soma())
console.log(soma(2))
saudacao('joel')


function saudacao(nome){
    console.log(`Boda dia ${nome}!`) 
}

function soma (x, y){
    return x + y
}
//desta forma ele fica como um valor padrao caso nao coloquemos os valor nos argumentos
function soma (x = 1, y = 1){
    return x + y
}

//funcao anonima 
const raiz = function(n){
    return n** 0.5;
};
console.log(raiz(9))

//arrow function
const raiz2 = n => n ** 0.5
console.log(raiz2(9))

const soma2 = (x, y) => x + y //caso queiramos mais de um arg precisamos por os parenteses
console.log(soma2(9, 4))

