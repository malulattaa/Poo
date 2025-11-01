const readlineSync = require('readline-sync');
var prompt = require('prompt-sync')({siginy: true}); 
let opcao = readlineSync.question('Escolha uma opção (+, -, *, /, **): ');
var num1 = Number.parseInt(prompt('Digite um número: '))
var num2 = Number.parseInt(prompt('Digite um número: '))

switch (opcao.toLowerCase()) {

case '+':
    soma = num1 + num2
    console.log(`A soma de ${num1} e ${num2} é: ${soma}`);
    break;
case '-':
    sub = num1 - num2
    console.log(`A subtração de ${num1} e ${num2} é: ${sub}`);
    break;
case '*':
    mult = num1 * num2
    console.log(`A multiplicação de ${num1} e ${num2} é: ${mult}`);
    break;
case '/':
    div = num1 / num2
    console.log(`A divisão de ${num1} e ${num2} é: ${div}`);
    break;
case '**':
    exp = num1 ** num2
    console.log(`${num1} elevado a ${num2} é: ${exp}`);
    break;
default:
    console.log("Não é possível realizar essa operação")
}