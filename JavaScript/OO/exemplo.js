//Classe é o modelo que criamos para criar objetos, ou seja, é a planta do objeto. A classe é o molde que define as propriedades e comportamentos que os objetos criados a partir dela terão.
class Carro {

    //O construtor é um método especial que é chamado automaticamente quando um objeto é criado a partir da classe. Ele é usado para inicializar os atributos do objeto com os valores passados como parâmetros.
    constructor(marca, modelo, ano, cor) {
    //Atributos ou propriedades são as características do objeto, ou seja, são as informações que ele possui. No caso do carro, os atributos são: marca, modelo, ano e cor.
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        //This é uma palavra-chave que faz referência ao objeto atual, ou seja, ao objeto que está sendo criado a partir da classe. Ela é usada para acessar os atributos e métodos do objeto.
    }
    //Métodos são as ações que o objeto pode realizar, ou seja, são as funções que definem o comportamento do objeto. No caso do carro, os métodos são: ligar e acelerar.
    ligar() {
        console.log("O carro está ligado.");
    }

    acelerar() {
        console.log("Acelerando.");
    }

    frear() {
        console.log(`${this.modelo} freiou.`);
    }
}
//Objetos são instâncias da classe, ou seja, são os elementos criados a partir do modelo definido pela classe. Cada objeto possui seus próprios valores para os atributos definidos na classe.
const carro1 = new Carro("Volkswagen", "Gol", 2022, "Branco");
console.log("Carro 1:", carro1);

//Criando outro objeto a partir da classe Carro
const carro2 = new Carro("Toyota", "Corolla", 2025, "Preto");
console.log("Carro 2:", carro2);

const carro3 = new Carro("FIAT", "Argo", 2023, "Prata");
console.log("Carro 3:", carro3);

console.log("-------------------------------");
console.log("Atributos do Carro 1:");
console.log("- ", carro1.marca);
console.log("- ", carro1.modelo);
console.log("- ", carro1.ano);
console.log("- ", carro1.cor);
console.log("-------------------------------");
console.log("Atributos do Carro 2:");
console.log("- ", carro2.marca);
console.log("- ", carro2.modelo);
console.log("- ", carro2.ano);
console.log("- ", carro2.cor);
console.log("-------------------------------");
console.log("Atributos do Carro 3:");
console.log("- ", carro3.marca);
console.log("- ", carro3.modelo);
console.log("- ", carro3.ano);
console.log("- ", carro3.cor);
console.log("-------------------------------");

//Chamando os métodos do objeto carro1
carro1.ligar();
//Chamando o método acelerar do objeto carro2
carro2.acelerar();
//Chamando o método frear do objeto carro3
carro3.frear();