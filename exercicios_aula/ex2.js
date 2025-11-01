var prompt = require('prompt-sync')({siginy: true}); 
var num = Number.parseInt(prompt('Digite um número: '))

if (num >= 0){
    console.log("Positivo")
}
else{
    console.log("Negativo")
}
if (num % 2 === 0){
    console.log("Par")
}
else{
    console.log("Ímpar")
}
