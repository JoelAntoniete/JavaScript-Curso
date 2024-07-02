//escreva uma funcao que pegue 2 numeros e retorne o maior deles

function maior( x, y){
    if(x == y){
        return -1
    }else if(x > y){
        return x;
    }else{
        return y;
    }
}

// crie uma fucao que pege os valores largura a altura e retorne se esta em modo de paisagem
function ePaisagem(largura,  altura){
    return (largura > altura)? true: false;
}

//fizzBuzz

function fizBuzz(x){
    if(x % 3 == 0 && x % 5 == 0){
        return 'FizzBuzz';
    }else if(x % 3 == 0){
        return ' Fizz';
    }else if(x % 5 == 0){
        return 'Buzz';
    }else{
        return -1
    }
}