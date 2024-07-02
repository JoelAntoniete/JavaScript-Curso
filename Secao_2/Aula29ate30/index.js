//Aula de array basico

let alunos = ['Joao', 'Maria', 'João'];
let primeiroAluno = alunos[0];

//editar um elemento do arrar
alunos[0] = "Eduardo"

//adicionar
alunos[3] = 'Luiza'

//maneira correta de adicionar
alunos[alunos.length] = "Joaquim"

//adicionar de maneira padrao
alunos.push("Otavio") // ja adiciona no final

//adicionar no inicio
alunos.unshift("Jose") //adiciona no primeiro indice

//remocve do fim
alunos.pop();

//salvar um elemento depois do pop
let removido = alunos.pop();

//remover do comeco
alunos.shift();

//remover sem mudar os indicec do array e deixar o index vazio
delete alunos[1];

//fatiar um array
alunos.slice(0,2)

//saber se é um array
console.log(alunos instanceof Array)