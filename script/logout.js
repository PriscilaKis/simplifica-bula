function logout() {
    var usuario = JSON.parse(localStorage.usuario);
    botaoLogout.classList.add("invisivel");
    localStorage.removeItem('usuario');
    window.location = "index.html";
}

