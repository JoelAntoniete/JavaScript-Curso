const pessoa = {
    nome: 'Luiz', 
    sobrenome : "Miranda", 
    idade: 30,
    endereco : {
        rua : "Av Brasil", 
        numero: 320
    }
};

//atribuicao via desestruturacao, ja que nome tem o emsmo nome do atributo de pessoa
const {nome}  = pessoa;
console.log(nome)