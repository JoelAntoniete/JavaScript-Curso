// revisao sobre arrays

const nomes = ['Joao', 'Maria', 'Jose', 'Pedro', 'Carlos']
console.log(nomes);


//deletar um item e deixar o index vazio
delete nomes[2]
console.log(nomes);

//os valores podem ser passados por referencia
const copia = nomes;
//tudo que eu fizer em nomes ocorrerá em copira e vice versa


//caso eu queira so os dados sem tornar o novo array uma referencia, basta usar o spread operator
const novo = [...nomes];

//pop e shift
const final = nomes.pop(); //remove o elemento do final e retorna o valor removido
console.log(nomes);

const inicio = nomes.shift()// remove o elemento do inicio e retorna o valor removido
console.log(nomes);

//adicionar elementos

nomes.push('Roberto'); //adiciona elemento no final
console.log(nomes);

nomes.unshift("Wallace"); //adiciona elemento no começo
console.log(nomes);

//fatiar o array
const fatiado = nomes.slice(0,3)
console.log(fatiado);

//converter uma string no array
const nomeCompleto = 'Joao Carlos da Silva Junior'
const nomeArray = nomeCompleto.split(" ");
console.log(nomeArray);

nomeComoString = nomes.join(", ")// para juntarmos, precismos escolher um saparador, senao ele ficara com virgulas
console.log(nomeComoString);





