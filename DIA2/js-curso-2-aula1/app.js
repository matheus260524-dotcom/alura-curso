let numeroSecreto = gerarNumeroAleatoria();




function exibirTextonaTela(tag, texto){

let campo= document.querySelector(tag)
campo.ineerHTML = texto;
}
exibirTextonaTela("h1","jogo do numero secreto")
exibirTextonaTela("p", "escolha um entre 1 e 10")

function   verificarChute() {
    let chute = document.querySelector ("input").value;
    console.log(chute == numeroSecreto);
    
}
function gerarNumeroAleatoria(){
    return parseInt(Math.random() * 10 + 1  )
}