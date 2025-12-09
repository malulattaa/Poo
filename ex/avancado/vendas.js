/*
Crie Cliente com #saldo e historico.

Crie Produto.

Crie Loja com caixa.

Crie método comprar():
- desconta saldo do cliente
- soma no caixa
- registra histórico

Use get/set.
*/

class Cliente {
    nome;
    #saldo;
    historico = [];

    constructor(nome, saldo) {
        this.nome = nome;
        this.#saldo = saldo;
    }

    get saldo() {
        return this.#saldo;
    }

    set saldo(valor) {
        this.historico.push(valor - this.#saldo);
        this.#saldo = valor;
    }
}

class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}

class Loja {
    caixa = 0;

    vender(cliente, produto) {
        if (cliente.saldo >= produto.preco) {
            cliente.saldo -= produto.preco;
            this.caixa += produto.preco;
        }
    }
}
let clienteA = new Cliente("Maria", 200);
let clienteB = new Cliente("João", 50);

let camisa = new Produto("Camisa", 80);
let tenis = new Produto("Tênis", 120);

let loja = new Loja();

loja.vender(clienteA, camisa);
loja.vender(clienteB, tenis); // aqui talvez falhe por falta de saldo

console.log("Saldo Maria:", clienteA.saldo);
console.log("Histórico Maria:", clienteA.historico);

console.log("Saldo João:", clienteB.saldo);
console.log("Histórico João:", clienteB.historico);

console.log("Caixa da Loja:", loja.caixa);
