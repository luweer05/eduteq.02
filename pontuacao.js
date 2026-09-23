const perguntas = document.querySelectorAll('.opcoes');
const paginaAtual = window.location.pathname.split('/').pop() || 'jogo.html';
const numeroPerguntaAtual = Number(paginaAtual.match(/jogo(\d+)\.html/)?.[1] || 1);

function obterPontuacao() {
	return Number(localStorage.getItem('pontuacaoQuiz')) || 0;
}

function registrarResposta(botao, numeroPergunta) {
	const chave = `pergunta${numeroPergunta}Respondida`;

	if (localStorage.getItem(chave)) {
		return;
	}

	localStorage.setItem(chave, 'true');

	if (botao.dataset.correta === 'true') {
		localStorage.setItem('pontuacaoQuiz', String(obterPontuacao() + 1));
	}
}

perguntas.forEach((grupo) => {
	grupo.querySelectorAll('.botao-opcao').forEach((botao) => {
		botao.addEventListener('click', () => {
			registrarResposta(botao, numeroPerguntaAtual);
			grupo.querySelectorAll('.botao-opcao').forEach((opcao) => {
				opcao.disabled = true;
			});
			botao.classList.add('selecionado');
		});
	});
});

function mostrarTela(tipo) {
	const overlay = document.getElementById('meuOverlay');
	const tela = document.getElementById(tipo === 'acerto' ? 'telaAcerto' : 'telaErro');

	if (!overlay || !tela) {
		return;
	}

	overlay.style.display = 'flex';
	tela.style.display = 'block';
}

function fecharTela() {
	const overlay = document.getElementById('meuOverlay');

	if (overlay) {
		overlay.style.display = 'none';
	}
}

function reiniciarQuiz() {
	localStorage.removeItem('pontuacaoQuiz');

	for (let indice = 1; indice <= 4; indice += 1) {
		localStorage.removeItem(`pergunta${indice}Respondida`);
	}

	window.location.href = 'jogo.html';
}

if (paginaAtual === 'jogoPontuacao.html') {
	const pontuacao = obterPontuacao();
	const resultado = document.getElementById('resultado');

	if (resultado) {
		resultado.textContent = `Você fez ${pontuacao} de 4 pontos!`;
	}

	mostrarTela(pontuacao === 4 ? 'acerto' : 'erro');
}
