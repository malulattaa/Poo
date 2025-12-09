/*
EXERCÍCIO 4 – SISTEMA BANCÁRIO AVANÇADO

Crie uma classe Pessoa.

Crie as classes Cliente e Gerente (herança).

Crie a classe Conta.

Permita:
- abertura de conta
- depósito
- saque
- transferência

Registre o histórico de transações.

Use polimorfismo para demonstrar diferentes níveis de permissão
entre cliente e gerente.
*/

class Conta {
    constructor(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
        this.historico = [];
    }

    depositar(valor) {
        this.saldo += valor;
        this.historico.push(`Depósito: ${valor}`);
    }

    sacar(valor) {
        this.saldo -= valor;
        this.historico.push(`Saque: ${valor}`);
    }
}

class Cliente extends Pessoa {
    acesso() {
        console.log("Acesso limitado.");
    }
}

class Gerente extends Pessoa {
    acesso() {
        console.log("Acesso total.");
    }
}
