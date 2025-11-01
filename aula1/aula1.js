console.log("oisss veyr")

var num1 = 1;
let num2 = 5;
// o var mesmo se colocado dentro de um escopo, ele ainda vale fora dele
if(num1 < num2){
    var nu = 1
    console.log("no")
}
console.log(nu)

// o let respeita a hierarquia
if(num1 < num2){
    let nu = 1
    console.log("no")
}
console.log(nu)
// aq o let ta apagado pq ele tinha que ser usado dentro do escopo, mas isso nao acontece, entao ele morre ali


if(num1 < num2){
    var numero1 = 1
    numero1 = 10
}
console.log(numero1)

// const: constante, nao permite atualizar valor (não é variavel)
//só é const se for do tipo primitivo no js. Quando não é primitivo, eu não posso modificar a estrutura porém modifico os dados. 
//Por exemplo, tenho uma lista, porém não posso mudar a estrutura dela, somente os dados que nela estão.

// const num4 = 5;
// if(num1 < num2){

// }
// num4 = 10
// console.log(num4)

//typeof verifica o tipo da var

const num5 = 1
let num6 = '1'

if(num5 === num6){
    console.log("iguais")
}
else{
    console.log('não')
}

function somar(a, b){
    console.log(a+b)
}
somar(2,6)
function somar(a, b){
    return a+b
}
console.log(somar(8,6))

// escolher um valor que corresponde ao parametro
numeroos = 2
switch(numeroos){
    case 1:
        console.log('O número é 1')
        break
    case 2:
        console.log('O número é 2')
        break
    case 3:
        console.log('O número é 3')
        break

}

