const icone = document.querySelector("#modoEscuro");
const clima = document.querySelector("#clima");
const dolar = document.querySelector("#dolar");
const euro = document.querySelector("#euro");
const bitcoin = document.querySelector("#bitcoin");


icone.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        icone.classList.replace("bi-moon", "bi-sun");
    } else {
        icone.classList.replace("bi-sun", "bi-moon");
    }

});

async function carregarClima(latitude, longitude) {
    try {
        const resposta = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code&timezone=auto`
        );
        const dados = await resposta.json();
        const temperatura = dados.current.temperature_2m;
        const umidade = dados.current.relative_humidity_2m;
        const codigo = dados.current.weather_code;

        let descricao = "";

        if (codigo === 0) {
            descricao = "☀️ Céu limpo";
        } else if (codigo === 1 || codigo === 2 || codigo === 3) {
            descricao = "⛅ Parcialmente nublado";
        } else if (codigo === 45 || codigo === 48) {
            descricao = "🌫️ Neblina";
        } else if (codigo === 61 || codigo === 63 || codigo === 65) {
            descricao = "🌧️ Chuva";
        } else if (codigo === 71 || codigo === 73 || codigo === 75) {
            descricao = "❄️ Neve";
        } else if (codigo === 95) {
            descricao = "⛈️ Tempestade";
        } else {
            descricao = "Clima atualizado";
        }
        clima.innerHTML = `
            <p>
                <strong> Sua localização</strong><br>
                🌡️ ${temperatura}°C • 💧 ${umidade}%<br>
                ${descricao}
            </p>
        `;
    } catch (erro) {
        clima.innerHTML = "<p>Erro ao carregar clima.</p>";
        console.log("Erro:", erro);
    }
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        function (posicao) {
            const latitude = posicao.coords.latitude;
            const longitude = posicao.coords.longitude;
            carregarClima(latitude, longitude);
        },
        function () {
            clima.innerHTML = "<p> Localização não autorizada.</p>";
        }
    );

} else {
    clima.innerHTML = "<p>Erro em buscar a localização.</p>";
}

console.log("Script funcionando!");

async function carregarCotacoes() {
    try {

        const resposta = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL");
        const dados = await resposta.json();

        function montarCotacao(valor, variacao) {

            const classe = Number(variacao) >= 0 ? "alta" : "queda";
            const seta = Number(variacao) >= 0 ? "bi-arrow-up-short" : "bi-arrow-down-short";

            return `R$ ${valor}
            <span class="${classe}">
                <i class="bi ${seta}"></i>
                ${Math.abs(Number(variacao)).toFixed(2)}%
            </span>`;
        }

        dolar.innerHTML = montarCotacao(
            Number(dados.USDBRL.bid).toFixed(2),
            dados.USDBRL.pctChange
        );

        euro.innerHTML = montarCotacao(
            Number(dados.EURBRL.bid).toFixed(2),
            dados.EURBRL.pctChange
        );

        bitcoin.innerHTML = montarCotacao(
            Number(dados.BTCBRL.bid).toLocaleString("pt-BR", { maximumFractionDigits: 0 }),
            dados.BTCBRL.pctChange
        );

    } catch (erro) {

        console.log("Erro:", erro);

        dolar.textContent = "Erro";
        euro.textContent = "Erro";
        bitcoin.textContent = "Erro";
    }
}

carregarCotacoes();

