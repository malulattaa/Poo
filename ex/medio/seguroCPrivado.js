/*
Crie Pessoa com #dinheiro.

Crie classe Carro com:
- modelo
- valor

Crie class Seguro:
- calcular valor do seguro (10% do valor do carro)
- descontar do dinheiro do cliente
*/
class Pessoa {
    nome;
    #dinheiro;

    constructor(nome, dinheiro) {
        this.nome = nome;
        this.#dinheiro = dinheiro;
    }

    get dinheiro() {
        return this.#dinheiro;
    }

    set dinheiro(valor) {
        this.#dinheiro = valor;
    }
}

class Carro {
    constructor(modelo, valor) {
        this.modelo = modelo;
        this.valor = valor;
    }
}

class Seguro {
    contratar(cliente, carro) {
        let valorSeguro = carro.valor * 0.10;
        if (cliente.dinheiro >= valorSeguro) {
            cliente.dinheiro -= valorSeguro;
        }
    }
}
let cliente1 = new Pessoa("Lucas", 5000);
let carro1 = new Carro("Gol", 20000);
let carro2 = new Carro("Corolla", 90000);

let seguro = new Seguro();

seguro.contratar(cliente1, carro1);

console.log("Saldo Lucas:", cliente1.dinheiro);
