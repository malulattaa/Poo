var prompt = require('prompt-sync')({siginy: true}); 
let valorA = Number.parseInt(prompt("Digite o primiro valor: "))
let operacao = prompt("Digite a operação: ")
let valorB = Number.parseInt(prompt("Digite outro valor: "))

let funcMult = multiplicar
let dicOperacoes = new Map()
dicOperacoes.set("+", function(a,b){return a+b })
dicOperacoes.set("-", subtrair)
dicOperacoes.set("*", funcMult)
dicOperacoes.set("/", function(a,b){return a/b })
console.log(dicOperacoes.get(operacao)?.(valorA, valorB)?? "Operação inválida")
//console.log(dicOperacoes.get(operacao)?dicOperacoes.get(operacao)(valorA, valorB): "Operação inválida")

//new é a copia de uma classe - cópia de map

function subtrair(a,b){
    return a - b
}

function multiplicar(a,b){
    return a*b
}