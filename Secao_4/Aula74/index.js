//funcoes auto-invocadas (IIFE)
(function(){
    console.log('Executando imediatamente');
    
    let sobrenome = "silva";
    function criaNome(nome){
        return nome + " " + sobrenome;
    }
    function falaNome(){
        console.log(criaNome("João"));
    }

    falaNome();
})();//involvendo uma funcaoem parenteses e depois colocando um parentesis, ele se comporta como uma funcao sendo chamada;