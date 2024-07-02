const nome = "Joao Pedro da Silva Gomes ";
const numeros = [1,2,3,4,5,6,7,8,9,10];

//pra pegarmos as letras precisariamos fazer isso

for(let i in nome){
    console.log(nome[i]); //teriamos que fazer o uso do induice

}

//o JS criou esse modo
for(let i of nome){
    console.log(i);// assim ele ja imprime os valores de um iteravel sem fazer o uso de um indice
}
for(let i of numeros){
    console.log(i)
}
//for of nao serve para iterar em objetos
