//metodo splice
const nomes = ['Joao', 'Maria', 'Jose', 'Pedro', 'Carlos']

//estrutura
//nomes.splice(indice, delete, elem1, elem2, etc...)
//primeiro colocamos o indice inicial do elemento a ser deletado
//depois colocamos quantos elementos queremos deletar, lembrando que este metodo retorna os elementos deletados como array


//simulação do metodo pop
nomes.splice(-1, 1)
console.log(nomes);


let deletados = nomes.splice(-2, 2)
console.log(nomes, deletados); //os elementos deletados

let substituidos = nomes.splice(3, 2, 'Luiz', 'otavio')
console.log(nomes, substituidos);


