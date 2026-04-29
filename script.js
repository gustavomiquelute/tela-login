let cadastro = false;

document.getElementById("toggle").onclick = () => {
    cadastro = !cadastro;
    document.getElementById("titulo").innerText = cadastro ? "Cadastro" : "Login";
    document.querySelector("button").innerText = cadastro ? "Cadastrar" : "Entrar";
    document.getElementById("toggle").innerHTML = cadastro 
        ? "<p>Já tem conta? Faça Login!</p>" 
        : "<p>Não tem conta? Cadastre-se!</p>";
    document.getElementById("mensagem").innerHTML = "";
}