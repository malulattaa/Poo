/*
Crie uma classe Pessoa com:

- nome
- #dinheiro (privado)
- historico (array)

Use get e set para:
- acessar dinheiro
- registrar toda movimentação no histórico

Crie uma classe Produto:
- nome
- preco

Crie uma classe Cantina:
- caixa (dinheiro da cantina)

Crie um método comprar() que:
- desconta dinheiro da pessoa
- soma no caixa da cantina
- registra no histórico da pessoa
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

class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}

class Cantina {
    caixa = 0;

    comprar(pessoa, produto) {
        if (pessoa.dinheiro >= produto.preco) {
            pessoa.dinheiro -= produto.preco;
            this.caixa += produto.preco;
        }
    }
}
let joao = new Pessoa("João", 50);
let maria = new Pessoa("Maria", 30);

let coxinha = new Produto("Coxinha", 10);
let suco = new Produto("Suco", 5);

let cantina = new Cantina();

cantina.comprar(joao, coxinha);
cantina.comprar(maria, suco);

console.log("Dinheiro João:", joao.dinheiro);
console.log("Histórico João:", joao.historico);

console.log("Dinheiro Maria:", maria.dinheiro);
console.log("Histórico Maria:", maria.historico);

console.log("Caixa da Cantina:", cantina.caixa);
