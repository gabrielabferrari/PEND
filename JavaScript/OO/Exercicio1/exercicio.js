//Objeto: Funcionário
//Atributos: nome, sexo, cpf, rg, cargo, departamento, salário, telefone, email
//Métodos: trabalhar, receberSalario, baterPonto, tirarFerias, demitir, exibir informações do funcionário

class Funcionario {
    constructor(nome, sexo, cpf, rg, cargo, departamento, salario, telefone, email) {
        this.nome = nome;
        this.sexo = sexo;
        this.cpf = cpf; 
        this.rg = rg;
        this.cargo = cargo;
        this.departamento = departamento;
        this.salario = salario;
        this.telefone = telefone;
        this.email = email;
    }

    trabalhar() {
        console.log(`${this.nome} está trabalhando.`);
    }

    receberSalario() {
        console.log(`${this.nome} recebeu o salário de R$${this.salario}.`);
    }

    baterPonto() {
        console.log(`${this.nome} bateu o ponto.`);
    }

    tirarFerias() {
        console.log(`${this.nome} está de férias.`);
    }

    demitir() {
        console.log(`${this.nome} foi demitido.`);
    }

    exibirInformacoes() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Sexo: ${this.sexo}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`RG: ${this.rg}`);
        console.log(`Cargo: ${this.cargo}`);
        console.log(`Departamento: ${this.departamento}`);
        console.log(`Salário: R$${this.salario}`);
        console.log(`Telefone: ${this.telefone}`);
        console.log(`Email: ${this.email}`);
    }

}

const funcionario1 = new Funcionario("Everton", "Masculino", "123.456.789-00", "MG-12.345.678", "Desenvolvedor", "TI", 5000, "(31) 99999-9999", "everton@email.com");
console.log("Funcionário 1:", funcionario1);

const funcionario2 = new Funcionario("Juliana", "Feminino", "987.654.321-00", "SP-98.765.432", "Analista", "Financeiro", 6000, "(11) 98888-8888", "juliana@email.com");
console.log("Funcionário 2:", funcionario2);

const funcionario3 = new Funcionario("Alexandre", "Masculino", "456.789.123-00", "RJ-45.678.912", "Gerente", "Recursos Humanos", 8000, "(21) 97777-7777", "alexandre@email.com");
console.log("Funcionário 3:", funcionario3);

const funcionario4 = new Funcionario("Claudia", "Feminino", "321.654.987-00", "RS-32.165.498", "Coordenadora", "Marketing", 7000, "(51) 96666-6666", "claaudia@email.com");
console.log("Funcionário 4:", funcionario4);

const funcionario5 = new Funcionario("Fabiana", "Feminino", "654.321.987-00", "BA-65.432.198", "Assistente", "Vendas", 4000, "(71) 95555-5555", "fabiana@email.com");
console.log("Funcionário 5:", funcionario5);

const funcionario6 = new Funcionario("Ricardo", "Masculino", "789.123.456-00", "PE-78.912.345", "Supervisor", "Logística", 7500, "(81) 94444-4444", "ricardo@email.com");
console.log("Funcionário 6:", funcionario6);

const funcionario7 = new Funcionario("Viviane", "Feminino", "987.321.654-00", "PR-98.732.165", "Diretora", "Jurídico", 9000, "(41) 93333-3333", "viviane@emal.com");
console.log("Funcionário 7:", funcionario7);

const funcionario8 = new Funcionario("André", "Masculino", "321.987.654-00", "SC-32.198.765", "Engenheiro", "Produção", 8500, "(47) 92222-2222", "andre@email.com");
console.log("Funcionário 8:", funcionario8);

funcionario1.exibirInformacoes();
console.log("-------------------------------");
funcionario2.exibirInformacoes();
console.log("-------------------------------");
funcionario3.exibirInformacoes();
console.log("-------------------------------");
funcionario4.exibirInformacoes();
console.log("-------------------------------");
funcionario5.exibirInformacoes();
console.log("-------------------------------");
funcionario6.exibirInformacoes();
console.log("-------------------------------");
funcionario7.exibirInformacoes();
console.log("-------------------------------");
funcionario8.exibirInformacoes();
console.log("-------------------------------");
funcionario2.trabalhar();
funcionario3.receberSalario();
funcionario4.baterPonto();
funcionario5.tirarFerias();
funcionario6.demitir();
funcionario7.exibirInformacoes();
funcionario8.trabalhar();