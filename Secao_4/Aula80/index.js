//funcoes geradoras, sao funcoes que podemos ir pegando os valores aos poucos a medida que vamos chamando o next


function* geradora(){
    //codigo....
    yield 'valor 1';
    //codigo....
    yield 'valor 2';
    //codigo....
    yield 'valor 3';
}

const ger = geradora();
//done: mostra se ainda existe valores proximos
console.log(ger.next())
console.log(ger.next())
console.log(ger.next())
console.log(ger.next())

//podemos iterar tbem
for(valor of ger){
    console.log(valor.valor);
}

function* contador(){
    let cont = 0;
    while(true){
        yield cont;
        cont++;
    }
}

let valor = contador();
console.log(valor.next());
console.log(valor.next());
console.log(valor.next());
console.log(valor.next());
console.log(valor.next());
console.log(valor.next());
console.log(valor.next());
console.log(valor.next());

//fazer uma funcao geradore que depende de outra

function* g3(){
    yield 1;
    yield 2;
    yield 3;
}
 function* g4(){
    yield* g3();
    yield 4;
    yield 5;
}

//podemos tbem fazer a funcao geradora retrnar outra funcao

function* g5(){
    yield function(){
        console.log("fazendo a primeira funcao")
    }
    yield function(){
        console.log("fazendo a segunda funcao")
    }
}

const g5 = geradora();
const fc1 = g5.next().value;
const fc2 = g5.next().value;

fc1();
fc2();