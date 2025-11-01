// Faça um algoritmo que receba um número inteiro e imprima na tela o seu antecessor e o seu sucessor.
var prompt = require('prompt-sync')({siginy: true}); 
let num = Number.parseInt(prompt('Digite um número: '))

console.log("O sucessor do número " + num + " é " + (sucessor(num)))
console.log("O sucessor do número " + num + " é " + (antecessor(num)))
function sucessor(suc) {
    suc += 1
    return suc
}
function antecessor(ant) {
    ant -= 1
    return ant
}