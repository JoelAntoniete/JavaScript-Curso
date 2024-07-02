//aula sobre if else
const hora = 10;

if(hora >= 0 && hora < 12){
    console.log('Bom dia!');
}else if(hora >= 12 && hora < 18){
    console.log('Bom tarde!');
} else if(hora >= 18 && hora <= 23){
    console.log('Bom noite!');
}else{
    console.log('Ola!');
}

const numero= 10;
if(numero >= 0 && numero <= 5){
    console.log('Seu numero esta entre 0 e 5')
}else if(numro >= 6 && numero <= 8){
    console.log('Seu numero esta entre 6 e 8')
}else if(numero >= 9 && numero <= 11){
    console.log('Seu numero esta entre 9 e 11')
}else{
    console.log('numero nao esta entre 0 e 5')
}