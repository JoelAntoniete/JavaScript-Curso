//Basico de Objetos

const pessoa1 = {
    nome: "luiz", 
    Sobrenome: "Miranda",
    idade: 25,
    //criar metodo
    fala(){
        console.log("ola mundo")
    }
};
console.log(pessoa1.nome)
pessoa1.fala();

//funcao que cria pessoa (Factory)

function criaPessoa(nome, sobrenome, idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const p1 = criaPessoa("joel", "neto", 29)
console.log(p1)