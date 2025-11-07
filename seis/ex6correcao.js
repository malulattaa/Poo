// nao faz sentido criar dinheiro em todos os objetos que serao embarcados
// centralizar o codigo

class Cachorro{
    nome
    raca
    idade
    dono
    constructor(nome, ccz){
        this.nome = nome
        //ccz.animais.push(100)
        ccz.setAnimal(this)
    }
}

class ccz{
    //animais = []
    #animais = []
    set animal(ani){
        //set adicionado para garantir a segurança da lista, para que ninguem de fora acesse ela
        this.#animais.push(ani)
    }
    get animal(){
        return this.#animais
    }
}

class Pessoa{
    nome
    #din
}

class busao{
    passageiros = [];
    valorPassagem = 10;

    embarcarPassageiro(passageiro) {

        if (Object.hasOwn(Object.getPrototypeOf(passageiro), "dinheiro")) {
            if (passageiro.dinheiro > this.valorPassagem) {
                this.passageiros.push(passageiro);
                passageiro.dinheiro -= this.valorPassagem;
            }
        } else{
            //nao da certo
            // Object.hasOwn(Object.getPrototypeOf(passageiro), "dinheiro"
            if (passageiro.dono.dinheiro> this.valorPassagem){
                this.passageiros.push(passageiro)
                passageiro.dono.dinheiro -= this.valorPassagem
            }
        }
    }
}

cczTL = new ccz()

cachorro.prototype.dinheiro = 100
object.preventExtensions