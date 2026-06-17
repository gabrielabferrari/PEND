// Atividade 1
let azul = document.getElementById("azul");
let vermelho = document.getElementById("vermelho");
let titulo = document.querySelector(".titulo");

azul.addEventListener("click", function() {
    titulo.style.color = "blue";
});

vermelho.addEventListener("click", function() {
    titulo.style.color = "red";
});

// Atividade 2
let mostrar = document.getElementById("mostrar");
let mensagem = document.querySelector(".mensagem");

mostrar.addEventListener("click", function() {
    mensagem.classList.toggle("oculto");   
});

//Atividade 3
let texto = document.getElementById("texto");
let contador = document.getElementById("contador");

texto.addEventListener("input", function() {
    let comprimento = texto.value.length;
    contador.textContent = "Número de caracteres: " + comprimento;
});

//Atividade 4
let botao = document.getElementById("botao");
let paragrafo = document.getElementById("paragrafo");
let contadorCliques = 0;

botao.addEventListener("click", function() {
    contadorCliques++;
    paragrafo.textContent = "Cliques: " + contadorCliques;
});

//Atividade 5
let botaolista = document.getElementById("botaolista")
let lista = document.getElementById("lista")
let item = document.getElementById("item")

botaolista.addEventListener("click", function() {
    let novoItem = document.createElement("li")
    if (item.value.trim() === "") {
        alert("Digite algum item.");
        return;
    }
    novoItem.textContent = item.value;
    lista.appendChild(novoItem);
//Atividade 6
    novoItem.addEventListener("click", function() {
//Desafio extra (7)
        if (confirm("Deseja remover este item?")) {
        lista.removeChild(novoItem)
    }});
});

//Desafio HARD
let nome = document.getElementById("nome");
let enviar = document.getElementById("enviar");
let exibir = document.getElementById("exibir");
let aviso = document.getElementById("aviso");

enviar.addEventListener("click", function() {
    if (nome.value.trim() === "") {
     aviso.textContent = "O campo nome é obrigatório";
     aviso.style.color = "red";
     return;
    }
    exibir.textContent = nome.value;
    aviso.textContent = "Nome enviado com sucesso!";
    aviso.style.color = "green";
});





