//Atividade 01
function horaatual() {
    let data = new Date();
    console.log("Hora atual: ", data.getHours() + ":" + data.getMinutes());
}
horaatual();

//Atividade 02
function calcularMedia() {
    let nota1 = Number(prompt("Digite a primeira nota:"));
    let nota2 = Number(prompt("Digite a segunda nota:"));
    let soma = nota1 + nota2;
    let media = soma / 2;
    console.log("Soma: ", soma);
    console.log("Média: ", media);
}
calcularMedia();

//Atividade 03
function receberNome(nome) {
    console.log("Tamanho da string: ", nome.length);
    console.log("Texto em maiúsculas: ", nome.toUpperCase());
}
let nome = prompt("Digite seu nome: ");
receberNome(nome);

//Atividade 04
function recebaFrase(frase) {
    console.log(frase.includes("HTML"));
}
let frase = prompt("Digite uma frase: ");
recebaFrase(frase);