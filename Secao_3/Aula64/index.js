//try catch e finally

try{
    console.log("Abri um arquivo")
    console.log("manipulei o arquivo")
    console.log("fechei o arquivo")
}catch(e){
    console.log('tratar o erro')
}finally{
    console.lof('Eu sempre sou executado')
}

function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('esperamos uma instancia de Date.')
    }
    //aqui ele checa se o valor de date é istanciado e se nao for ele cria um

    if(!data){
        data = new Date();
    }
    //podemos criar um objeto pra formatar a hora
    return data.toLocaleTimeString('pt_br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
        
}