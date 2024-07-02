const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p') ;//com esse metodo ele ira pegar todos os paragrafos, e funcionara como um array

let estilos = getComputedStyle(document.body); // essa funcao pega todos os elementos de css 
const backgroundColorBody = estilos.backgroundColor;

// é possivel iterar sobre eles
for (const p of ps) {
    //console.log(p);
    p.style.backgroundColor = backgroundColorBody; 
    p.style.color = '#FFFFFF';
}