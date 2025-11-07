// banco registra movimentações maiores que 1000
// sistema de banco para controlar as transações
// tem-se agência(s) - mais de uma - um banco tem varias agencias 
//clientes que fazem operações -> saque, transferencia entre clientes (pix) e deposito
// exibir o extrato por cliente


class bancoCentral{
    movimentacoesGrandes = []
    movimentacoesAltas(pessoa, valor, tipo){
        if (valor > 1000){
            this.movimentacoesGrandes.push({pessoa: pessoa.nome, valor: valor, tipo: tipo})
            console.log("Uma movimentação de alto valor foi realizada.")
        }
    }
}
class banco{
    movimentacoes = []
    agencias = []
    registroMovimentacao(pessoa, valor, tipo){
            this.movimentacoes.push({pessoa: pessoa.nome, valor: valor, tipo: tipo})
            console.log("Movimentação registrada")
    }
}

class agencia extends banco{
    clientes = []

}

class pessoa {
    nome
    cpf
    #saldo
    extrato = [];

    constructor(nome, cpf, saldo) {
        this.nome = nome;
        this.cpf = cpf;
        this.#saldo = saldo;
    }
    get getSaldo() {
        return this.#saldo;
    }
    depositar(banco, bancoCentral, valor){
        if (valor<= 0){
            console.log("Valor indisponível para depósito.")
        }else{
            this.#saldo += valor
            this.extrato.push({
                tipo: "Depósito",
                valor: valor,
                saldoAtual: this.#saldo
            });
            
            
        }
        banco.registroMovimentacao(this, valor, "Depósito")
        bancoCentral.movimentacoesAltas(this, valor, "Depósito")
    }

        
    sacar(banco, bancoCentral, valor){
        if (this.#saldo >= valor){
            this.#saldo -= valor
            this.extrato.push({
                tipo: "Saque",
                valor: valor,
                saldoAtual: this.#saldo
            });
        }
        else{
            console.log(`${this.nome} não tem saldo suficiente para realizar saque.`)
        }
        banco.registroMovimentacao(this, valor, "Saque")
        bancoCentral.movimentacoesAltas(this, valor, "Saque")
        
    }
    mostrarExtrato(){
        console.log(`---------Extrato de ${this.nome}---------`)
        for(let movimentacao of this.extrato){
            console.log(`${movimentacao.tipo} R$: ${movimentacao.valor} | Saldo atual: R$ ${movimentacao.saldoAtual}`)

        }
    }
    transferir(destinatario, valor){
        // if (this.sacar(valor)){
            destinatario.depositar(valor)
            console.log(`Uma transferência foi realizada de ${this.nome} para ${destinatario}`)

        // }
    }
}
let bc = new bancoCentral()
let caixa = new agencia()
let br = new agencia()
let maria = new pessoa("Maria", "062.459.651-60", 50)
let matheus = new pessoa("Matheus", "062.876.540-67", 0)

matheus.depositar(br, bc, 30)
matheus.depositar(br, bc, 30000)
matheus.depositar(br, bc, 50)
matheus.transferir(maria, 827)

//console.log(matheus.extrato)


// matheus.sacar(caixa, 40)
// // this.clientes.push({maria, matheus})
// maria.depositar(caixa, 100)
// maria.depositar(caixa,80)
// maria.sacar(caixa,20)
matheus.mostrarExtrato()

// maria.mostrarExtrato()
// console.log(maria)
// console.log(matheus)
// console.log(maria.sacar(caixa, this.saldo, 20))
// console.log(caixa.clientes)



