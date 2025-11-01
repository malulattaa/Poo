class cachorro {
    nome;
    raca;
    idade;
    dono;
    din = 0;

    get dinheiro() {
        return this.din;
    }

    set dinheiro(valor) {
        this.din = valor;
    }
}

class pessoa {
    nome;
    #din;
    historico = [];

    get dinheiro() {
        return this.#din;
    }

    set dinheiro(valor) {
        this.historico.push(valor - this.#din);
        this.#din = valor;
    }

    constructor(nome, dinheiro) {
        this.nome = nome;
        this.#din = dinheiro;
    }
}

class busao {
    passageiros = [];
    valorPassagem = 10;

    embarcarPassageiro(passageiro) {
        console.log(
            passageiro.nome +
            " Passageiro tem dinheiro: " +
            Object.hasOwn(Object.getPrototypeOf(passageiro), "dinheiro")
        );

        if (Object.hasOwn(Object.getPrototypeOf(passageiro), "dinheiro")) {
            if (passageiro.dinheiro > this.valorPassagem) {
                this.passageiros.push(passageiro);
                passageiro.dinheiro -= this.valorPassagem;
            }
        }
    }
}

// Corrigido: define a propriedade interna, não o getter/setter
cachorro.prototype.din = 100;

// Impede novas adições no prototype depois da configuração
Object.preventExtensions(cachorro.prototype);

let rex = new cachorro();
rex.nome = "Rex";
rex.dinheiro = 15;
// rex.correnteOuro = '2 kilates'
// Object.freeze(rex)

console.log(rex.dinheiro);
//qnd é uma propriedade vai na var base dela - pergunta para o prototipo
//var que tem valores simples são variaveis que temos na instancia - se perguntar pra instancia se tem dinheiro, provavelmente n vai ter
// o get é uma propriedade e a propriedade fica no prototipo, se perguntar pro protótipo se ele tem nome, provavelmente ele nao vai ter 
let lessie = new cachorro();
lessie.nome = "Lessie";
lessie.dinheiro = 13;

let joao = new pessoa("Joao", 50);
let maria = new pessoa("Maria", 9);
maria.dinheiro += 20;

console.log(
    "Joao tem dinheiro? " + Object.hasOwn(Object.getPrototypeOf(joao), "dinheiro")
);

// comprando um busao
const transLagoas = new busao();

// rex.dinheiro = 100;
transLagoas.embarcarPassageiro(rex);
transLagoas.embarcarPassageiro(lessie);
transLagoas.embarcarPassageiro(joao);
transLagoas.embarcarPassageiro(maria);

console.log("Passageiros transLagoas:");
console.log(transLagoas.passageiros);

let transSP = new busao();
transSP.valorPassagem = 15;
transSP.embarcarPassageiro(joao);
transSP.embarcarPassageiro(joao);

console.log("Passageiros transSP:");
console.log(transSP.passageiros);

console.log("Passageiros transLagoas novamente:");
console.log(transLagoas.passageiros);

joao.dinheiro -= 2;
console.log(joao.historico);

console.log(maria.historico);
console.log(maria.dinheiro);

maria.historico.push(1000); // após 1000 para a Maria
console.log(maria.historico);
console.log(maria.dinheiro);


//cirou a maria e criou uma empresa de onibus, tentou embarcar ela mas ela n tinha dinheiro
//criou joao q tinha dinheiro e ele embarcou
//outra empresa de onibus e joao embarcou em 2
//maria ganhou dinheiro e embarcou
//var historico foi criada
//get e set para fazer registro de op financeira
//todas as operações de doação ou pagamento (tanto faz) fica registrado no historico utilizando o metodo get e set 
//td vez que um pet novo nascer ele deve ser registrado no centro de zoanoses
//todo pet tem que ter um nome e toda vez que o pet for embarcar no onibus tem que descontar dinheiro do dono 