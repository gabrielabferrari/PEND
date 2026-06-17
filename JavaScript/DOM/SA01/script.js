//senha
let senha = document.querySelector("#senha")
let mensagemSenha = document.querySelector("#mensagemSenha")
let forcaSenha = ""
let botaoSenha = document.querySelector("#botaoSenha")
//confirmar senha
let confirmarSenha = document.querySelector("#confirmarSenha")
let mensagemConfirmar = document.querySelector("#mensagemConfirmar")
let botaoConfirmar = document.querySelector("#botaoConfirmar")
//nome
let nome = document.querySelector("#nome")
let mensagemNome = document.querySelector("#mensagemNome")
//email
let email = document.querySelector("#email")
let mensagemEmail = document.querySelector("#mensagemEmail")
let mascaraEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//telefone
let telefone = document.querySelector("#telefone")
let mensagemTelefone = document.querySelector("#mensagemTelefone")
let mascaraTelefone = /^\(\d{2}\) \d{4,5}-\d{4}$/
//adicionar e remover telefone
let addTelefone = document.querySelector("#addtelefone")
let telefones = document.querySelector("#telefones")
//cadastrar
let cadastrar = document.querySelector("#cadastrar")
let mensagemCadastrar = document.querySelector("#mensagemCadastrar")
//endreço
let endereco = document.querySelector("#endereco")
let mensagemEndereco = document.querySelector("#mensagemEndereco")

//Esse evento é acionado toda vez que o usuário solta uma tecla enquanto digita a senha. Ele verifica a força da senha com base no comprimento e exibe uma mensagem correspondente, além de definir a variável forcaSenha para uso posterior na validação do cadastro.
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

//Esse evento acontece toda vez que a pessoa solta uma tecla enquanto digita a confirmação da senha. Ele compara o que foi digitado com a senha original e mostra uma mensagem dizendo se as duas senhas são iguais ou diferentes.
confirmarSenha.addEventListener("keyup", function() {
    if (confirmarSenha.value == senha.value) {
        mensagemConfirmar.textContent = "Válido";
        mensagemConfirmar.style.color = "green";
    } else {
        mensagemConfirmar.textContent = "As senhas não são iguais.";
        mensagemConfirmar.style.color = "red";
    }
})

//Esse evento acontece quando a pessoa clica nos botões de mostrar ou esconder a senha. Ele faz o campo da senha mudar entre “oculto” e “visível”, para dar ou tirar a visão do que foi digitado. Também trocam o ícone do botão para mostrar se a senha está aparecendo ou escondida.
botaoConfirmar.addEventListener("click", function() {
    if(confirmarSenha.type === "password") {
        confirmarSenha.setAttribute("type", "text");
        botaoConfirmar.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
    } else {
        confirmarSenha.setAttribute("type", "password");
        botaoConfirmar.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
    }
})

//Esse evento acontece quando a pessoa clica nos botões de mostrar ou esconder a senha. Ele faz o campo da senha mudar entre “oculto” e “visível”, para dar ou tirar a visão do que foi digitado. Também trocam o ícone do botão para mostrar se a senha está aparecendo ou escondida.
botaoSenha.addEventListener("click", function() {
    if(senha.type === "password") {
        senha.setAttribute("type", "text");
        botaoSenha.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
    } else {
        senha.setAttribute("type", "password");
        botaoSenha.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
    }
})

//Esse evento acontece toda vez que a pessoa solta uma tecla enquanto digita o nome. Ele verifica se o campo está vazio ou preenchido e mostra uma mensagem na tela. Se estiver vazio, a mensagem fica vermelha; se estiver preenchido, fica verde.
nome.addEventListener("keyup", function() {
    if (nome.value.trim() === "") {
        mensagemNome.textContent = "O campo nome é obrigatório.";
        mensagemNome.style.color = "red";
    } else {
        mensagemNome.textContent = "Nome Válido";
        mensagemNome.style.color = "green";
    }
})

