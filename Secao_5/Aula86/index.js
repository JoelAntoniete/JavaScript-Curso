//Reduce
//usado para reduzir um elementos para um valor unico

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const total = numeros.reduce(function(acumulador, valor){
    acumulador += valor;
    return acumulador
})

console.log(total);

