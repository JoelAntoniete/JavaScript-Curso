function some(a,b){
    return a + b;
}

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + " " + resto;
    }
    return falaResto;
}

const fala = falaFrase('Ola');
const resto =  fala('mundo!')