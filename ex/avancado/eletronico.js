/*
EXERCÍCIO 3 – SISTEMA DE LOJA DE ELETRÔNICOS

Crie as classes:
- Pessoa
- Cliente e Vendedor (herança)

Crie ProdutoEletronico com:
- nome
- preco
- garantia

Crie Venda que registre:
- produto
- cliente
- vendedor
- data

Use polimorfismo para visualizar vendas
pelo ponto de vista do cliente e do vendedor.
*/
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    verVendas() {
        console.log("Visualização genérica");
    }
}

class Cliente extends Pessoa {
    constructor(nome) {
        super(nome);
        this.compras = [];
    }

    comprar(prod, vend, sistema) {
        this.compras.push(prod);
        sistema.registrar(prod, this, vend);
    }

    verVendas() {
        console.log(`Compras de ${this.nome}:`);
        this.compras.forEach(p => {
            console.log(p.nome);
        });
    }
}

class Vendedor extends Pessoa {
    verVendas(sistema) {
        console.log(`Vendas visualizadas por ${this.nome}:`);
        sistema.vendas.forEach(v => {
            console.log(`${v.produto} → ${v.cliente}`);
        });
    }
}

class ProdutoEletronico {
    constructor(nome, preco, garantia) {
        this.nome = nome;
        this.preco = preco;
        this.garantia = garantia;
    }
}

class Venda {
    constructor() {
        this.vendas = [];
    }

    registrar(p, c, v) {
        this.vendas.push({
            produto: p.nome,
            cliente: c.nome,
            vendedor: v.nome,
            data: new Date()
        });
    }
}

// FOR TRADICIONAL
// for (let i = 0; i < vendas.length; i++) {
//     console.log(`${vendas[i].produto} → ${vendas[i].cliente}`);
// }

// FOR OF
// for (let v of vendas) {
//     console.log(`${v.produto} → ${v.cliente}`);
// }

//WHILE 
// let i = 0;

// while (i < vendas.length) {
//     console.log(`${vendas[i].produto} → ${vendas[i].cliente}`);
//     i++;
// }

//MAP
// let listaFormatada = vendas.map(v => {
//     return `${v.produto} → ${v.cliente}`;
// });
// console.log(listaFormatada);


