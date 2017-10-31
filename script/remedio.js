var voltaHome = function () {
    window.location.href = "index.html";
};

var irParaDuvidas = function () {
    window.location.href = "duvida.html";
}

var remedioNome = document.getElementById("remedioNome");
var remedioPrincipio = document.getElementById("remedioPrincipio");
var remedioAge = document.getElementById("remedioAge");
var remedioMotivo = document.getElementById("remedioMotivo");
var remedioGenerico = document.getElementById("remedioGenerico");
var remedioReacao = document.getElementById("remedioReacao");

window.onload = function () {
    var remedioEncontrado = JSON.parse(localStorage.remedioEncontrado);
    remedioNome.innerText = remedioEncontrado.nome;
    remedioPrincipio.innerText = remedioEncontrado.principio;
    remedioAge.innerText = remedioEncontrado.age;
    remedioMotivo.innerText = remedioEncontrado.motivo;
    remedioGenerico.innerText = remedioEncontrado.generico;
    remedioReacao.innerText = remedioEncontrado.reacao;
};