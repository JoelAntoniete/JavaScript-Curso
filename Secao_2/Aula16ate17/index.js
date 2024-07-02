//Exercicio

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmCm = 1.80;


let imc;
imc = peso / (alturaEmCm * alturaEmCm);

let anoNascimento = 2024 - idade;

console.log("O imc é: " , imc)
console.log("Ano de nascimento ", anoNascimento)

//template String
console.log(`tem ${alturaEmCm} de altura e seu IMC é de ${imc}`)
