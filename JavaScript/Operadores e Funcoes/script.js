console.log("Olá, JavaScript!");

let a = 10;
let b = 3;

console.log("Adição" , a + b);
console.log("Subtração" , a - b);
console.log("Multiplicação" , a * b);
console.log("Divisão" , a / b);
console.log("Resto da divisão" , a % b);
console.log("Potência" , a ** b);
let contador = 5;
contador++;
console.log(contador);

// exercicio 1 Cálculo da média de três notas
let nota1 = 8;
let nota2 = 7;
let nota3 = 9;
let media = (nota1 + nota2 + nota3) / 3;
console.log("Média das notas:", media);

// exercicio 2 Cálculo do resto da divisão
let num1 = 20;
let num2 = 3;
let resto = num1 % num2;
console.log("Resto da divisão:", resto);

let x = 10; // inte
let y = "10"; // string

console.log("Igualdade (valor)" , x == y); 
console.log("Estritamente igual (tipo e valor)" , x === y);
console.log("Desigualdade (valor)" , x != y);
console.log("Desigualdade estrita (tipo e valor)" , x !== y); 

// Exercício 3
let idade = 20;
if (idade >= 18) {
    console.log("Você é maior de idade.");
}

// Exercício 4
let numero = 35;
let numero1 = 20;
if (numero > numero1) {
    console.log(numero, " é maior que ", numero1);
} else if (numero < numero1) {
    console.log(numero1, " é maior que ", numero);
}

// Operadores lógicos

let idade2 = 20;
let temCarteira = true;
console.log(idade2 >= 18 && temCarteira); // true


let chovendo = false;
let gurdaChuva = true;
console.log(chovendo || gurdaChuva); // true

let ligado = false;
console.log(!ligado); // true

// Exercício 5
let nota = 8;
frequencia = 75;
if (nota >= 7 && frequencia >= 75) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// Exercício 6
let login = true;
let senha = false;
console.log(login || senha); 

