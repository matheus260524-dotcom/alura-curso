let titulo = document.querySelector("h1");
titulo.innerHTML = "hora do desafio";

function botaoClick() {
    console.log("o botão console foi pressionado");
    
}
function alertaAmoJs(){
    console.log("eu amo js");
    
}

function cidadeLembeidevoce(){
    let cidade = prompt ("qual o nome da cidade")
    alert (`estive nessa ${cidade} e lembrei de voce`)
}
function numeroSoma(){
    let num1 = prompt ("numero 1")
    let num2 = prompt ("numero 2")
    let resultado = 1*num1 + 1*num2
    alert(resultado)
}