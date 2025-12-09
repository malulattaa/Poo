/*
EXERCÍCIO 2 – SISTEMA DE FARMÁCIA

Crie as classes:
- Pessoa
- Farmaceutico (herda Pessoa)
- Cliente (herda Pessoa)

Crie a classe Medicamento com:
- nome
- preco
- receita (boolean)

Crie a classe Venda que registre:
- medicamento
- cliente
- farmaceutico

Use polimorfismo para exibir o carrinho
de forma diferente para cliente e farmaceutico.
*/
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    verCarrinho() {
        console.log("Carrinho padrão");
    }
}

class Cliente extends Pessoa {
    constructor(nome) {
        super(nome);
        this.compras = [];
    }

    comprar(med, farmaceutico, sistema) {
        this.compras.push(med);
        sistema.registrar(med, this, farmaceutico);
    }

    verCarrinho() {
        console.log(`Carrinho do cliente ${this.nome}:`);
        this.compras.forEach(m => {
            console.log(`- ${m.nome} | R$ ${m.preco}`);
        });
        //ver isso
    }
}

class Farmaceutico extends Pessoa {
    verCarrinho(sistema) {
        console.log("Vendas registradas:");
        sistema.vendas.forEach(v => {
            console.log(`${v.cliente} comprou ${v.produto}`);
        });
    }
}

class Medicamento {
    constructor(nome, preco, receita) {
        this.nome = nome;
        this.preco = preco;
        this.receita = receita;
    }
}

class Venda {
    constructor() {
        this.vendas = [];
    }

    registrar(m, c, f) {
        this.vendas.push({
            produto: m.nome,
            cliente: c.nome,
            vendedor: f.nome
        });
    }
}
