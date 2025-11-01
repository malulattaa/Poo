let numero = 10

console.log(++numero)
console.log(numero)
//numero++ incrementa, mas incrementa o proximo

for(i=0; i<=10; i++){
    console.log("Contando "+ i)
}

let cont = 1
while(cont<11){
    console.log("Contando " + cont)
    cont++
    // ou
    //  console.log("Contando " + cont++)
}

console.log("4"-1)

let numeros = [1,2,3,4,5,6]

for(let n of numeros){
    console.log(n)
}

// o in percorre as propriedades do obj, diferente do of (?)
// o of é usado para percorrer valores de listas (arrays, strings, etc.)
// pega cada item da lista
let numbers = [10, 20, 30]

for (let n of numbers) {
  console.log(n) // 10, 20, 30
}



// o in é usado para percorrer indices (ou chaves, no aso de objetos)
let nums = [10, 20, 30]

for (let i in nums) {
  console.log(i)          // 0, 1, 2  (índices)
  console.log(nums[i]) // 10, 20, 30 (valores)
}
// pega a posição do item (ou o nome da propriedade se for objeto)



// forEach é um metodo de array que executa/chama uma função para cada elemento na lista
let numeross = [10, 20, 30]

numeross.forEach((num, indice) => {
    console.log("Índice:", indice, "Valor:", num)
})

// ordem:
array.forEach(function(valor, indice, array) {
    // valor  → o item atual
    // indice → a posição do item
    // array  → o array inteiro
})

