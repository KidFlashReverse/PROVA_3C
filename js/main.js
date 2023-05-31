var tela_logado = document.getElementById("logado");
var nome_tela = document.getElementById("nome_tela");
var idade_tela = document.getElementById("idade_tela");
var email_tela = document.getElementById("email_tela");
var but_log = document.getElementById("but_log");
var but_deslog = document.getElementById("but_deslog");

if(JSON.parse(sessionStorage.getItem('logado')) === "True"){
    tela_logado.style.cssText = "display: block;";
    console.log(JSON.parse(sessionStorage.getItem('nome' + JSON.parse(sessionStorage.getItem('usuario')))));
    nome_tela.innerHTML = JSON.parse(sessionStorage.getItem('nome' + JSON.parse(sessionStorage.getItem('usuario'))));
    idade_tela.innerHTML = JSON.parse(sessionStorage.getItem('idade' + JSON.parse(sessionStorage.getItem('usuario'))));
    email_tela.innerHTML = JSON.parse(sessionStorage.getItem('email' + JSON.parse(sessionStorage.getItem('usuario'))));

    but_log.style.cssText = "display: none;";
    but_deslog.style.cssText = "display: block;";
}

if(JSON.parse(sessionStorage.getItem('errado')) === "Email Incorreto"){
    alert("Email Incorreto");
    sessionStorage.setItem('errado', JSON.stringify(""));
}

function cadastrar(){
    var email = document.getElementById('email');
    var senha = document.getElementById('senha');
    var nome = document.getElementById('nome');
    var idade = document.getElementById('idade');

    if(parseInt(JSON.parse(sessionStorage.getItem('cadastro'))) > 0){
        var n = parseInt(JSON.parse(sessionStorage.getItem('cadastro'))) + 1;
    }else{
        var n = 1;
    }

    var email_salvar = JSON.stringify(email.value);
    sessionStorage.setItem('email'+n, email_salvar);

    var senha_salvar = JSON.stringify(senha.value);
    sessionStorage.setItem('senha'+n, senha_salvar);

    var nome_salvar = JSON.stringify(nome.value);
    sessionStorage.setItem('nome'+n, nome_salvar);
    
    var idade_salvar = JSON.stringify(idade.value);
    sessionStorage.setItem('idade'+n, idade_salvar);

    sessionStorage.setItem('cadastro', n.toString());

    alert('Cadastrado');
}
function logar(){
    var email = document.getElementById('email');
    var senha = document.getElementById('senha');

    for(i = 0; i <= parseInt(JSON.parse(sessionStorage.getItem('cadastro'))); i++){
        var email_cadastrado = JSON.parse(sessionStorage.getItem('email'+i.toString()));
        var senha_cadastrado = JSON.parse(sessionStorage.getItem('senha'+i.toString()));
        if(email.value === email_cadastrado){
            if(senha.value === senha_cadastrado){
                alert("Logado");
                var logado = "True";
                var logado_salvar = JSON.stringify(logado);
                sessionStorage.setItem('logado', logado_salvar);
                sessionStorage.setItem('usuario', i.toString());
                sessionStorage.setItem('errado', JSON.stringify(""));
            }else{
                alert("Senha Incorreta");
                sessionStorage.setItem('errado', JSON.stringify(""));
            }
        }else{
            sessionStorage.setItem('errado', JSON.stringify("Email Incorreto"));
        }
    }
}

function deslogar(){
    var logado = "False";
    var logado_salvar = JSON.stringify(logado);
    sessionStorage.setItem('logado', logado_salvar);
    alert("Deslogado");
    location.reload();
}