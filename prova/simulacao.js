//criar uma classe pessoa e essa pessoa tem duas instancias: vendedor e cliente 
//fazer uma listagem de vendas
//ent deve ter produtos e as vendas
//vendas relaciona ao produto, a quem vendeu e quem comprou
//herança, polimorfismo
//checar carrinho do ponto de vista do venedor é de um jeito, no ponto de vista do cliente é de outro - polimorfismo
//lista do que esta sendo vendido
class pessoa{
    nome
    dataNasci
    cpf

    constructor(nome, dataNasci, cpf){
        this.nome = nome,
        this.dataNasci = dataNasci,
        this.cpf = cpf
    }

}

class vendedor extends pessoa{
    funcao
    matricula
    vendas = []

    constructor(nome, dataNasci, cpf, funcao, matricula){
        super(nome, dataNasci, cpf),
        this.funcao = funcao,
        this.matricula = matricula
    }
}
class cliente extends pessoa{
    endereco
    telefone
    compras = []
    
    constructor(nome, dataNasci, cpf, endereco, telefone){
        super(nome, dataNasci, cpf),
        this.endereco = endereco,
        this.telefone = telefone
    }
    
    comprar(produto, vendedor, vendasEfetuadas){
        this.compras.push({
            nome: produto.nome,
            preco: produto.preco,
            validade: produto.validade,
            lote: produto.lote
        })
        console.log("Compra realizada com sucesso!")
        vendasEfetuadas.registroVendas(produto, this, vendedor)
    }
        mostrarProdutos(){
            console.log(`----- Os produtos comprados por ${this.nome} foram: -----`)
            for (let c of this.compras){
                console.log(`   - O cliente ${this.nome} efetuou uma compra de ${c.nome} no valor de ${c.preco} com validade em ${c.validade} de lote ${c.lote}
                    
                    `);
            }
        }
        // console.log(this.compras)
        // console.log(this.compras[0])
}

class produto{
    nome
    preco
    validade
    lote

    constructor(nome, preco, validade, lote){
        this.nome = nome
        this.preco = preco, 
        this.validade = validade,
        this.lote = lote
    }

}

class vendas{
    vendas = []

    constructor(produto, cliente, vendedor){
        this.produto = produto
        this.cliente = cliente
        this.vendedor = vendedor 
    }

    registroVendas(produto, cliente, vendedor){
        this.vendas.push({
            produto: produto.nome,
            valor: produto.preco,
            nomeCliente: cliente.nome,
            cpfCliente: cliente.cpf,
            enderecoCliente: cliente.endereco,
            telefoneCliente: cliente.telefone,
            nomeVendedor: vendedor.nome,
            funcaoVendedor: vendedor.funcao,
            matriculaVendedor: vendedor.matricula
        })

    }
    mostrarVendas(){
        console.log(`VENDAS EFETUADAS`)
            for (let v of this.vendas){
                console.log(`----------------------------------------------------------------
Produto vendido: ${v.produto}
Valor: ${v.valor}

----- Dados do cliente: ------
Nome: ${v.nomeCliente}
CPF: ${v.cpfCliente}
Endereço: ${v.enderecoCliente}
Telefone: ${v.telefoneCliente}

----- Dados do vendedor: -----
Nome: ${v.nomeVendedor}
Função: ${v.funcaoVendedor}
Matrícula: ${v.matriculaVendedor}
----------------------------------------------------------------`)
            }
    }

}

let maria = new cliente("Maria", '17/07/2006', "06245965160", "Rua das Oliveiras - 1177", 67992191224)
let joice = new vendedor("Joice", '12/10/2000', "92354165874", "Vendedora setor 1", '6985478-9')
let perfume = new produto("Sabah La Ward", 359.90, '18/05/2030', 5)
let blush = new produto("Blush BT Skin", 69.99, '14/06/2027', 2)
let base = new produto("base BT Skin", 69.99, '14/06/2027', 2)
let vendasEfetuadas = new vendas()

maria.comprar(perfume, joice, vendasEfetuadas)
maria.comprar(blush, joice, vendasEfetuadas)
maria.comprar(base, joice, vendasEfetuadas)
// maria.registroVendas(perfume, maria,joice)
maria.mostrarProdutos()
vendasEfetuadas.mostrarVendas()