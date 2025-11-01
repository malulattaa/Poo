class Pessoa{

    nome;
    dataNasci;
    cpf;

    apresentar() {
        console.log(`O meu nome é ${this.nome}`) 

    }
}

let pessoa1 = new Pessoa()
pessoa1.nome = "Maria"
pessoa1.cpf = '06245965160'
pessoa1.dataNasci = '20/05/2000'
pessoa1.apresentar()

let pessoa2 = new Pessoa()
pessoa2.nome = "Matheus"
pessoa2.cpf = '03256898841'
pessoa2.dataNasci = '15/05/2007'
pessoa2.apresentar()

let pessoa3 = new Pessoa()
pessoa3.nome = "Luisa"
pessoa3.cpf = '12547896523'
pessoa3.dataNasci = '17/07/2006'
pessoa3.apresentar()

let listaPessoas = [pessoa1, pessoa2, pessoa3]
console.log(listaPessoas)

