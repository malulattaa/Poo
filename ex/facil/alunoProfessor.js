/*
EXERCÍCIO 1 – SISTEMA DE PESSOAS

Crie uma classe Pessoa com:
- nome
- idade
- cpf

Crie uma classe Aluno que herda de Pessoa e tem:
- matricula
- curso

Crie uma classe Professor que herda de Pessoa e tem:
- disciplina
- salario

Crie métodos para exibir os dados de aluno e professor.
Demonstre herança e polimorfismo usando um método chamado apresentar().
*/

class Pessoa {
    constructor(nome, idade, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }

    apresentar() {
        console.log("Sou uma pessoa.");
    }
}

class Aluno extends Pessoa {
    constructor(nome, idade, cpf, matricula, curso) {
        super(nome, idade, cpf);
        this.matricula = matricula;
        this.curso = curso;
    }

    apresentar() {
        console.log(`Sou o aluno ${this.nome} do curso ${this.curso}`);
    }
}

class Professor extends Pessoa {
    constructor(nome, idade, cpf, disciplina, salario) {
        super(nome, idade, cpf);
        this.disciplina = disciplina;
        this.salario = salario;
    }

    apresentar() {
        console.log(`Sou o professor ${this.nome} da disciplina ${this.disciplina}`);
    }
}

let a1 = new Aluno("Maria", 18, "123", "A01", "ADS");
let p1 = new Professor("Carlos", 35, "456", "POO", 3500);

a1.apresentar();
p1.apresentar();
