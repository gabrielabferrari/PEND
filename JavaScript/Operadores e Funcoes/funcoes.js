// Funções: Blocos de código reutilizável

function saudacao() {
    console.log("Olá, JavaScript!");
}
saudacao();

// função sem retorno
function saudacaoNome(nome) {
    console.log("Olá, " + nome);
}
saudacaoNome("Ana");

// Função com retorno
function somar(a, b) {
    return a + b;
}
console.log(somar(5, 3));

// Exercicio 7
function imc(peso, altura) {
    return peso / (altura * altura);
}
let peso = prompt("Digite seu peso em kg:");
let altura = prompt("Digite sua altura em metros:");
console.log("Seu IMC é:", imc(peso, altura));


// Exercicio 8
function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }  
}
numero = prompt("Digite um número:");
console.log("O número é:", parOuImpar(numero)); 

//Funções Nativas
let agora = new Date();
console.log(agora);


