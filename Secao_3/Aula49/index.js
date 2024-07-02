const verdaderiro= true;
//let tem escopo de bloco{...bloco}
//var só tem escopo de funcao

let nome = 'Luiz' //criado
var nome2 = 'Luiz'

if(verdaderiro){
    let nome = "Otavio"; //criado
    console.log(nome, nome2)
}