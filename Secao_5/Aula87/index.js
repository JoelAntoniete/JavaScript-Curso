//filter + map + reduce
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];

// -> filtrar pares
// -> dobrar os valores
// -> reduzir (somar tudo)

const total = numeros
  .filter(valor => valor % 2 === 0)
  .map(valor => valor * 2)
  .reduce((acumulador, valor) => acumulador + valor, 0);

console.log(total);

