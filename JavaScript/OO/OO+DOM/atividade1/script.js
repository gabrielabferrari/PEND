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

    // exibir() {

    //         const resultado = document.querySelector("#resultado");

    //         resultado.innerHTML = `
    //             <div>
    //                 <p>Nome: ${this.nome}</p>
    //                 <p>Preço: R$${this.preco}</p>
    //                 <p>Categoria: ${this.categoria}</p>
    //                 <p>Desconto: ${this.desconto}%</p>
    //                 <p>Preço com desconto: R$${this.precoComDesconto}</p>
    //             </div>
    //             `;
    //         }
        }

class Produtos {
    constructor() {
        this.produtos = [];
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
    }

    exibirNaTela() {

            const resultado = document.querySelector("#resultado");

            resultado.innerHTML = "";
            this.produtos.forEach(produto => {
                resultado.innerHTML += `
                <div>
                    <p>Nome: ${produto.nome}</p>
                    <p>Preço: R$${produto.preco}</p>
                    <p>Categoria: ${produto.categoria}</p>
                    <p>Desconto: ${produto.desconto}%</p>
                    <p>Preço com desconto: R$${produto.precoComDesconto}</p>
                </div>
                `;
            })
        }
}

const produtos = new Produtos();
const nome = document.querySelector("#nome");
const preco = document.querySelector("#preco");
const categoria = document.querySelector("#categoria");
const desconto = document.querySelector("#desconto");
const botaoCadastrar = document.querySelector("#botaoCadastrar");

botaoCadastrar.addEventListener("click", function() {

    const produto = new Produto(nome.value, preco.value, categoria.value, desconto.value);

    produto.aplicarDesconto();
    produtos.adicionarProduto(produto);
    produtos.exibirNaTela();
});

