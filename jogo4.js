

const opcoes = document.querySelectorAll(".botao-opcao");

opcoes.forEach(function (opcao) {

    opcao.addEventListener("click", function () {

        opcoes.forEach(function (botao) {
            botao.disabled = true;
        });

        if (opcao.textContent === "hashtag/cerquilha (#) e ponto (.)") {

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
            <p>Você chegou ao final!</p>

            <a href="jogoPontuacao.html">
                <button class="avancar">Avançar</button>
            </a>
        `;

    } else {

        resultado.classList.add("erro");

        resultado.innerHTML = `
            <h2>VOCÊ ERROU!</h2>
            <p>Você chegou ao final!</p>

            <a href="jogoPontuacao.html">
                <button class="avancar">Avançar</button>
            </a>
        `;
    }

    document.body.appendChild(resultado);
}
