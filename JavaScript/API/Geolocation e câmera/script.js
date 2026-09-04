// Abrir câmera quando clicar no botão
document.getElementById("iniciar").addEventListener("click", function () {

    navigator.mediaDevices.getUserMedia({
        video: true
    })

    .then(function (stream) {

        var video = document.querySelector("#camera");
        video.srcObject = stream;

    })

    .catch(function () {

        alert("Não foi possível acessar a câmera.");

    });

});

// Obter localização
navigator.geolocation.getCurrentPosition(

    function (posicao) {

        document.getElementById("latitude").textContent = "Latitude: " + posicao.coords.latitude;

        document.getElementById("longitude").textContent = "Longitude: " + posicao.coords.longitude;

        document.getElementById("precisao").textContent = "Precisão: " + posicao.coords.accuracy +   " metros";

    },

    function () {
        alert("Não foi possível obter a localização.");
    }

);

// Capturar foto e gerar comprovante
let capturar = document.getElementById("capturar");

capturar.addEventListener("click", function () {

    let video = document.getElementById("camera");
    let canvas = document.getElementById("canvas");
    let foto = document.getElementById("foto");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    canvas.getContext("2d").drawImage(video, 0, 0);

    foto.src = canvas.toDataURL("image/png");

    let nome = document.getElementById("nome").value;
    let nascimento = document.getElementById("dataNascimento").value;

    document.getElementById("rNome").textContent = "Nome: " + nome;
    document.getElementById("rNascimento").textContent =
        "Data de nascimento: " + nascimento;

    document.getElementById("resultado").style.display = "block";

});