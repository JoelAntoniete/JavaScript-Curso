//tratamento de erros


function some(x, y){
    if(typeof x != number || typeof y != number){

        //treow("Digite uma String com a menssagem")
        throw new Error ('os valores de x e y precisam ser numeros') //podemos usar uma menssagem de erro padrao JS
    }
    return x + y;
}

try{
    console.log(some(1,2))
    console.log(some(1,'2'))
}catch(err){
    console.log('O erro em questao foi:  ' + err)
}