//Funções Nativas
let agora = new Date();
console.log(agora);

function mostrarDataHora() {
    let data = new Date();

    console.log("Dia Atual: ", data.getDate());
    console.log("Mês: ", data.getMonth() + 1);
    console.log("Ano: ", data.getFullYear());
    console.log("Horas: ", data.getHours());
    console.log("Minutos: ", data.getMinutes());
    console.log("Desafio: "+ data.getHours() + ":" + data.getMinutes() + " " + data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear());
}
mostrarDataHora();

//Fnções - Matemáticas
console.log(Math.PI);

function calcularOperacoes(numero) {
    console.log("Raiz: ", Math.sqrt(numero));
    console.log("Númermo inteiro mais próximo: ", Math.round(numero));
    console.log("Arredondado para cima: ", Math.ceil(numero));
    console.log("Arredondado para baixo: ", Math.floor(numero));
    console.log("Valor absoluto: ", Math.abs(numero));
    console.log("Número ao quadrado: ", Math.pow(numero, 2));

}
calcularOperacoes(7.8);

// Funções - String
function analisarString(texto) {
    console.log("Tamanho da string: ", texto.length);
    console.log("Texto em maiúsculas: ", texto.toUpperCase());
    console.log("Texto em minúsculas: ", texto.toLowerCase());
}
analisarString("JavaScript"); 

function verificaTexto(frase) {
    console.log(frase.includes("JavaScript"));
}
verificaTexto("Eu estudo JavaScript!");

function eEssaAqui(nome, curso) {
    return "Aluno: " + nome + " | Curso: " + curso;
}
console.log(eEssaAqui("Gabriela", "Front-End"));
