
// banco registra movimentações maiores que 1000
// sistema de banco para controlar as transações
// tem-se agência(s) - mais de uma - um banco tem varias agencias 
//clientes que fazem operações -> saque, transferencia entre clientes (pix) e deposito
// exibir o extrato por cliente


const agencia_banco = new Map([
    ['001-1', 'Banco do Brasil'],
    ['002-2', 'Caixa Econômico'],
    ['003-3', 'Bradesco'],
    ['004-4', 'Inter'],
    ['005-5', 'Nubank']
])

function determinar_banco(num_agencia) {
    return agencia_banco.get(num_agencia) || 'Banco não cadastrado.'
}

class bancoCentral {
    movimentacoesGrandes = []

    notificar(pessoa, valor, tipo) {
        this.movimentacoesGrandes.push({
            pessoa: pessoa,
            valor: valor,
            tipo: tipo,
        })
        console.log(`Banco Cnetral: operação de alto valor realizada.`)
    }
    mostrarMovimentacoesGrandes() {
        console.log("----- Movimentações de alto valor -----")
        for (let mg of this.movimentacoesGrandes) {
            console.log(`${mg.pessoa} realizou um ${mg.tipo} de R$ ${mg.valor}`)
        }
    }
}
class banco {
    movimentacoes = []
    registroMovimentacao(conta, valor, tipo, bancoCentral) {
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

        if (valor > 1000) {
            bancoCentral.notificar(conta.pessoa.nome, valor, tipo)
        }
    }
}

class pessoa {
    nome
    cpf
    constructor(nome, cpf) {
        this.nome = nome
        this.cpf = cpf
    }
}

class Conta {
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
            return false;
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
            return false;
        }else{
        this.sacar(valor, banco, bancoCentral);
        destinatario.depositar(valor, banco, bancoCentral);
        }
        
    }

    mostrarExtrato() {
        console.log(`--------- Extrato de ${this.pessoa.nome} ---------`);
        for (let mov of this.extrato) {
            console.log(`${mov.tipo}: R$ ${mov.valor} | Saldo após: R$ ${mov.saldoAtual}`);
        }
    }
}

// base

let bc = new bancoCentral();
let bancoGenerico = new banco();

let mariaPessoa = new pessoa("Maria", "062.459.651-60");
let matheusPessoa = new pessoa("Matheus", "062.876.540-67");
let joaoPessoa = new pessoa("João", "123.456.789-00");
let gabrielaPessoa = new pessoa("Gabriela", "144.475.709-00");

let maria = new Conta(mariaPessoa, "004-4", 50);
let matheus = new Conta(matheusPessoa, "001-1", 10);
let joao = new Conta(joaoPessoa, "002-2", 1000);
let gabriela = new Conta(gabrielaPessoa, "003-3", 0);

let clientes = {
    "Maria": maria,
    "Matheus": matheus,
    "João": joao,
    "Gabriela": gabriela
};
// INTEGRAÇÃO FRONTEND
document.getElementById("depositar").onclick = function () {
    abrir("janelaDeposito");
};
document.getElementById("sacar").onclick = function () {
    abrir("janelaSaque");
};
document.getElementById("transferir").onclick = function () {
    abrir("janelaTransferencia");
};
document.getElementById("extrato").onclick = function () {
    abrir("janelaExtrato");
};
function abrir(id) {
    document.getElementById(id).style.display = "block";
}
// https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
function fechar(id) {
    document.getElementById(id).style.display = "none";
}
function eventoDepositar() {
    let nome = document.getElementById("depositoNome").value
    let valor = Number(document.getElementById("depositoValor").value)

    if (clientes[nome] == undefined) {
        alert("Cliente não encontrado!")
    } else {
        clientes[nome].depositar(valor, bancoGenerico, bc)
        alert("Depósito realizado com sucesso!")
    }
    fechar("janelaDeposito")
}
function eventoSacar() {
    let nome = document.getElementById("saqueNome").value
    let valor = Number(document.getElementById("saqueValor").value)

    if (clientes[nome] == undefined) {
        alert("Cliente não encontrado!")
    } else {
        let operacao = clientes[nome].sacar(valor, bancoGenerico, bc)
        if (operacao) {
            alert(`Saque no valor de ${valor} realizado com sucesso`)
        } else {
            alert("Saldo insuficiente para realizar o saque.")
        }
    }
    //o alert de sucesso era mostrado antes da verificação do saldo
    //mesmo que o saque nao fosse executado sempre aparecia pq n 
    fechar("janelaSaque")
}
function eventoTransferencia() {
    let remetente = document.getElementById("remetente").value
    let destinatario = document.getElementById("destinatario").value
    let valor = Number(document.getElementById("transfValor").value)

    if (clientes[remetente] == undefined || clientes[destinatario] == undefined) {
        alert("Remetente ou destinatário não encontrado, verifique novamente.")
    } 
    let operacao = clientes[remetente].transferir(clientes[destinatario], valor, bancoGenerico, bc)
    if (operacao){
        alert(`Transferência no valor de ${valor} realizado com sucesso`)
    }else{
        alert("Saldo insuficiente para realizar a transferência.")
    }
    
    fechar("janelaTransferencia")
}
function eventoMostrarExtrato() {
    let nome = document.getElementById("extratoNome").value
    let area = document.getElementById("extratoArea")

    if (clientes[nome] == undefined) {
        alert("Cliente não encontrado!")
        return
    }
    area.innerHTML = ""
    let extrato = clientes[nome].extrato;

    if (extrato.length == 0) {
        area.innerHTML = " - Sem movimentações.";
    } else {
        for (let i = 0; i < extrato.length; i++) {
            let mov = extrato[i];
            area.innerHTML += ` - ${mov.tipo} - R$ ${mov.valor} (Saldo atual: ${mov.saldoAtual})`;
        }
    }

}
