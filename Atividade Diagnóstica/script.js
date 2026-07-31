// Nome
let nome = document.querySelector("#nome");
let mensagemNome = document.querySelector("#mensagemNome");

// Email
let email = document.querySelector("#email");
let mensagemEmail = document.querySelector("#mensagemEmail");
let mascaraEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Assunto
let assunto = document.querySelector("#assunto");
let mensagemAssunto = document.querySelector("#mensagemAssunto");

// Botão
let enviar = document.querySelector("#enviar");
let mensagemEnviar = document.querySelector("#mensagemEnviar");


// Nome
nome.addEventListener("keyup", function(){

    if(nome.value.trim() === ""){
        mensagemNome.textContent = "O campo nome é obrigatório.";
        mensagemNome.style.color = "red";
    }
    else{
        mensagemNome.textContent = "Nome válido";
        mensagemNome.style.color = "green";
    }

});


// Email
email.addEventListener("keyup", function(){

    if(mascaraEmail.test(email.value)){
        mensagemEmail.textContent = "E-mail válido";
        mensagemEmail.style.color = "green";
    }
    else{
        mensagemEmail.textContent = "E-mail inválido. Ex: exemplo@email.com";
        mensagemEmail.style.color = "red";
    }

});


// Assunto
assunto.addEventListener("keyup", function(){

    if(assunto.value.trim() === ""){
        mensagemAssunto.textContent = "O campo assunto é obrigatório.";
        mensagemAssunto.style.color = "red";
    }
    else if(assunto.value.length < 5){
        mensagemAssunto.textContent = "Digite pelo menos 5 caracteres.";
        mensagemAssunto.style.color = "red";
    }
    else{
        mensagemAssunto.textContent = "Assunto válido";
        mensagemAssunto.style.color = "green";
    }

});


// Enviar
enviar.addEventListener("click", function(){

    if(nome.value.trim() === ""){
        mensagemNome.textContent = "O campo nome é obrigatório.";
        mensagemNome.style.color = "red";
    }

    if(!mascaraEmail.test(email.value)){
        mensagemEmail.textContent = "E-mail inválido.";
        mensagemEmail.style.color = "red";
    }

    if(assunto.value.trim() === ""){
        mensagemAssunto.textContent = "O campo assunto é obrigatório.";
        mensagemAssunto.style.color = "red";
    }

    if(
        nome.value.trim() !== "" &&
        mascaraEmail.test(email.value) &&
        assunto.value.trim() !== "" &&
        assunto.value.length >= 5
    ){

        mensagemEnviar.textContent = "Mensagem enviada com sucesso!";
        mensagemEnviar.style.color = "green";

        nome.value = "";
        email.value = "";
        assunto.value = "";

        mensagemNome.textContent = "";
        mensagemEmail.textContent = "";
        mensagemAssunto.textContent = "";
    }

});