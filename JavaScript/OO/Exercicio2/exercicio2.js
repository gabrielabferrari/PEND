//Classe: Aluno
//Atributos: nome, idade, cursos, matricula
//Métodos: aprender, estudar, apresentar

class Aluno {
    constructor(nome, idade, cursos, matricula) {
        this.nome = nome;
        this.idade = idade;
        this.cursos = cursos;
        this.matricula = matricula;
    }

    aprender() {
        console.log(`${this.nome} está aprendendo.`);
    }

    estudar() {
        console.log(`${this.nome} está estudando.`);
    }

    apresentar() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
        console.log(`Cursos: ${this.cursos}`);
        console.log(`Matrícula: ${this.matricula}`);
    }
}

const aluno1 = new Aluno("Bianca", 17, ["Biomedicina"], "2023-001");
console.log("Aluno 1:", aluno1);

const aluno2 = new Aluno("Vitoria", 17, ["Direito"], "2023-002");
console.log("Aluno 2:", aluno2);

const aluno3 = new Aluno("Evelyn", 18, ["Psicologia"], "2023-003");
console.log("Aluno 3:", aluno3);

aluno1.aprender();
aluno2.estudar();
aluno3.apresentar();
