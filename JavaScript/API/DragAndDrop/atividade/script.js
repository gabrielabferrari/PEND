let itens = document.querySelectorAll(".item");
let zonas = document.querySelectorAll(".drop-zone");

let acertos = 0;
let itemAtual = null;

// Arrastar o item
for (let i = 0; i < itens.length; i++) {

    itens[i].addEventListener("dragstart", function () {
        itemAtual = this;
    });

}

// Soltar na área correta
for (let i = 0; i < zonas.length; i++) {

    zonas[i].addEventListener("dragover", function (e) {
        e.preventDefault();
    });

    zonas[i].addEventListener("drop", function (e) {
        e.preventDefault();

        if (itemAtual == null) {
            return;
        }

        // Verifica se é o lugar correto
        if (this.getAttribute("data-item") == itemAtual.id) {

            this.appendChild(itemAtual);

            itemAtual.style.width = "100%";
            itemAtual.style.height = "100%";
            itemAtual.style.objectFit = "contain";
            itemAtual.draggable = false;

            this.style.border = "none";

            acertos++;
            document.getElementById("acertos").innerHTML = acertos;

            // Vitória
            if (acertos == 6) {
                document.getElementById("vitoria").classList.remove("oculto");
            }

            itemAtual = null;
        }

    });

}