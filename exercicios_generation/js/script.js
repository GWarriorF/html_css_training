//A variavel nome esta utilizando o DOM (window.document) para acessar as informações que desejamos manipular 
let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOK = false
let assuntoOK = false
let emailOK = false

nome.style.width = '100%';
email.style.width = '100%';

function validaNome() {
    let txt_nome = document.querySelector('#txt_nome')
    if(nome.value.length <= 3){
        txt_nome.innerHTML = 'Nome inválido'
        txt_nome.style.color = '#c84242'
    } else {
        txt_nome.innerHTML = 'Nome válido'
        txt_nome.style.color = '#49c842'
        nomeOK = true
    }
    
}

function validaEmail(){
    let txt_email = document.querySelector('#txt_email')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txt_email.innerHTML = 'E-mail inválido'
        txt_email.style.color = '#c84242'
    } else {
        txt_email.innerHTML = 'E-mail válido'
        txt_email.style.color = '#49c842'
        emailOK = true
    }
}

function validaAssunto(){
    let txt_assunto = document.querySelector('#txt_assunto')

    if(assunto.value.length >= 100){
        txt_assunto.innerHTML = 'Apenas 100 caracteres são aceitos'
        txt_assunto.style.color = '#c84242'
    } else{
        txt_assunto.innerHTML = 'Assunto válido'
        txt_assunto.style.color = '#49c842'
        assuntoOK = true
    }
}

function enviar(){
    if(assuntoOK == true && emailOK == true && nomeOK == true){
        alert('Formulário enviado com sucesso')
    }else {
        alert('Os campos do formulário estão preenchidos incorretamentes')
    }
}