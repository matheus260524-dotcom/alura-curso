


//function validarNumero() {
  //  let numero = prompt("qual seu numero")
    //if (numero > 0) {
    //    return "Positivo";
    //} else if (numero < 0) {
   //     return "Negativo";
    //} else {
    //    return "Zero";
    //}
//}

//console.log(validarNumero(-1))

//function idade() {
    //let idade = prompt("qual sua idade")
    //if (idade >= 18) {
      //  console.log("maior de idade");
        
        
    //}else{
    //    console.log("menor de idade");
        
  //  }
    
//}
//idade()
//function validarString(texto) {
  //  return texto === "" ? "String vazia" : "String não vazia";
//}

//console.log(validarString("Aqui há um texto?"))
//console.log(validarString(""))

//function verificarAnoBissexto() {
    //let ano = prompt("qual o ano")
    //if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
      //  return "Ano bissexto";
    //} else {
    //    return "Não é bissexto";
  //  }
//}

//console.log(verificarAnoBissexto(2025))

//function calcularMedia() {
  //  let num1 = prompt("num1")
    //let num2 = prompt("num2")

    //if (isNaN(num1) || isNaN(num2)) {
     //   return "Um dos números não é válido.";
    //}
    //return (num1 + num2) / 2;
//}

//console.log(calcularMedia(8,5))

//function obterTamanhoArray(arr) {
  //  return arr.length;
//}

//exemplo de uso

//const minhaLista = [1,2,3,4,5,6,7,8,9,10,11,12]

//console.log(obterTamanhoArray(minhaLista))


//const meuArray = [10, 20, 30, 40, 50];
//console.log("O array contém o número 30?", meuArray.includes(30));
//saída esperada: "O array contém o número 30?" true
// Função que verifica se um elemento está presente no array
function verificarElementoNoArray(arr, elemento) {
    return arr.includes(elemento);
}

// Exemplo de uso
const meuArray = [10, 20, 30, 40, 50];
const elementoProcurado = 30;

// Utilizando a função para verificar a presença do elemento no array
const elementoEstaPresente = verificarElementoNoArray(meuArray, elementoProcurado);

// Exibindo o resultado
if (elementoEstaPresente) {
    console.log(`O elemento ${elementoProcurado} está presente no array.`);
} else {
    console.log(`O elemento ${elementoProcurado} não está presente no array.`);
}
const palavras = ["apple", "banana", "orange", "grape"];
console.log("A palavra 'banana' está no array?", palavras.includes("banana"));

//saída esperada: "A palavra 'banana' está no array?" true

// Função que verifica se um objeto está presente no array
function verificarObjetoNoArray(arr, objeto) {
    return arr.some(item => JSON.stringify(item) === JSON.stringify(objeto));
}

// Array de objetos representando alunos
const alunos = [
    { id: 1, nome: 'João', idade: 20 },
    { id: 2, nome: 'Maria', idade: 22 },
    { id: 3, nome: 'Pedro', idade: 21 },
    { id: 4, nome: 'Ana', idade: 19 }
];

// Objeto que queremos verificar se está presente no array
const alunoProcurado = { id: 2, nome: 'Maria', idade: 22 };

// Utilizando a função para verificar a presença do objeto no array
const objetoEstaPresente = verificarObjetoNoArray(alunos, alunoProcurado);

// Exibindo o resultado
if (objetoEstaPresente) {
    console.log('O aluno está presente no array.');
} else {
    console.log('O aluno não está presente no array.');
}

function calcularSomaProduto(array) {
    let somaPares = 0;
    let produtoImpares = 1;

    for (let numero of array) {
        if (numero % 2 === 0) {
            somaPares += numero;
        } else {
            produtoImpares *= numero;
        }
    }

    return {
        somaPares,
        produtoImpares
    };
}

const numeros = [1, 2, 3, 4, 5];
const resultado = calcularSomaProduto(numeros);
console.log("Soma dos pares:", resultado.somaPares);
console.log("Produto dos ímpares:", resultado.produtoImpares);

