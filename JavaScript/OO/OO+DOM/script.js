

class Aluno {

    constructor(nome, idade, curso, matricula) {

        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.matricula = matricula;
    }

    estudar() {
        console.log(`${this.nome} está estudando...`);
    }

    apresentar() {
        console.log(`${this.nome} está fazendo uma ótima apresentação!`);
    }

    // exibirNaTela() {

    //     const resultado = document.querySelector("#resultado");

    //     resultado.innerHTML = "";

    //     alunos.forEach(aluno=> {

    //         resultado.innerHTML += `
    //         <div>
    //             <p>Nome: ${aluno.nome}</p>
    //             <p>Idade: ${aluno.idade}</p>
    //             <p>Curso: ${aluno.curso}</p>
    //             <p>Matrícula: ${aluno.matricula}</p>
    //         </div>
    //         `;
    //     })
    
}

    class Turma {
        constructor() {
            this.alunos = [];
        }

        adicionarAluno(aluno) {
            this.alunos.push(aluno);
        }

        exibirNaTela() {

            const resultado = document.querySelector("#resultado");

            resultado.innerHTML = "";
            this.alunos.forEach(aluno => {
                resultado.innerHTML += `
                <div>
                    <p>Nome: ${aluno.nome}</p>
                    <p>Idade: ${aluno.idade}</p>
                    <p>Curso: ${aluno.curso}</p>
                    <p>Matrícula: ${aluno.matricula}</p>
                </div>
                `;
            })
        }
    }

    // exibirNaTela() {

    //     const resultado = document.querySelector("#resultado");

    //     resultado.innerHTML = `
    //         <p>Nome: ${this.nome}</p>
    //         <p>Idade: ${this.idade}</p>
    //         <p>Curso: ${this.curso}</p>
    //         <p>Matrícula: ${this.matricula}</p>
    //     `;
    // }   


const turma = new Turma();
const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");
const curso = document.querySelector("#curso");
const matricula = document.querySelector("#matricula");
const botaoCadastrar = document.querySelector("#botaoCadastrar");

botaoCadastrar.addEventListener("click", function() {

    const aluno = new Aluno(nome.value, idade.value, curso.value, matricula.value);

    turma.adicionarAluno(aluno);
    // aluno.estudar(); 
    turma.exibirNaTela();
});

// const aluno1 = new Aluno("Fabiana", 18, "Enfermagem", "2026.1");
// aluno1.estudar();
// aluno1.apresentar();

// aluno1.exibirNaTela();