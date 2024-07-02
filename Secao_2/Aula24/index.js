let umaString = "O rato roeu a roupa do rei de roma"
//podemos pegar um caractert de uma string umaString[2]
let charAt = umaString.charAt(2)
let concatenar = umaString.concat(" em um lindo dia")
let pesquisarIndice = umaString.indexOf("roupa")// caso nao encontramos, ele retorna -1
let ultimoIndice = umaString.lastIndexOf("roupa") //ele comeca a procurar de tras pra frente
let match = umaString.match(/[a-z]/)
let search = umaString.search(/x/)// semelhante ao indiceOf mas podemos usar expressoes regulares
let replace = umaString.replace("rato", "Pato")
let tamanho = umaString.length
let substring = umaString.slice(2,17)// o ultimo tamanho é nao incluso
let split = umaString.split(' ') //umaString.split(' ', 2) assim ele pega apenas os dois primeiros no array
let maiusucla = umaString.toLocaleUpperCase()
let minuscula = umaString.toLocaleLowerCase()

console.log(substring)