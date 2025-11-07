class Pessoa{
    

    nome;
    dataNasci;
    cpf;
    
    apresentar() {
        console.log(`O meu nome é ${this.nome}`)
        
    }
}

// herda de pessoa 
class Funcionario extends Pessoa{
    funcao;
    matricula;
    // são do funcionario mas nao sao da pessoa
    apresentar(){
        super.apresentar()
        //chama o la de cima
        console.log(`linha função é ${this.funcao} e minha matricula é ${this.matricula}`)
    }
    // avisando que vai sobrescrever ^
    //tentando fazer algo interessant

}
class gerente extends Funcionario{
    salario;
    apresentar(){
        super.apresentar()
        
        console.log(`meu salario triplicou ${this.salario}`)
        console.log("Apresentação do gerente")
        //devolve um valor
    }
    get Nome(){
        return this.nome
    }
    //recebe um valor
    set Nome(novoNome){
        if(novoNome.length > 5)
        this.nome = novoNome
    }
}

let empacotador = new Funcionario()
empacotador.apresentar = () => {
    console.log(`O meu nome é ${this.nome}`)
}
// => equivale a uma funcção anonima, no lugar de ter que fazer function()
empacotador.nome = "José Silva"
empacotador.cpf = "03659845712"
empacotador.dataNasci = "15/05/2015"
empacotador.matricula = '00000961'
empacotador.funcao = 'assistente'

empacotador.apresentar()

let gerenteVendas = new gerente()
gerenteVendas.Nome = "João m."
console.log(gerenteVendas.Nome)

//ideal é nao aceita atualização do dado