const canvas = document.querySelector("#canvas");
const contexto = canvas.getContext("2d");

contexto.lineWidth = 14;
contexto.lineCap = "round";
contexto.lineJoin = "round";

// Cabeça
contexto.beginPath();
contexto.arc(200, 100, 35, 0, Math.PI * 2);
contexto.stroke();

// Corpo
contexto.beginPath();
contexto.moveTo(200, 135);
contexto.lineTo(200, 280);
contexto.stroke();

// Braço esquerdo 
contexto.beginPath();
contexto.moveTo(200, 135);
contexto.lineTo(145, 210);
contexto.lineTo(210, 245);
contexto.stroke();

// Braço direito 
contexto.beginPath();
contexto.moveTo(200, 135);
contexto.lineTo(260, 210);
contexto.lineTo(315, 145);
contexto.stroke();

// Perna esquerda
contexto.beginPath();
contexto.moveTo(200, 280);
contexto.lineTo(145, 350);
contexto.lineTo(145, 450);
contexto.stroke();

// Perna direita
contexto.beginPath();
contexto.moveTo(200, 280);
contexto.lineTo(260, 350);
contexto.lineTo(260, 450);
contexto.stroke();