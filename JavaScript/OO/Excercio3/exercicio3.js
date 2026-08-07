//Classe: Produto
//Atributos: nome, preco, estoque, quantidade
//Métodos: vender, repor, alterarPreco, exibirInformacoes

class Produto {
    constructor(nome, preco, estoque, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
        this.quantidade = quantidade;
    }

    vender() {
       console.log(`${this.nome} foi vendido. Quantidade: ${this.quantidade}.`);
    }
    
    repor() {
        console.log(`${this.nome} foi reposto. Quantidade: ${this.quantidade}.`);
    }

    alterarPreco(novoPreco) {
        this.preco = novoPreco;
        console.log(`O preço do ${this.nome} foi alterado para R$${this.preco}.`);
    }

    exibirInformacoes() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Preço: R$${this.preco}`);
        console.log(`Estoque: ${this.estoque}`);
        console.log(`Quantidade: ${this.quantidade}`);
    }
}

const produto1 = new Produto("Fone", 300, 10, 5);
console.log("Produto 1:", produto1);

const produto2 = new Produto("Iphone 17", 8500, 20, 10);
console.log("Produto 2:", produto2);

const produto3 = new Produto("Notebook", 3000, 15, 7);
console.log("Produto 3:", produto3);

produto1.vender();
produto2.repor();
produto3.alterarPreco(2800);
produto1.exibirInformacoes();
produto2.exibirInformacoes();
produto3.exibirInformacoes();


