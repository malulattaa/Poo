/*
EXERCÍCIO 5 – SEGURO DE CARRO AVANÇADO

Crie classes para:
- Cliente
- Carro
- SeguroBase

Crie classes filhas de SeguroBase:
- SeguroBasico
- SeguroPremium

Use polimorfismo para cálculo do valor do seguro.
Registre apólices.
*/
// Classe base
class SeguroBase {
    constructor(cliente, carro) {
        this.cliente = cliente;
        this.carro = carro;
    }

    calcularValor() {
        return 0;
    }
}

// Classe Cliente
class Cliente {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
}

// Classe Carro
class Carro {
    constructor(marca, modelo, valor) {
        this.marca = marca;
        this.modelo = modelo;
        this.valor = valor;
    }
}

// Classe filha: Seguro Básico (polimorfismo)
class SeguroBasico extends SeguroBase {
    calcularValor() {
        return this.carro.valor * 0.05;
    }
}

// Classe filha: Seguro Premium (polimorfismo)
class SeguroPremium extends SeguroBase {
    calcularValor() {
        return this.carro.valor * 0.10;
    }
}

// Classe que gerencia as apólices
class Apolice {
    constructor() {
        this.registros = [];
    }

    registrar(seguro) {
        this.registros.push({
            cliente: seguro.cliente.nome,
            carro: seguro.carro.modelo,
            valorSeguro: seguro.calcularValor()
        });
    }

    listar() {
        console.log("----- APÓLICES REGISTRADAS -----");
        for (let a of this.registros) {
            console.log(`
Cliente: ${a.cliente}
Carro: ${a.carro}
Valor do Seguro: R$ ${a.valorSeguro}
-------------------------------`);
        }
    }
}
let cliente1 = new Cliente("Maria", "123.456.789-00");
let carro1 = new Carro("Toyota", "Corolla", 90000);

let seguro1 = new SeguroBasico(cliente1, carro1);
let seguro2 = new SeguroPremium(cliente1, carro1);

let apolice = new Apolice();

apolice.registrar(seguro1);
apolice.registrar(seguro2);

apolice.listar();
