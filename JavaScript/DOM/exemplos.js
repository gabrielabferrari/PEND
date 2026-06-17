document.getElementById("conteudo").innerHTML = "<p>Olá, DOM! (innerHTML)</p>";

document.getElementById("mensagem").textContent = "Texto simples, sem HTML. (textContent)";

document.getElementById("foto").setAttribute("src", "https://i.pinimg.com/736x/e4/50/69/e450691be6df5a1937c0acb2f1d6a90f.jpg")

let url = document.getElementById("link").getAttribute("href");
console.log(url); 

document.getElementById("caixa").style.backgroundColor = "pink";

document.getElementById("alerta").classList.add("desataque");

document.getElementById("alerta").classList.remove("oculto");

let novoParagrafo = document.createElement("p");

novoParagrafo.textContent = "Este elemento foi criado pelo JavaScript.";

document.getElementById("container").appendChild(novoParagrafo);

let novoItem = document.createElement("li");
novoItem.textContent = "Item novo";
document.getElementById("lista").appendChild(novoItem); 

let item = document.getElementById("Item1");
document.getElementById("list").removeChild(item);