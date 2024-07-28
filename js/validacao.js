const mensagemEntre = document.querySelector('.entre');
const mensagemMaiorMenor = document.querySelector('.mensagem__maior-menor');
const mensagemMaiorMenor_titulo = document.querySelector('.mensagem__maior-menor__titulo');
const mensagemIcone = document.querySelector('.mensagem__maior-menor__icone');

function verificarOValor(chute) {
    const numeroChute = +chute;

    // Acerto
    if (numeroChute === numeroSecreto) {
        boxTitulo.textContent = 'Você acertou!';
        box.innerHTML = '<i class="fa-solid fa-gift fa-xm"></i>';
        mensagemEntre.textContent = 'Parabéns! Você acertou o número secreto!';
        
        mensagemMaiorMenor.classList.add('new-game');
        mensagemMaiorMenor.addEventListener('click', function() {
            location.reload(); // Recarrega a página
        });

        mensagemMaiorMenor_titulo.textContent = 'jogar novamente';
        mensagemIcone.classList.remove('fa-microphone-lines', 'fa-circle-down', 'fa-circle-up');
        mensagemIcone.classList.add('fa-square-plus');

        // Parar o reconhecimento de voz
        window.gameWon = true; // Definido globalmente para checar na voz.js
        pararReconhecimento();
        
    } else if (numeroChute > numeroSecreto) {
        mensagemIcone.classList.remove('fa-microphone-lines', 'fa-circle-up');
        mensagemIcone.classList.add('fa-circle-down');
        mensagemMaiorMenor_titulo.textContent = 'O número secreto é menor';
    } else {
        mensagemIcone.classList.remove('fa-microphone-lines', 'fa-circle-down');
        mensagemIcone.classList.add('fa-circle-up');
        mensagemMaiorMenor_titulo.textContent = 'O número secreto é maior';
    }

    // Valor não é um número
    if (ValorInvalido(numeroChute)) {
        mensagemEntre.textContent = `VALOR INVÁLIDO: VOCÊ PRECISA FALAR UM NÚMERO ENTRE ${menorValor} E ${maiorValor}!`;
        box.innerHTML = '<i class="fa-solid fa-circle-exclamation fa-xm"></i>';
        mensagemMaiorMenor_titulo.textContent = 'Diga um número!';
        mensagemIcone.classList.remove('fa-circle-down', 'fa-circle-up');
        mensagemIcone.classList.add('fa-microphone-lines');
    }

    // Valor maior que 1000 ou menor que 1 - erro
    if (ValorMaiorOuMenor(chute)) {
        mensagemEntre.innerHTML = `VALOR INVÁLIDO: O NÚMERO SECRETO PRECISA ESTAR ENTRE ${menorValor} E ${maiorValor}!`;
        box.innerHTML = '<i class="fa-solid fa-circle-exclamation fa-xm"></i>';
        mensagemMaiorMenor_titulo.textContent = 'Diga um número!';
        mensagemIcone.classList.remove('fa-circle-down', 'fa-circle-up');
        mensagemIcone.classList.add('fa-microphone-lines');
    }
}

function ValorInvalido(numeroChute) {
    return Number.isNaN(numeroChute);
}

function ValorMaiorOuMenor(chute) {
    return chute > maiorValor || chute < menorValor;
}