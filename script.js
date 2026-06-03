// script.js

// Banco de dados de perguntas do Jogo do Agrinho
const perguntasQuiz = [
    {
        pergunta: "Qual das alternativas abaixo é um exemplo de prática sustentável no agro?",
        opcoes: [
            "A) Desmatar áreas ciliares para aumentar o pasto.",
            "B) Uso de drones para aplicar insumos apenas onde há necessidade.",
            "C) Queimar a palha da cana para limpar o terreno rapidamente.",
            "D) Utilizar água sem controle nos sistemas de irrigação."
        ],
        correta: 1 // Corresponde à alternativa B
    },
    {
        pergunta: "O que significa a sigla ILPF na agricultura moderna?",
        opcoes: [
            "A) Inovação de Lavouras Pró-Faturamento.",
            "B) Irrigação de Lavouras com Plantas Flutuantes.",
            "C) Integração Lavoura-Pecuária-Floresta.",
            "D) Indústria de Limpeza de Produtos Fitossanitários."
        ],
        correta: 2 // Corresponde à alternativa C
    }
];

let perguntaAtualIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    configurarModoEscuro();
    configurarNewsletter();
    carregarPergunta(perguntaAtualIndex);
});

// Função para gerar o jogo na tela
function carregarPergunta(index) {
    const perguntaTexto = document.getElementById("pergunta-texto");
    const opcoesContainer = document.getElementById("opcoes-container");
    const resultadoBox = document.getElementById("resultado-jogo");

    if (!perguntaTexto || !opcoesContainer) return;

    // Se as perguntas acabarem
    if (index >= perguntasQuiz.length) {
        perguntaTexto.textContent = "🏆 Parabéns! Você concluiu o Desafio do Agrinho!";
        opcoesContainer.innerHTML = "";
        resultadoBox.className = "acertou";
        resultadoBox.textContent = "Compartilhe seu aprendizado e ajude a construir um futuro sustentável!";
        return;
    }

    const dadosPergunta = perguntasQuiz[index];
    perguntaTexto.textContent = dadosPergunta.pergunta;
    opcoesContainer.innerHTML = "";
    resultadoBox.className = "escondido"; // Esconde o resultado da pergunta anterior

    // Cria os botões para cada alternativa
    dadosPergunta.opcoes.forEach((opcao, idx) => {
        const botao = document.createElement("button");
        botao.classList.add("btn-opcao");
        botao.textContent = opacity = opcao;
        
        botao.addEventListener("click", () => verificarResposta(idx, dadosPergunta.correta));
        opcoesContainer.appendChild(botao);
    });
}

// Verifica se o usuário clicou no botão certo
function verificarResposta(selecionada, correta) {
    const resultadoBox = document.getElementById("resultado-jogo");
    resultadoBox.classList.remove("escondido");

    if (selecionada === correta) {
        resultadoBox.className = "acertou";
        resultadoBox.textContent = "Resposta Correta! 🌱 Avançando...";
        
        // Espera 2 segundos e vai para a próxima pergunta
        perguntaAtualIndex++;
        setTimeout(() => {
            carregarPergunta(perguntaAtualIndex);
        }, 2000);
    } else {
        resultadoBox.className = "errou";
        resultadoBox.textContent = "Ops, resposta incorreta! Tente analisar o texto do artigo acima e tente novamente.";
    }
}

// Configuração do Modo Escuro
function configurarModoEscuro() {
    const btnToggle = document.getElementById("btn-dark-mode");
    if (!btnToggle) return;

    btnToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        btnToggle.textContent = document.body.classList.contains("dark-theme") ? "☀️ Modo Claro" : "🌙 Modo Escuro";
    });
}

// Configuração da Newsletter
function configurarNewsletter() {
    const form = document.getElementById("form-newsletter");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const emailInput = document.getElementById("email-input");
        if (emailInput && emailInput.value) {
            alert(`Obrigado! O e-mail ${emailInput.value} foi cadastrado.`);
            emailInput.value = "";
        }
    });
}
