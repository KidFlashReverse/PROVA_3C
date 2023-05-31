var tela_logado = document.getElementById("logado");
var nome_tela = document.getElementById("nome_tela");
var idade_tela = document.getElementById("idade_tela");
var email_tela = document.getElementById("email_tela");
var but_log = document.getElementById("but_log");
var but_deslog = document.getElementById("but_deslog");

if(JSON.parse(sessionStorage.getItem('logado')) === "True"){
    tela_logado.style.cssText = "display: block;";
    nome_tela.innerHTML = JSON.parse(sessionStorage.getItem('nome'));
    idade_tela.innerHTML = JSON.parse(sessionStorage.getItem('idade'));
    email_tela.innerHTML = JSON.parse(sessionStorage.getItem('email'));

    but_log.style.cssText = "display: none;";
    but_deslog.style.cssText = "display: block;";
}

function cadastrar(){
    var email = document.getElementById('email');
    var senha = document.getElementById('senha');
    var nome = document.getElementById('nome');
    var idade = document.getElementById('idade');

    var email_salvar = JSON.stringify(email.value);
    sessionStorage.setItem('email', email_salvar);

    var senha_salvar = JSON.stringify(senha.value);
    sessionStorage.setItem('senha', senha_salvar);

    var nome_salvar = JSON.stringify(nome.value);
    sessionStorage.setItem('nome', nome_salvar);
    
    var idade_salvar = JSON.stringify(idade.value);
    sessionStorage.setItem('idade', idade_salvar);

    alert('Cadastrado');
}


console.log(JSON.parse(sessionStorage.getItem('email')));

function logar(){
    var email = document.getElementById('email');
    var senha = document.getElementById('senha');
    var email_cadastrado = JSON.parse(sessionStorage.getItem('email'));
    var senha_cadastrado = JSON.parse(sessionStorage.getItem('senha'));

    if(email.value === email_cadastrado){
        if(senha.value === senha_cadastrado){
            alert("Logado");
            var logado = "True";
            var logado_salvar = JSON.stringify(logado);
            sessionStorage.setItem('logado', logado_salvar);
        }else{
            alert("Senha Incorreta");
        }
    }else{
        alert("Email Incorreto");
    }
}

function deslogar(){
    var logado = "False";
    var logado_salvar = JSON.stringify(logado);
    sessionStorage.setItem('logado', logado_salvar);
    alert("Deslogado");
    location.reload();
}