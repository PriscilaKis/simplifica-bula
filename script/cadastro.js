var botao1 = document.getElementById("botao1");
var modal1 = document.getElementById("modal1");
var cadastro = document.getElementById("cadastro");
var fecharcadastro = document.getElementById("fecharcadastro");
var botaoLogout = document.getElementById("logout");


botao1.onclick = function () {
    cadastro.classList.add("visivel");
}

fecharcadastro.onclick = function () {
    cadastro.classList.remove("visivel");
}

cadastro.onclick = function (e) {
    if (e.target == cadastro) {
        cadastro.classList.remove("visivel");
    }
}

//Seleciona o formulario
var formCadastro = document.querySelector(".formCadastro");
//quando mandar enviar os dados
formCadastro.onsubmit = function (e) {
    //Seleciona os inputs

    var emailCadastro = document.querySelector("#emailCadastro");
    var senhaCadastro = document.querySelector("#senhaCadastro");
    var nomeCadastro = document.querySelector('#nome');

    //seleciona a modal
    var modalCadastro = document.querySelector("#modalCadastro");
    var usuarios = JSON.parse(localStorage.usuarios || "[]");

    usuarios.push({
        nome: nomeCadastro.value,
        email: emailCadastro.value,
        senha: senhaCadastro.value,
    });

    localStorage.usuarios = JSON.stringify(usuarios);
}

var mostraUsuario = function () {
    var usuario = document.querySelector('.usuario');
    var espacoNomeUsuario = document.querySelector('.usuario strong');

    usuario.classList.remove('invisivel');
    botaoLogout.classList.remove('invisivel');
    botao.classList.add('invisivel');
    botao1.classList.add('invisivel');
    espacoNomeUsuario.innerText = JSON.parse(localStorage.usuario).nome;
}

window.onload = function () {
    if (localStorage.usuario) {
        mostraUsuario();
    }
};