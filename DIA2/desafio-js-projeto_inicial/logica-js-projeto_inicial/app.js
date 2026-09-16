function olaMundo () {
    console.log("olá mundo!");
}

olaMundo();


function nomeParametro(){
    let nome = prompt("nome")
    console.log(`ola ${nome}`);
    
}
nomeParametro();


function dobroNumero(){
    let numero = prompt("numero")
    let resultado = numero*2
    console.log(resultado);
    
}
 dobroNumero();


 function mediaTres(){
    let num1 = prompt("numero")
    let num2 = prompt("numero")
    let num3 = prompt("numero")
    let resultadoMedia = (1*num1 + 1*num2 + 1*num3) /3
    console.log(resultadoMedia);
    
 }
 mediaTres();


 function encontrarMaior(a, b) {
  return a > b ? a : b;
}

let maiorNumero = encontrarMaior(15, 9);
console.log(maiorNumero);



function multiplicaNumero (){
    let numMultiplicacao = prompt("numero multi")
    resultadoMultiplico = numMultiplicacao*numMultiplicacao
    console.log(resultadoMultiplico);
    
}
multiplicaNumero();