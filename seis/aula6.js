//JS -> PROTOTYPE

class Cachorro{
    nome
    raça
    idade
    dono
    din
    get dinheiro(){
        return this.din
    }

    set dinheiro(valor){
        this.din = valor
    }
}
class Pessoa{
    nome
    #dinheiro
    historico = []

    get dinheiro(){
        return this.#dinheiro
    }

    set dinheiro(valor){
        this.historico.push(this.#dinheiro - valor)
        //calcula a diferença entre o valor anterior e o novo e empurra no historico
        this.#dinheiro = valor
        // dinheiro recebe o novo valor
    }

    constructor(nome, dinheiro){
        this.nome = nome
        this.#dinheiro = dinheiro
        //chamado automaticamente quando cria uma nova instância da classe com new
        //é como o “formulário de nascimento” do objeto.
    }

}

class busao{
    passageiros = []
    #valorPassagem = 10
    
    embarcarPassageiro(passageiro){
        if(Object.hasOwn(passageiro, 'dinheiro'))
        if(passageiro.dinheiro > this.#valorPassagem){
            //passageiro.dinheiro é chamada a getter de dinheiro
            this.passageiros.push(passageiro)
            //adiciona o objeto passageiro no array (é a mesma referência do objeto).
            passageiro.dinheiro -= this.#valorPassagem
        }
        //verifica se a pessoa tem dinheiro suficiente e, se tiver, adiciona à lista e desconta a passagem
    }
}

Cachorro.prototype.dinheiro = 100
Object.preventExtensions(Cachorro.prototype)
let rex = new Cachorro();
Object.freeze(rex)
Object.preventExtensions(rex)
rex.nome = 'rex'
rex.dinheiro = 15
rex.correnteOuro = '2 kilates'
rex.dinheiro = () => {
    this.din += 1000
}
//bloqueando o rex
//tds os cachorros tem dinheiro, ent n precisa precaver
let lessie = new Cachorro()
lessie.nome = 'lessie'
lessie.dinheiro = 13

let joao = new Pessoa("João", 50)
let maria = new Pessoa("Maria", 9)
maria.dinheiro += 20

console.log("João tem dinheiro?" + joao.hasOwnProperty('dinheiro'))

//comprando onibus

const transLagoas = new busao()
rex.dinheiro = 30;
transLagoas.embarcarPassageiro(joao)
transLagoas.embarcarPassageiro(maria)
transLagoas.embarcarPassageiro(rex)
transLagoas.embarcarPassageiro(lessie)
console.log(transLagoas.passageiros)

let transSP = new busao()
transSP.embarcarPassageiro(joao)
transSP.embarcarPassageiro(joao)
console.log("TransSP passageiros")
console.log(transSP.passageiros)

console.log(joao.historico)

console.log(maria.historico)
console.log(maria.dinheiro)

maria.historico.push(1000)

//apos 1000 para maria
console.log(maria.historico)
console.log(maria.dinheiro)