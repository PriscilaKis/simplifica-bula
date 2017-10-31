var popupRemedioNaoEncontrado = document.getElementById("faltaRemedio");

var remedios = [
    {
        nome: 'Capoten',
        principio: 'Captopril',
        age: 'Coração',
        motivo: 'Pressão alta',
        generico: 'Captopril',
        reacao: 'Sono, fraqueza'
    },
    {
        nome: 'Luftal',
        principio: 'Simeticona',
        age: 'Intestino',
        motivo: 'Liberar gazes (pum e arroto)',
        generico: 'Simeticona',
        reacao: 'Coceira (casos raros)'
    },
    {
        nome: 'Novalgina',
        principio: 'Dipirona Sódica Monoidratada',
        age: 'Glândulas do corpo (hormônios)',
        motivo: 'Alivio da dor e baixa a febre',
        generico: 'Dipirona Sódica Monoidratada',
        reacao: 'Alteração no batimento cardiaco'
    }
];



var remedioExiste = function (remedioPesquisado) {
    var resultado = false;
    delete localStorage.remedioEncontrado;

    for (var index = 0; index < remedios.length; index++) {
        var remedioAtual = remedios[index];

        if (remedioPesquisado.toLowerCase() === remedioAtual.nome.toLowerCase()) {
            resultado = true;
            localStorage.remedioEncontrado = JSON.stringify(remedioAtual);
            break;
        }
    }

    return resultado;
};

var pesquisaRemedio = function () {
    var nomeRemedio = document.querySelector("#remedioCadastrado").value;

    if (remedioExiste(nomeRemedio)) {
        window.location.href = "remedio.html"
    } else {
        popupRemedioNaoEncontrado.classList.add("visivel");
    }

};

fecharFaltaRemedio.onclick = function () {
    popupRemedioNaoEncontrado.classList.remove("visivel");
}