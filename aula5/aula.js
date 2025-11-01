

class Pessoa{
    
    nome;
    dataNasci;
    cpf;
    
    apresentar() {
        console.log(`O meu nome é ${this.nome}`)
        
    }
}
let pessoa10 = new Pessoa()
pessoa10.nome = 'Ana'
mudarNome(pessoa10)
pessoa10.apresentar()
function mudarNome(individuo){
    individuo.nome = 'sem nome';
}

//duvida: qual requisito pra fazer uma copia (ocupando outro espaço na memória) e fazer uma referência

let pessoa10 
pessoa10.nome = 'Ana'
mudarNome(pessoa10)
pessoa10.apresentar()

//qnd nao é tipo primitivo (tipo classe) ai é uma referência na memoria
//se é um obj passa como ref
//trabalhamos com o obj na memoria e fazemos ref dele
// so tem o endereço da classe pessoa -> let pessoa1 = new Pessoa()
//td var de classes, td que envolve uma instancia, copia nova vai envolver uma ref