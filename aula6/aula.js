class Pessoa{
    
    constructor(nome){
        console.log("Uma nova pessoa nasceu")
        console.log(`seu nome é ${nome}`)
    }

    nome;
    dataNasci;
    cpf;
    
    apresentar() {
        console.log(`O meu nome é ${this.nome}`)
        
    }
}

//declara a variável 
let jose 
//essa var precisa ser inicializada:
jose = new Pessoa('Maria')
//se aq n passar um parametro, nome da indefinido (ver o pq) / ver diferença na linguagem tipada e nao tipada 
//a palavra reservada new é utilizada para criar um novo objeto - nova cópia
//os parenteses são utilizados 
//toda vez que faz a instancia da classe, dentro executa um metodo padrao que é o constrtor da classe, ent qnd a classe vai pra memoria - é instanciada - ele executa alguma coisa
//o metodo constrtor leva o nome da classe 
//se nao tiver inicializador/instancia ele nao é realizado


//linguagens tipadas (java c#) ja obriga a var a ser pessoa: Pessoa jose