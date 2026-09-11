const canvas = document.querySelector("#canvas");
const contexto = canvas.getContext("2d");

//Desenhando uma linha
contexto.beginPath();//Começar um novo caminho/desenho
contexto.moveTo(10, 0);//Define onde a linha começa
contexto.lineTo(50, 200);//Define onde a linha termina
contexto.lineTo(200, 200);
contexto.stroke();//Desenha a linha

//Desenhando um retângulo
contexto.fillRect(50, 50, 150, 100);//Desenha um retângulo preenchido
                //x, y, largura, altura

contexto.strokeRect(250, 50, 150, 100);//Desenha um retângulo contornado

//Desenhando um círculo
contexto.beginPath();
contexto.arc(250, 250, 50, 0, Math.PI * 2);//x, y, raio, ângulo inicial, ângulo final
contexto.stroke();