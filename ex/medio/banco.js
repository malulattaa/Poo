/*
EXERCÍCIO 2 – SISTEMA BANCÁRIO

Crie uma classe ContaBancaria com:
- titular
- saldo

Crie um método sacar() e depositar()

Crie uma classe ContaCorrente que herda de ContaBancaria e implementa
uma taxa de saque diferente.

Crie uma classe ContaPoupanca que herda de ContaBancaria e possui rendimento.

Use polimorfismo no método calcularTarifa().
*/

class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    sacar(valor) {
        this.saldo -= valor;
    }

    calcularTarifa() {
        return 0;
    }
}

class ContaCorrente extends ContaBancaria {
    calcularTarifa() {
        return 5; 
    }
}

class ContaPoupanca extends ContaBancaria {
    calcularTarifa() {
        return 2;
    }
}
