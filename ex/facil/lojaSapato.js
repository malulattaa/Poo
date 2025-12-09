/*
SISTEMA DE LOJA DE SAPATOS

Crie Pessoa, Cliente e Vendedor.

Crie Produto com:
- nome
- numero
- preco

Crie Venda que registre as vendas.

O cliente compra e a venda é registrada automaticamente.
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
    // getSaldo(){
    //     return this.#dinheiro
    // }

    comprar(produto, vendedor, sistema){
        if(this.dinheiro >= produto.valor){
        this.compras.push({
            nome: produto.nome,
            valor: produto.valor
        })
    sistema.registroVendas(produto, this, vendedor)
    }else{
        console.log("Saldo insuficiente, não foi possível realizar a compra.")
    }
}}


class vendedor extends pessoa{
    departamento

    constructor(nome, cpf, departamento){
        super(nome, cpf);
        this.departamento = departamento;
    }
}

class produto{
    nome
    valor
    codigoBarra

    constructor(nome, valor, codigoBarra){
        this.nome = nome;
        this.valor = valor;
        this.codigoBarra = codigoBarra;
    }

}

class vendas{
    vendas = []

    registroVendas(produto, cliente, vendedor){
        this.vendas.push({
            nomeCliente: cliente.nome,
            nomeProduto: produto.nome,
            valorProduto: produto.valor,
            nomeVendedor: vendedor.nome,
            departamento: vendedor.departamento
        })
        // console.log(this.vendas)
    }
    listarVendas(){
        for (let v of this.vendas){
            console.log(`O cliente ${v.nomeCliente} realizou uma compra de ${v.nomeProduto} de R$ ${v.valorProduto} com o vendedor ${v.nomeVendedor} do departamento ${v.departamento}`)
        }
    }
}

let maria = new cliente("Maria", "06245965160", 160)
let clara = new vendedor("Clara", "78978978978", "Feminino")
let bota = new produto("Bota", 159.90, 123456)
let sistema = new vendas()


maria.comprar(bota, clara, sistema)
sistema.listarVendas()