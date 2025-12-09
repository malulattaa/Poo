/*
EXERCÍCIO – SISTEMA DE PADARIA

Crie uma classe Pessoa.

Crie as classes Cliente e Atendente que herdam de Pessoa.

Crie a classe Produto com:
- nome
- preco

Crie a classe Venda que registre:
- produto
- cliente
- atendente

O cliente deve poder comprar e a venda deve ser registrada automaticamente.
*/

class pessoa{
    nome
    cpf

    constructor(nome, cpf){
        this.nome = nome;
        this.cpf = cpf;
    }
}

class cliente extends pessoa{
    dinheiro
    compras = []

    constructor(nome, cpf, dinheiro){
        super(nome, cpf);
        this.dinheiro = dinheiro; 
    }

    comprar(produto, atendente, sistema){
        this.compras.push({
            nome: produto.nome,
            valor: produto.valor
        })
    sistema.registroVendas(produto, this, atendente)
    }
}

class atendente extends pessoa{
    cargo

    constructor(nome, cpf, cargo){
        super(nome, cpf);
        this.cargo = cargo
    }

}

class produto{
    nome
    valor

    constructor(nome, valor){
        this.nome = nome;
        this.valor = valor;
    }
}

class vendas{
    cliente
    atendente
    produto
    vendas = []

    constructor(produto, cliente, atendente){
        this.cliente = cliente;
        this.atendente = atendente;
        this.produto = produto;
    }

    registroVendas(produto, cliente, atendente){
        this.vendas.push({
            nomeCliente: cliente.nome,
            nomeAtendente: atendente.nome,
            cargoAtendente: atendente.cargo,
            produtoNome: produto.nome,
            produtoValor: produto.valor

        })
        console.log(this.vendas)
    }
    // listar(){
    //     this.vendas.forEach(v => {
    //         console.log(`${v.nomeCliente} fez uma compra de ${v.produtoNome} no valor de ${v.produtoValor}, atendido por ${v.nomeAtendente} (${v.cargoAtendente})`)
    //     });
    // }
    listar(){
    console.log(`VENDAS EFETUADAS`)
        for (let v of this.vendas){
            console.log(`${v.nomeCliente} fez uma compra de ${v.produtoNome} no valor de ${v.produtoValor}, atendido por ${v.nomeAtendente} (${v.cargoAtendente})`)
            }
    }
}

let maria = new cliente("Maria", "06245965160", 120)
let fatima = new atendente("Fatima", "12345678999", "Atendente nível 2")
let pao = new produto("Pão", 3.50)
let sistema = new vendas()

maria.comprar(pao, fatima, sistema)
sistema.listar()
