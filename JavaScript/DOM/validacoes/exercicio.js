let email = document.getElementById("email");
let senha = document.getElementById("senha");
let mensagem = document.getElementById("mensagem");
let mensagemSenha = document.getElementById("mensagemSenha");
let mensagemValidar = document.getElementById("mensagemValidar");
let validar = document.getElementById("validar");
let forcaSenha = ""

validar.addEventListener("click", function() {
    if (email.value.includes("@") && email.value.includes(".")) {
        mensagem.innerText = "Email válido";
        mensagem.style.color = "green";
    } else {
        mensagem.innerText = "Email inválido";
        mensagem.style.color = "red";
    } 
    if (senha.value == "" ) {
        mensagemSenha.textContent = "Preencha esse campo.";
        mensagemSenha.style.color = "red";
        return;
    } if (forcaSenha === "aceitavel" || forcaSenha === "forte") {
        mensagemValidar.textContent = "E-mail e senha validados com sucesso!";
        mensagemValidar.style.color = "green";
        email.value = "";
        mensagem.textContent = "";
        senha.value = "";
        mensagemSenha.textContent = "";
    }
});

senha.addEventListener("keyup", function() {
    if (senha.value.length < 6) {
        mensagemSenha.innerText = "Senha Fraca";
        mensagemSenha.style.color = "red";
        forcaSenha = "senhafraca";
    } else if (senha.value.length >= 6 && senha.value.length < 10 ) {
        mensagemSenha.innerText = "Aceitável";
        mensagemSenha.style.color = "orange";
        forcaSenha = "aceitavel";
    } else if (senha.value.length >= 10) {
        mensagemSenha.innerText = "Senha forte!";
        mensagemSenha.style.color = "green";
        forcaSenha = "forte"
    }
})