//Esse evento verifica, enquanto a pessoa digita o e-mail, se ele está no formato correto. Se estiver certo, mostra verde; se não, mostra vermelho com um exemplo.
email.addEventListener("keyup", function() {
    if (mascaraEmail.test(email.value)) {
        mensagemEmail.innerText = "Email válido";
        mensagemEmail.style.color = "green";
    } else {
        mensagemEmail.innerText = "Email inválido. Ex: texto@texto.texto";
        mensagemEmail.style.color = "red";
    }
})

//Esse evento acontece quando a pessoa clica no botão de cadastrar. Ele verifica se todos os campos estão preenchidos corretamente e mostra mensagens indicando erros ou confirmando se o cadastro foi realizado com sucesso.
cadastrar.addEventListener("click", function() {
    if (mascaraEmail.test(email.value)) {
        mensagemEmail.innerText = "Email válido";
        mensagemEmail.style.color = "green";
    } else {
        mensagemEmail.innerText = "Email inválido. Ex: texto@texto.texto";
        mensagemEmail.style.color = "red";
    } 
    if (senha.value == "" ) {
        mensagemSenha.textContent = "Preencha esse campo.";
        mensagemSenha.style.color = "red";

    } if (confirmarSenha.value !== senha.value) {
        mensagemConfirmar.textContent = "As senhas não são iguais.";
        mensagemConfirmar.style.color = "red";
        return;
    }
    if ((forcaSenha === "aceitavel" || forcaSenha === "forte") &&
     mascaraEmail.test(email.value) &&
     mascaraTelefone.test(telefone.value) &&
     nome.value.trim() !== "" &&
     endereco.value.trim() !== "" &&
    confirmarSenha.value !== "")
       {mensagemCadastrar.textContent = "Cadastro realizado com sucesso! Bem-vindo(a) " + nome.value + "!";
        mensagemCadastrar.style.color = "green";
        email.value = "";
        mensagemEmail.textContent = "";
        senha.value = "";
        mensagemSenha.textContent = "";
        nome.value = "";
        mensagemNome.textContent = "";
        telefone.value = "";
        mensagemTelefone.textContent = "";
        endereco.value = "";
        mensagemEndereco.textContent = "";
        confirmarSenha.value = "";
        mensagemConfirmar.textContent = "";
        return;
    } if (mascaraTelefone.test(telefone.value)) {
        mensagemTelefone.innerText = "Telefone válido";
        mensagemTelefone.style.color = "green";
    } else {
        mensagemTelefone.innerText = "Telefone inválido. Ex: (00) 00000-0000";
        mensagemTelefone.style.color = "red";
    } if (endereco.value.trim() === "") {
        mensagemEndereco.textContent = "O campo endereço é obrigatório.";
        mensagemEndereco.style.color = "red";
    } else {
        mensagemEndereco.textContent = "Endereço Válido";
        mensagemEndereco.style.color = "green";
    }
    if (nome.value.trim() === "") {
        mensagemNome.textContent = "O campo nome é obrigatório.";
        mensagemNome.style.color = "red";
        return;
    } if (confirmarSenha.value.trim() === "") {
        mensagemConfirmar.textContent = "O campo confirmar senha é obrigatório.";
        mensagemConfirmar.style.color = "red";
    } 
});


//Esse evento acontece quando a pessoa clica no botão de adicionar telefone. Ele cria um novo campo para digitar outro número e um botão para remover esse campo, caso a pessoa não queira mais.
addTelefone.addEventListener("click", function() {

    let container = document.createElement("div");

    let novoInput = document.createElement("input");
    novoInput.type = "text";
    novoInput.placeholder = "(00) 00000-0000";
    novoInput.maxLength = 15;

    let botaoRemover = document.createElement("button");
    botaoRemover.textContent = "-";

    botaoRemover.addEventListener("click", function() {
        container.remove();
    });

    container.appendChild(novoInput);
    container.appendChild(botaoRemover);

    telefones.appendChild(container);
});

//Esse evento acontece enquanto a pessoa digita o telefone. Ele arruma o número automaticamente, tirando tudo que não é número e colocando os parênteses, espaço e hífen no formato certo.
telefone.addEventListener("input", function() {
    let valor = telefone.value;

    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
    valor = valor.replace(/(\d{5})(\d{4})$/, "$1-$2");

    telefone.value = valor;
});
