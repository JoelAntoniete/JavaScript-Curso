//atribuicao via desestruturação array
let a = "A";
let b = "B";
let c = "C";

//const numeros = [1,2,3];
const l = [b,c,a];
[a,b,c] = l;
console.log(a,b,c);

const numeros = [100, 200,300,400,500,600,700,800,90];
//primeiroNumero index 0, segundoNumero pega index 1 e o resto pega os outros valores do array
const [primeiroNumero, segundoNumero, ...resto] = numeros;
console.log(primeiroNumero)
console.log(segundoNumero)
console.log(resto)