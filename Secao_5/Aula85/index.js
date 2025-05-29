//funcao map 

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const numerosDobro = numeros.map(valor => valor * 2)

console.log(numeros);
console.log(numerosDobro);

const pessoas = [
    { nome: "Ana", idade: 25 },
    { nome: "Bruno", idade: 70 },
    { nome: "Carla", idade: 50 },
    { nome: "Diego", idade: 40 },
    { nome: "Eduarda", idade: 35 }
];

//retorne uma array com o nome das pessoas
const nomesPessoas = pessoas.map(valor => valor.nome)
console.log(nomesPessoas);

//remova a chave nome do objeto pessoa
const idades = pessoas.map(valor => ({idade: valor.idade}));
// como vamos retornar um objeto e ele tem chaves, e necessario colocar ele entre parentesis
console.log(idades);


//crie ids para os objetos
/*const comIds = pessoas.map(function(obj, indice){
    obj.id = indice
    return obj
})*/

//da forma que foi escrita acima, ele ira fazer a alteracao no objeto pessoas
const comIds = pessoas.map(function(obj, indice){
    newObj = {...pessoas}
    newObj.id = indice
    return newObj
})

console.log(comIds);
console.log(pessoas);





