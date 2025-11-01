//td vez que um pet novo nascer ele deve ser registrado no centro de zoanoses
//todo pet tem que ter um nome e toda vez que o pet for embarcar no onibus tem que descontar dinheiro do dono

class Dono {
    constructor(nome) {
        this.nome = nome;
        this.pets = []; 
        valor = 50;
    }
    get dinheiro(){
        return this.din 
    } 
    set dinheiro(valor){
        this.din = valor; 
    } 

    adicionarPet(pet) {
        this.pets.push(pet);
        console.log(`${this.nome} ganhou um novo pet: ${pet.nome}`);
    }
}
class Pet {
    constructor(nome, raca) {
        this.nome = nome;
        this.raca = raca;
        this.pets = [];
    }
        adicionarZooanoses(pet) {
        this.pets.push(pet);
        console.log(`${this.nome} foi adicionado ao centro de zooanoses`);
    }

}

class Embarcar{
    passageiros = []
    #valorPassagem = 10
    
    embarcarPassageiro(passageiro){
        //if(Pet.dono && Pet.Dono.Dinheiro >=)

        if(Object.hasOwn(passageiro, 'dinheiro'))
        if(passageiro.dinheiro > this.#valorPassagem){
            //passageiro.dinheiro é chamada a getter de dinheiro
            this.passageiros.push(passageiro)
            //adiciona o objeto passageiro no array (é a mesma referência do objeto).
            passageiro.dinheiro -= this.#valorPassagem
        }
        //verifica se a pessoa tem dinheiro suficiente e, se tiver, adiciona à lista e desconta a passagem
    }
}

let maria = new Dono("Maria");
let gato = new Pet("Pepper", "Siamês");
let cachorro = new Pet("Athena", "Cachorro");



maria.adicionarPet(gato);
maria.adicionarPet(cachorro);
gato.adicionarZooanoses(gato)
gato.embarcarPassageiro(maria)