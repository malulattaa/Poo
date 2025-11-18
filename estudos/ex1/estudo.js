// evento é tudo queb pode acontecer com um elemento

var a = document.getElementById('area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar(){
    a.innerText= 'Novo texto'
}

function entrar(){
    a.innerText = 'Entrou!'
    a.style.background = 'red'
}
function sair(){
    a.innerText = 'Saiu!'
    a.style.background = 'green'
}