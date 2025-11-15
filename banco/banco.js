// banco registra movimentações maiores que 1000
// sistema de banco para controlar as transações
// tem-se agência(s) - mais de uma - um banco tem varias agencias 
//clientes que fazem operações -> saque, transferencia entre clientes (pix) e deposito
// exibir o extrato por cliente

const agencia_banco = {
    '001-1' : 'Banco do Brasil',
    '002-2' : 'Caixa Economica',
    '003-3' : 'Bradesco',
    '004-4' : 'Inter',
    '005-5' : 'Nubank',

}

function determinar_banco(num_agencia){
    return agencia_banco[num_agencia] || 'Banco não cadastrado.'
}

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
            this.movimentacoes.push(
                {
                    pessoa: pessoa.nome, 
                    banco: pessoa.banco, 
                    agencia: pessoa.agencia, 
                    valor: valor, 
                    tipo: tipo

                }
            )
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
    agencia
    banco
    extrato = [];

    constructor(nome, cpf, saldo, agencia) {
        this.nome = nome;
        this.cpf = cpf;
        this.#saldo = saldo;
        this.agencia = agencia;
        this.banco = determinar_banco(agencia)

        if (this.banco == 'Banco não cadastrado.'){
            console.log(`A agência ${this.agencia} de ${this.nome} não está vinculada a nenhum banco`)
        }else{
            console.log(`${this.nome} está associado a agência: ${this.agencia} do banco ${this.banco}`)
        }
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
                saldoAtual: this.#saldo,
                banco: this.banco,
            });
            
            
        }
        banco.registroMovimentacao(this, valor, "Depósito") // aqui ainda dá erro
        bancoCentral.movimentacoesAltas(this, valor, "Depósito")
    }

        
    sacar(banco, bancoCentral, valor){
        if (this.#saldo >= valor){
            this.#saldo -= valor
            this.extrato.push({
                tipo: "Saque",
                valor: valor,
                saldoAtual: this.#saldo,
                banco: this.banco
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
    transferir(destinatario, banco, bancoCentral, valor){
        if (this.#saldo >= valor){
            this.sacar(banco, bancoCentral, valor)
            destinatario.depositar(banco, bancoCentral, valor)
            console.log(`Uma transferência foi realizada de R$ ${valor} foi realizada de ${this.nome} (${this.banco}) para ${destinatario} (${destinatario.banco})`)
        }else{
            console.log(`${this.nome} não tem saldo suficiente para realizar esta operação.`)
        }
    }
}
let bc = new bancoCentral()
let maria = new pessoa("Maria", "062.459.651-60", 50, "004-4");
let matheus = new pessoa("Matheus", "062.876.540-67", 10, "001-1");
let joao = new pessoa("João", "123.456.789-00", 1000, "002-2");

console.log("\n--- Transações ---");

matheus.depositar(bc, 30);
matheus.depositar(bc, 30000); 
matheus.depositar(bc, 50);
matheus.sacar(bc, 10);

joao.transferir(maria, bc, 827);

console.log("\n--- Extratos ---");
matheus.mostrarExtrato();
maria.mostrarExtrato();
joao.mostrarExtrato();

console.log("\n--- Movimentações de Alto Valor (Banco Central) ---");
console.log(bc.movimentacoesGrandes);


