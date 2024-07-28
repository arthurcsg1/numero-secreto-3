window.SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition;

const numero = document.querySelector('.mensagem__numero-box');
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

const boxTitulo = document.querySelector('.mensagem__numero-titulo');
const box = document.querySelector('.mensagem__numero-box');

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    chute = e.results[0][0].transcript;
    box.innerHTML = chute;
    verificarOValor(chute);
}

recognition.addEventListener('end', () => {
    if (!window.gameWon) {
        recognition.start(); // Reinicia apenas se o jogo não foi ganho
    }
});

// Função para parar o reconhecimento de voz
function pararReconhecimento() {
    recognition.stop();
}



