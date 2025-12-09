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

class pessoa{
    nome
    cpf

    constructor(nome, cpf){
        this.nome = nome;
        this.cpf = cpf;
    }

    exibirCarrinho(){
        console.log("Carrinho vazio")
    }
}

class farmaceutico extends pessoa{
    exibirCarrinho(sistema){
        for (let m of sistema.vendas){
            console.log(`${m.nomeMedicamento} comprado por ${m.nomeCliente} vendido por ${m.nomeFarmaceutico} no valor de R$ ${m.preco} reais`)
        }
    }
}

class cliente extends pessoa{
    observacoes
    compras = []

    constructor(nome, cpf, observacoes){
    super(nome, cpf);
    this.observacoes = observacoes;

    }
    comprar(medicamento, farmaceutico, sistema){
        this.compras.push({
            nome: medicamento.nome,
            preco: medicamento.preco,
        })
        sistema.registroVendas(medicamento, this, farmaceutico)
        console.log("Compra efetuada")
    }

    exibirCarrinho(){
        for (let m of this.compras){
            console.log(`Medicamento: ${m.nome} | valor: ${m.preco} reais`)
        }
    }
}

class medicamento{
    nome
    preco
    receita
    observacoes
    constructor(nome, preco, receita, observacoes){
        this.nome = nome;
        this.preco = preco;
        this.receita = receita;
        this.observacoes = observacoes;

    }
}

class venda{
    vendas = []

    constructor(medicamento, cliente, farmaceutico){
        this.medicamento = medicamento;
        this. cliente = cliente;
        this.farmaceutico = farmaceutico;
    }
    registroVendas(medicamento, cliente, farmaceutico){
        this.vendas.push({
            nomeMedicamento: medicamento.nome,
            nomeCliente: cliente.nome,
            preco: medicamento.preco,
            nomeFarmaceutico: farmaceutico.nome,

        })
    }

}

let maria = new cliente("Maria", "06245965160", "Não há observações")
let dipirona = new medicamento("Dipirona",5, "receita", "tomar sempre que sentir dor com um intervalo de pelo menos 6 horas")
let giovanna = new farmaceutico("Giovanna", "09876543211")
let sistema = new venda()

console.log("---- COMPRA ----")
maria.comprar(dipirona, giovanna, sistema)
console.log("---- CARRINHOS ----")
console.log("---- CARRINHO FARMACEUTICO----")
giovanna.exibirCarrinho(sistema)
console.log("---- CARRINHO CLIENTE----")
maria.exibirCarrinho()

