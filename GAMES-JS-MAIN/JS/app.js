alert("boas vindas ao jogo do numero secreto")
let numeroSecreto = 5
console.log(numeroSecreto);
let chute;
let tentativas
while (chute !=numeroSecreto){
    let chute = prompt ( "Escolha um numero entre 1 e 10 ");
    if (chute == numeroSecreto) {
        alert("isso ai acertou numero secreto ${numeroSecreto}");

        
    }else{
        if (chute > numeroSecreto){
            alert ("numero é menor que ${chute}");

        }else{
            alert ("o numero é maior que ${chute}");
        }
        tentativas = tentativas + 1
        
    }
}





