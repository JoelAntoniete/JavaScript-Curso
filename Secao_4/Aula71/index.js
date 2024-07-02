//escopo lexico
const nome = 'luiz';
function falaNome(){
    //const nome = "otavio"
    console.log(nome);
}

function usafalaNome(){
    const nome = "Otavio";
    falaNome();
}
usafalaNome();