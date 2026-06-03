// script.js

// 1. Banco de Dados do Jogo (Perguntas e Respostas sobre o Agro Sustentável)
const perguntasQuiz = [
    {
        pergunta: "Qual das alternativas abaixo é um exemplo de prática sustentável no agronegócio?",
        opcoes: [
            "A) Retirar a vegetação nativa próxima a rios e nascentes.",
            "B) Uso de sensores e drones para aplicar recursos apenas onde é necessário.",
            "C) Realizar queimadas frequentes para limpar o solo de forma rápida.",
            "D) Irrigar plantações sem nenhum controle do consumo de água."
        ],
        correta: 1 // Alternativa B
    },
    {
        pergunta: "O que caracteriza o sistema ILPF (Integração Lavoura-Pecuária-Floresta)?",
        opcoes: [
            "A) O plantio exclusivo de uma única cultura na propriedade o ano todo.",
            "B) O uso intensivo de maquinário pesado sem descanso para a terra.",
            "C) A integração harmônica entre culturas agrícolas, criação de gado e árvores.",
            "D) A mecanização focada apenas na produção de grãos para exportação."
        ],
        correta: 2 // Alternativa C
    },
    {
        pergunta: "Qual é o principal benefício dos bioinsumos (defensivos biológicos) no campo?",
        opcoes: [
            "A) Substituir completamente o trabalho dos agricultores.",
            "B) Reduzir os custos de transporte de grãos pelas rodovias.",
            "C) Combater pragas protegendo a saúde do solo, dos rios e dos polinizadores.",
            "D) Aumentar o tempo de armazenamento dos produtos nos supermercados."
        ],
        correta: 3 // Alternativa D
    }
];

let perguntaAtualIndex = 0;
let pontuacao = 0;

// 2. Inicialização do Site
document.addEventListener("DOMContentLoaded", () => {
    carregarPergunta(perguntaAtualIndex);
    configurarModoEscuro();
    configurarNewsletter();
});

// 3. Função do Jogo Interativo (Quiz)
function carregarPergunta(index) {
    const perguntaTexto = document.getElementById("pergunta-texto");
    const opcoesContainer = document.getElementById("opcoes-container");
    const resultadoBox = document.getElementById("resultado-jogo");

