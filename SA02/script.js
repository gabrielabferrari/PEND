let icone = document.querySelector("#modoEscuro");

icone.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        icone.classList.replace("bi-moon", "bi-sun");
    } else {
        icone.classList.replace("bi-sun", "bi-moon");
    }

});