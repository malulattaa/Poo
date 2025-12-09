/*
Crie classe Pessoa com #dinheiro e historico.

Crie uma classe Banco com:
- taxa de saque
- caixa do banco

Crie método sacar():
- desconta dinheiro da pessoa
- soma taxa ao banco
- registra no histórico.

Use get e set.
*/

class Pessoa {
    nome;
    #dinheiro;
    historico = [];

    constructor(nome, dinheiro) {
        this.nome = nome;
        this.#dinheiro = dinheiro;
    }

    get dinheiro() {
        return this.#dinheiro;
    }

    set dinheiro(valor) {
        this.historico.push(valor - this.#dinheiro);
        this.#dinheiro = valor;
    }
}

class Banco {
    taxa = 2;
    caixa = 0;

    sacar(pessoa, valor) {
        if (pessoa.dinheiro >= valor + this.taxa) {
            pessoa.dinheiro -= (valor + this.taxa);
            this.caixa += this.taxa;
        }
    }
}
let ana = new Pessoa("Ana", 100);
let pedro = new Pessoa("Pedro", 50);

let banco = new Banco();

banco.sacar(ana, 20);
banco.sacar(pedro, 10);

console.log("Saldo Ana:", ana.dinheiro);
console.log("Histórico Ana:", ana.historico);

console.log("Saldo Pedro:", pedro.dinheiro);
console.log("Histórico Pedro:", pedro.historico);

console.log("Caixa do Banco:", banco.caixa);
