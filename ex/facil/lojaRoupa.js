/*
EXERCÍCIO 1 – SISTEMA DE LOJA DE ROUPAS

Crie uma classe Pessoa.

Crie as classes Cliente e Vendedor que herdam de Pessoa.

Crie a classe Produto com:
- nome
- preco
- tamanho

Crie a classe Venda que registre:
- produto
- cliente
- vendedor

Permita que o cliente compre produtos
e que as vendas sejam automaticamente registradas.
*/
class Pessoa {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
}

class Cliente extends Pessoa {
    constructor(nome, cpf) {
        super(nome, cpf);
        this.compras = [];
    }

    comprar(produto, vendedor, sistemaVenda) {
        this.compras.push(produto);
        sistemaVenda.registrar(produto, this, vendedor);
    }
}

class Vendedor extends Pessoa {
    constructor(nome, cpf) {
        super(nome, cpf);
    }
}

class Produto {
    constructor(nome, preco, tamanho) {
        this.nome = nome;
        this.preco = preco;
        this.tamanho = tamanho;
    }
}

class Venda {
    constructor() {
        this.vendas = [];
    }

    registrar(produto, cliente, vendedor) {
        this.vendas.push({
            produto: produto.nome,
            cliente: cliente.nome,
            vendedor: vendedor.nome,
            valor: produto.preco
        });
    }

    listar() {
        console.log(this.vendas);
    }
}
