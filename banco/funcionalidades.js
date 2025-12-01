// banco registra movimentações maiores que 1000
// sistema de banco para controlar as transações
// tem-se agência(s) - mais de uma - um banco tem varias agencias 
//clientes que fazem operações -> saque, transferencia entre clientes (pix) e deposito
// exibir o extrato por cliente

// const agencia_banco = {
//     '001-1' : 'Banco do Brasil',
//     '002-2' : 'Caixa Economica',
//     '003-3' : 'Bradesco',
//     '004-4' : 'Inter',
//     '005-5' : 'Nubank',

// }
const agencia_banco = new Map ([
    ['001-1', 'Banco do Brasil'],
    ['002-2', 'Caixa Econômico'],
    ['003-3', 'Bradesco'],
    ['004-4', 'Inter'], 
    ['005-5', 'Nubank']
])
// trabalhar com map


function determinar_banco(num_agencia){
    return agencia_banco.get(num_agencia) || 'Banco não cadastrado.'
}

class bancoCentral{
    movimentacoesGrandes = []


    notificar(pessoa, valor, tipo){
        this.movimentacoesGrandes.push({
            pessoa: pessoa,
            valor: valor,
            tipo: tipo,
        })
        console.log(`Banco Cnetral: operação de alto valor realizada.`)
    }
    mostrarMovimentacoesGrandes(){
        console.log("----- Movimentações de alto valor -----")
        for (let mg of this.movimentacoesGrandes){
            console.log(`${mg.pessoa} realizou um ${mg.tipo} de R$ ${mg.valor}`)
        }
    }
}
class banco{
    movimentacoes = []
    registroMovimentacao(conta, valor, tipo, bancoCentral){
            this.movimentacoes.push(
                {
                    pessoa: conta.pessoa.nome, 
                    banco: conta.banco, 
                    agencia: conta.agencia, 
                    valor: valor, 
                    tipo: tipo

                }
            )
            console.log("Movimentação registrada")

            if(valor>1000){
                bancoCentral.notificar(conta.pessoa.nome, valor, tipo)
            }
    }
}
// por um if -> se for alta notifica o banco central

// class agencia extends banco{
    //     clientes = []
    
    // }
// let dep = document.getElementById('depositar').addEventListener('click', depositar)



class pessoa {
    nome
    cpf

    constructor(nome, cpf){
        this.nome = nome
        this.cpf = cpf
    }
}

class Conta{
    #saldo;
    extrato = [];

    constructor(pessoa, agencia, saldoInicial = 0) {
        this.pessoa = pessoa;
        this.agencia = agencia;
        this.banco = determinar_banco(agencia);
        this.#saldo = saldoInicial;

        if (this.banco === 'Banco não cadastrado.') {
            console.log(`A agência ${this.agencia} de ${this.pessoa.nome} não está vinculada a nenhum banco`);
        } else {
            console.log(`${this.pessoa.nome} está associado à agência: ${this.agencia} do banco ${this.banco}`);
        }
    }

    get saldo() {
        return this.#saldo;
    }

    depositar(valor, banco, bancoCentral) {
        if (valor <= 0) {
            console.log("Valor inválido para depósito.");
            return;
        }

        this.#saldo += valor;

        this.extrato.push({
            tipo: "Depósito",
            valor: valor,
            saldoAtual: this.#saldo
        });

        banco.registroMovimentacao(this, valor, "Depósito", bancoCentral);
    }

    sacar(valor, banco, bancoCentral) {
        if (valor > this.#saldo) {
            console.log(`${this.pessoa.nome} não tem saldo suficiente.`);
            return;
        }

        this.#saldo -= valor;

        this.extrato.push({
            tipo: "Saque",
            valor: valor,
            saldoAtual: this.#saldo
        });

        banco.registroMovimentacao(this, valor, "Saque", bancoCentral);
    }

    transferir(destinatario, valor, banco, bancoCentral) {
        if (valor > this.#saldo) {
            console.log("Saldo insuficiente para transferência.");
            return;
        }

        this.sacar(valor, banco, bancoCentral);
        destinatario.depositar(valor, banco, bancoCentral);

        console.log(
            `Transferência de R$ ${valor} realizada de ${this.pessoa.nome} para ${destinatario.pessoa.nome}`
        );
    }

    mostrarExtrato() {
        console.log(`--------- Extrato de ${this.pessoa.nome} ---------`);
        for (let mov of this.extrato) {
            console.log(`${mov.tipo}: R$ ${mov.valor} | Saldo após: R$ ${mov.saldoAtual}`);
        }
    }
}

// TESTES

let bc = new bancoCentral();
let bancoGenerico = new banco();

let mariaPessoa = new pessoa("Maria", "062.459.651-60");
let matheusPessoa = new pessoa("Matheus", "062.876.540-67");
let joaoPessoa = new pessoa("João", "123.456.789-00");

let maria = new Conta(mariaPessoa, "004-4", 50);
let matheus = new Conta(matheusPessoa, "001-1", 10);
let joao = new Conta(joaoPessoa, "002-2", 1000);

console.log("\n--- Transações ---");

matheus.depositar(30, bancoGenerico, bc);
matheus.depositar(30000, bancoGenerico, bc);
matheus.sacar(10, bancoGenerico, bc);

joao.transferir(maria, 827, bancoGenerico, bc);

console.log("\n--- Extratos ---");
matheus.mostrarExtrato();
maria.mostrarExtrato();
joao.mostrarExtrato();

bc.mostrarMovimentacoesGrandes();