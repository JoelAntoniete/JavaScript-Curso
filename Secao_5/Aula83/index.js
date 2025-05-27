//concatenado arrays

let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = a1.concat(a2) //concatenando 2 arrays
//let a3 = a1.concat(a2, [7,8,9], "Luiz")  //podemos tambem colocar um array junto na concatenação
console.log(a3);


let arraySpread = [...a1,...a2] //podemos usar os spreads tbem para concaternar arrays
console.log(arraySpread);




