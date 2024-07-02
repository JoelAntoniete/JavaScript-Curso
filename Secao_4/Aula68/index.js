// Declaracao de formação
falaOi();
function falaOi(){
    console.log('Oi');
}

//first-class objects(Objetos de primeira classe)
//function Expression

const souUmDado = function(){
    console.log('sou um dado')
}
souUmDado();

//executar uma funcao usando outra como parametro
function executafuncao(funcao){
    funcao();
}

executafuncao(souUmDado);

//arrow function
const  fucnaoArrow = () => {
    console.log('sou uma arrou function')
}
fucnaoArrow();

//dentro de um objeto
const obj = {
    falar: function(){
        console.log('Estou falando...')
    }
};
obj.falar();