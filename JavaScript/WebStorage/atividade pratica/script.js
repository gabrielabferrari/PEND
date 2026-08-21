class Produto {
    constructor(nome, preco, categoria, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;
    }

    aplicarDesconto() {
        const precoComDesconto = this.preco - (this.preco * this.desconto / 100);
        this.precoComDesconto = precoComDesconto;
    }

}

class Produtos {
    constructor() {
        this.produtos = [];
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
    }

    excluirProduto(index) {
        this.produtos.splice(index, 1);
    }

    exibirNaTela() {

        const resultado = document.querySelector("#resultado");
        resultado.innerHTML = "";

        this.produtos.forEach((produto, index) => {

            resultado.innerHTML += `
        <div>
            <p>Nome: ${produto.nome}</p>
            <p>Preço: R$${produto.preco}</p>
            <p>Categoria: ${produto.categoria}</p>
            <p>Desconto: ${produto.desconto}%</p>
            <p>Preço com desconto: R$${produto.precoComDesconto}</p>

            <button onclick="excluirProduto(${index})">Excluir</button>
        </div>
        `;
        });

    }
}


const produtos = new Produtos();
function excluirProduto(index) {
    produtos.excluirProduto(index);
    produtos.exibirNaTela();
}
const nome = document.querySelector("#nome");
const preco = document.querySelector("#preco");
const categoria = document.querySelector("#categoria");
const desconto = document.querySelector("#desconto");
const botaoCadastrar = document.querySelector("#botaoCadastrar");

botaoCadastrar.addEventListener("click", function () {

    const produto = new Produto(nome.value, preco.value, categoria.value, desconto.value);

    produto.aplicarDesconto();
    produtos.adicionarProduto(produto);
    localStorage.setItem("produtos", JSON.stringify(produtos.produtos));
    produtos.exibirNaTela();
});

const dados = localStorage.getItem("produtos");

if (dados) {

    const produtosSalvo = JSON.parse(dados);

    const produtos = new Produtos();
    produtosSalvo.forEach((produtoSalvo) => {
        produtos.adicionarProduto(
            new Produto(
                produtoSalvo.nome,
                produtoSalvo.preco,
                produtoSalvo.categoria,
                produtoSalvo.desconto
            )
        );
    });

    produtos.exibirNaTela();
};

