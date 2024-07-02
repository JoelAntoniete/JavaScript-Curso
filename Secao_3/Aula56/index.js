const frutas = ["pera","uva", "maca"];

for(let i in frutas){
    console.log(i); // imprime os indices do array
    console.log(frutas[i]);
}

//interar objetos

const pessoa = {
    nome: "Luiz", 
    sobrenome: 'Otavio',
    idade: 30
}
for(let i in pessoa){
    console.log(i); //aqui ele itera so as chaves
    //podemos pegar uma elemento de um objeto como um array pessoa['nome']
    console.log(pessoa[i]);
}