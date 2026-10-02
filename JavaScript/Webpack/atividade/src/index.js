import { saudacao } from './saudacao.js';

const nome = "Gabriela Barreto";
console.log(saudacao(nome));

import { calcularMedia } from './saudacao.js';
const calcular = document.getElementById('calcular');
calcular.addEventListener('click', () => {

    const nota1 = Number(document.getElementById('nota1').value);
    const nota2 = Number(document.getElementById('nota2').value);
    const nota3 = Number(document.getElementById('nota3').value);
    const media = calcularMedia(nota1, nota2, nota3);

    document.getElementById('resultado').textContent =
        `A média das notas é: ${media.toFixed(2)}`;
});