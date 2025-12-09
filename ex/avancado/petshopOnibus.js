/*
Crie classe Pet com:
- nome
- dinheiro usando prototype

Use Object.preventExtensions.

Crie classe Dono com #dinheiro e historico.

Crie classe PetBus:
- valor da passagem

Ao embarcar pet:
- desconta dinheiro do dono
- registra histórico
- adiciona pet à lista
*/
class Pet {
    nome;
    din = 0;

    get dinheiro() {
        return this.din;
    }

    set dinheiro(v) {
        this.din = v;
    }
}

Pet.prototype.din = 100;
Object.preventExtensions(Pet.prototype);

class Dono {
    nome;
    #dinheiro;
    historico = [];

    constructor(nome, dinheiro) {
        this.nome = nome;
        this.#dinheiro = dinheiro;
    }

    get dinheiro() {
        return this.#dinheiro;
    }

    set dinheiro(valor) {
        this.historico.push(valor - this.#dinheiro);
        this.#dinheiro = valor;
    }
}

class PetBus {
    passageiros = [];
    valorPassagem = 10;

    embarcar(pet, dono) {
        if (dono.dinheiro >= this.valorPassagem) {
            dono.dinheiro -= this.valorPassagem;
            this.passageiros.push(pet);
        }
    }
}
let dono1 = new Dono("Carlos", 100);
let dono2 = new Dono("Marina", 5);

let pet1 = new Pet();
pet1.nome = "Rex";

let pet2 = new Pet();
pet2.nome = "Lessie";

let busPet = new PetBus();

busPet.embarcar(pet1, dono1);
busPet.embarcar(pet2, dono2);

console.log("Passageiros do PetBus:");
console.log(busPet.passageiros);

console.log("Histórico dono1:", dono1.historico);
console.log("Histórico dono2:", dono2.historico);
