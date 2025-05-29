//filtrar informação

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
let resultados = []

for (let x = 0; x < numeros.length; x++) {
    if(numeros[x] >= 10){
        resultados.push(numeros[x])
    }
}
console.log(resultados);


// maneira simples usando o filter

/*function callbackFilter(value){
    return (value > 10)
}
let numerosfiltrados = numeros.filter(callbackFilter)
*/

let numerosFiltrados = numeros.filter(valor => valor > 10); //é mais simples e comum usar arrow functions
console.log(numerosFiltrados);


const pessoas = [
    { nome: "Ana", idade: 25 },
    { nome: "Bruno", idade: 70 },
    { nome: "Carla", idade: 50 },
    { nome: "Diego", idade: 40 },
    { nome: "Eduarda", idade: 35 }
];

let pessoasComNomeGrande = pessoas.filter(valor => valor.nome.length >= 6)
console.log(pessoasComNomeGrande);

let pessoasComMaisDeCinquenta = pessoas.filter(valor => valor.idade > 50)
console.log(pessoasComMaisDeCinquenta);

let nomesQueTerminamComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))
console.log(nomesQueTerminamComA);


