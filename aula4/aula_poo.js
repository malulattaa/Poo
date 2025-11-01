// cada clone de um objeto instanciado ocupa um espaço na memória - o objeto aponta para aquele endereço de memória
// quando passa o parametro passa a referencia do metodo, nao o valor em si

class Pessoa{

    nome;
    dataNasci;
    cpf;

// function para quando el estiver fora da classe
// dentro da classe nao necessita do function pq ele ja reconhce como metodo pelo (){}
    apresentar() {
        console.log(`O meu nome é ${this.nome}`) //o this é pra falar que a var é fora do metodo mas dentro da classe 
        //diferencia a var nome de dentro do metodo, de uma que esteja la fora mesmo essa la fora nao existentindo
    }
}

// oq ta na var é referencia de memoria 
//fazendo uma cópia na memoria que tem valores proprios - instanciando:

//copia integral
//pessoa1 é um objeto
//declarando    inicializando
let pessoa1 = new Pessoa()
//quando uma var é constante vc nao pode inicializar ela sem dar um valor
pessoa1.nome = "Maria"
pessoa1.apresentar()

let pessoa2 = new Pessoa()

pessoa2.nome = "Matheus"
pessoa2.apresentar()

pessoa2 = pessoa1
//pessoa2.nome = pessoa1.nome
//instancia a aquela pessoa só o nome, se n passar . alguma coisa, vai td os atributos
pessoa1.nome = 'Caio'
console.log("pessoa2 = pessoa1: ")
pessoa2.apresentar()
// endereco de memoria da pessoa 2 vai pro mesmo da pessoa 1, e elas passam a apontar para o mesmo end de memoria 

let pessoa3 = pessoa1
pessoa3.apresentar()


let x = 5
let y = 2
y = x
x = 10
console.log(y)

pessoa1.cpf = '06245965160'
pessoa1.dataNasci = '20/05/2000'


let listaPessoas = [pessoa1, pessoa2, pessoa3]
console.log(listaPessoas)