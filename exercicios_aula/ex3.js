// Faça um algoritmo que leia dois valores inteiros A e B, se os valores de A e B forem iguais, 
// deverá somar os dois valores, caso contrário deverá multiplicar A por B. Ao final de qualquer um dos cálculos deve-se 
// atribuir o resultado a uma variável C e imprimir seu valor na tela.

var prompt = require('prompt-sync')({siginy: true}); 
var a = Number.parseInt(prompt('Digite um número: '))
var b = Number.parseInt(prompt('Digite um número: '))

if (a==b){
    c = a+b
    console.log("Números iguais, logo a soma é " + c)
}
else if(a!=b){
    c = a*b
    console.log("Números diferentes, a multiplicação é " + c)
}
else{
    console.log("O valor digitado não é válido")
}