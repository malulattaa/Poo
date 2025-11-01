const prompt = require('prompt-sync')({sigint: true}); //siginit: true allows ctrl+C to exit
console.clear()
const numA = Number.parseInt(prompt('Digite um número: '))
const numB = Number.parseInt(prompt('Digite outro número: '))
console.log(numA + numB)


