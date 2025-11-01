// se tem um numero que ser quer incrementar, ele nao altera o valor e sim a cópia
// Quando você trabalha com tipos primitivos (números, strings, boolean), o JavaScript faz uma cópia do valor.
// (precisa return pra atualizar o original).
let x = 5
let y = x   // y recebe uma cópia de x
x = 10

console.log(y) // 5 (não muda junto com x)



console.log("Testando pelo VScode")

//tipos primitivos => passagem de parametros por valor

//tipos de incremento
// num++ (incrementa uma unidade depois da execução da linha)
// ++num (incrementa uma unidade antes da execução da linha)
//num += 1

let contador = 0
contador = atribuir(contador)
contador = atribuir(contador)
contador = atribuir(contador)

console.log(contador)

function atribuir(num){
    //console.log("Incrementando um número")
    num += 1
    console.log("num: "+num)
    return num
}

//num é de um tipo primitivo que passamos por valor e não por referência (por isso que nao funciona o incremento)
//atribuir pega uma copia da variavel do valor que ta no contador e passa para o metodo, nesse caso o valor é 0 e ai passa nume é incrementado +1
//o contador só passou uma cópia, por isso continua com zero
//o metodo toda hora fica recebendo o valor zero




var cont = 0
atribuir()
atribuir()
atribuir()
console.log(cont)
function atribuir(){
    //console.log("Incrementando um número")
    cont += 1
    return cont
}


