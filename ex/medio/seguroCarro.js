/*
EXERCÍCIO 3 – SEGURO DE CARRO

Crie uma classe Veiculo com:
- marca
- modelo
- valor

Crie uma classe Carro que herda de Veiculo.

Crie uma classe Seguro com:
- valorSeguro

Use polimorfismo para calcular o valor do seguro
de acordo com o tipo do carro.
*/


class Veiculo {
    constructor(marca, modelo, valor) {
        this.marca = marca;
        this.modelo = modelo;
        this.valor = valor;
    }

    calcularSeguro() {
        return 0;
    }
}

class Carro extends Veiculo {
    calcularSeguro() {
        return this.valor * 0.05;
    }
}

class Seguro {
    emitirSeguro(veiculo) {
        console.log(`Seguro: R$ ${veiculo.calcularSeguro()}`);
    }
}
