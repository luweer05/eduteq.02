

const opcoes = document.querySelectorAll(".botao-opcao");

opcoes.forEach(function (opcao) {

    opcao.addEventListener("click", function () {

        opcoes.forEach(function (botao) {
            botao.disabled = true;
        });

        if (opcao.textContent === "alert") {

            opcao.classList.add("certo");

            mostrarResultado(true);

        } else {

            opcao.classList.add("errado");

            mostrarResultado(false);
        }

    });

});


function mostrarResultado(acertou) {

    const resultado = document.createElement("div");

    resultado.classList.add("alerta");

    if (acertou) {

        resultado.classList.add("acerto");

        resultado.innerHTML = `
            <h2>VOCÊ ACERTOU!</h2>
            <p>Avance para a próxima level</p>

            <a href="jogo4.html">
                <button class="avancar">Avançar</button>
            </a>
        `;

    } else {

        resultado.classList.add("erro");

        resultado.innerHTML = `
            <h2>VOCÊ ERROU!</h2>
            <p>Não se preocupe, você consegue!</p>

            <a href="jogo4.html">
                <button class="avancar">Avançar</button>
            </a>
        `;
    }

    document.body.appendChild(resultado);
}