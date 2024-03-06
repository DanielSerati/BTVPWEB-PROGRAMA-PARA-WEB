//     Lista de Exercícios Funções

// Exercício 1
// Crie uma função que receba uma lista de números como parâmetro e retorne o
// maior número da lista.

function encontrarMaiorNumero(lista) {
    let maior = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > maior) {
            maior = lista[i]; 
        }
    }
    return maior;
}

const numeros = [1, 5, 10, 25, 20, 15];
console.log("O Maior numero e:", encontrarMaiorNumero(numeros));

// Exercício 2
// Desenvolva uma função que receba um número como parâmetro e verifique se
// ele é par ou ímpar. Retorne true se for par e false se for ímpar.

function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return true; 
    } else {
        return false; 
    }
}

const numero1 = 10;
const numero2 = 5;
console.log(numero1, "e par?", verificarParOuImpar(numero1)); 
console.log(numero2, "e par?", verificarParOuImpar(numero2));

// Exercício 3
// Implemente uma função que calcule a média aritmética de um array de números
// e retorne o resultado. Utilize essa função para calcular a média de diferentes
// conjuntos de números.

function calcularMedia(lista) {
    let soma = 0;
    for (let i = 0; i < lista.length; i++) {
        soma += lista[i]; 
    }
    return soma / lista.length; 
}

const conjunto1 = [10, 5, 1, 20, 15];
const conjunto2 = [2, 4, 6, 8, 10];
console.log("A media do conjunto 1 e:", calcularMedia(conjunto1)); 
console.log("A media do conjunto 2 e:", calcularMedia(conjunto2)); 

// Exercício 4
// Crie uma função que receba uma string como parâmetro e retorne a mesma
// string com todas as letras em caixa alta. Utilize essa função para converter
// diferentes strings.

function converterParaCaixaAlta(string) {
    return string.toUpperCase();
}

const frase1 = "Ola, mundo!";
const frase2 = "Bom dia, Boa tarde e Boa Noite!";

console.log("Frase 1 em caixa alta:", converterParaCaixaAlta(frase1)); 
console.log("Frase 2 em caixa alta:", converterParaCaixaAlta(frase2)); 

// Exercício 5
// Desenvolva uma função que determine se um número é primo ou não. Retorne
// true se for primo e false se não for.

function verificarPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false; 
        }
    }
    return true; 
}

console.log(numero2, "eh primo?", verificarPrimo(numero2)); 
console.log(numero1, "eh primo?", verificarPrimo(numero1)); 


// Exercício 6
// Implemente uma função que inverta a ordem dos elementos em um array.
// Utilize essa função para inverter a ordem de diferentes conjuntos de elementos.

// Exercício 7
// Crie uma função que receba um valor e uma porcentagem como parâmetros. A
// função deve retornar o valor acrescido da porcentagem indicada.

// Exercício 8
// Crie uma função que receba uma string e retorne a mesma string, mas com as
// palavras em ordem reversa.

// Exercício 9
// Implemente uma função que retorne a soma de todos os números pares em um
// array.

// Exercício 10
// Crie uma função que calcule o fatorial de um número. Utilize essa função para
// calcular o fatorial de diferentes números.
