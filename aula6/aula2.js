// Sobrecarga: mais de um método com a mesma nomenclatura
// nao tipado: só consegue diferenciar (mesmo nome, mas outras funções) são os argumentos de entrada
//tipada: diferencia na quantidade e tipo

class Pessoa{
    
    constructor(nome){
        console.log("Uma nova pessoa nasceu")
        console.log(`seu nome é ${nome}`)
        this.nome = nome
        // atribui/guarda o nome recebido
    }
    setDados(nome, dataNasci){
        console.log(`Seu nome é ${nome} e é nascido em ${dataNasci}`)
        this.nome = nome
        this.dataNasci = dataNasci
    }
    setDados(nome, dataNasci, cpf){
        console.log(`Seu nome é ${nome}, é nascido em ${dataNasci} e seu cpf é ${cpf}`)
        this.nome = nome
        this.dataNasci = dataNasci
        this.cpf = cpf
    }

//se eu chamar o nome, ele so chama o construtor nome, se eu chamar nome e data de nascimento, ele vai chamar apenas o construtor com o nome e a data

    nome;
    dataNasci;
    cpf;
    
    apresentar() {
        console.log(`O meu nome é ${this.nome}`)
        
    }
}


let jose 
jose = new Pessoa('Maria')
jose.setDados("Malu", "17/07/2006")