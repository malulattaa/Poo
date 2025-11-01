// Faça um algoritmo que leia o valor do salário mínimo e o valor do salário de um usuário, calcule quantos salários 
// mínimos esse usuário ganha e imprima na tela o resultado. (Base para o Salário mínimo R$ 1.500,00).

var prompt = require('prompt-sync')({siginy: true}); 
let salario = Number.parseInt(prompt('Digite seu salário: '))

let salario_minimo = 1500;
let i = 0
while (salario >= salario_minimo) {
    i++
    salario -= salario_minimo 
}
console.log("o salario cabe " +  i +" vezes dentro do salário minimo");

// alternativa mais simples


