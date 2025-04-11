//função construtora
//funcao construtura sempre começar com letra maiuscula

function Pessoa(nome, sobrenome){
//caso eu queira algum atributo que nao possa ser acessado atravez de ponto, basta nao por o this
//sao atributos privados, pode ser para metodos tbem
    const ID = 1234455;

    this.nome = nome;
    this.sobrenome = sobrenome;
}

//precisamos usar new

const p1 = new Pessoa('Luiz', 'Otavio');
//p1.ID; nao aparece pois nao tem o this
console.log(p1);