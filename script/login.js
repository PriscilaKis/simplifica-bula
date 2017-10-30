var botao = document.getElementById("botao");
var modal = document.getElementById("modal");
var fundo = document.getElementById("fundo");
var fecharfundo = document.getElementById("fecharfundo");



botao.onclick = function () {
    fundo.classList.add("visivel");
}


fecharfundo.onclick = function () {
    fundo.classList.remove("visivel");
}

fundo.onclick = function (e) {
    if (e.target == fundo) {
        fundo.classList.remove("visivel");
    }
}

//Login
var email = document.getElementById("email");
var senha = document.querySelector("#senha");
var formulario = document.querySelector("form");
//console.log(email.value, " ", localStorage.email);
//console.log(senha.value, " ", localStorage.senha);

formulario.onsubmit = function (e) {
    //seleciona os inputs
    var email = document.querySelector('#email');
    var senha = document.querySelector('#senha');

    //seleciona o modal
    var modal = document.querySelector('#modal');

    //Verifica se o email e senha são permitidos

    var usuarios = JSON.parse(localStorage.usuarios);
    var correto;

    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email === email.value && usuarios[i].senha === senha.value) {
            correto = true;
            localStorage.usuario = JSON.stringify(usuarios[i]);
            break;
        }

    }

    if (!correto) {
        //adiciona classe de erro na modal pra mostrar um feedback
        modal.classList.add('erro');

        //Remove a classe com erro depois de fazer a animação
        setTimeout(function () {
            modal.classList.remove('erro');
        }, 1000);
        //Não deixa o usuario enviar o formulario
        return false;
    } else {
        // e.preventDefault();
        if (localStorage.usuario) {
            mostraUsuario();
        }
        
    }
}