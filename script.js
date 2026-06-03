// script.js

// 1. Dados fictícios das notícias (Simulando um banco de dados ou API)
const noticias = [
    {
        id: 1,
        titulo: "Tecnologia de precisão reduz uso de defensivos em 40% na safra atual",
        resumo: "Produtores adotam IA e drones para aplicar insumos apenas onde é necessário, protegendo o solo e os lençóis freáticos.",
        categoria: "tecnologia",
        data: "03/06/2026"
    },
    {
        id: 2,
        titulo: "Crédito Verde: Bancos liberam R$ 5 bilhões para propriedades sustentáveis",
        resumo: "Linhas de financiamento facilitadas estimulam fazendeiros a recuperar áreas degradadas e adotar o plantio direto.",
        categoria: "economia",
        data: "02/06/2026"
    },
    {
        id: 3,
        titulo: "Como a Integração Lavoura-Pecuária-Floresta (ILPF) está mudando o cenário nacional",
        resumo: "O sistema que une produção e conservação ambiental mostra que é possível dobrar a produtividade sem desmatar.",
        categoria: "sustentabilidade",
        data: "31/05/2026"
    },
    {
        id: 4,
        titulo: "Uso de bioinsumos cresce e se torna o principal aliado do produtor moderno",
        resumo: "Defensivos biológicos ganham espaço no mercado brasileiro, reduzindo a pegada de carbono do setor de grãos.",
        categoria: "tecnologia",
        data: "29/05/2026"
    }
];

// 2. Inicialização do sistema quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", () => {
    renderizarNoticias(noticias);
    configurarFiltros();
    configurarNewsletter();
    configurarModoEscuro();
});

// 3. Função para renderizar as notícias na tela
function renderizarNoticias(listaDeNoticias) {
    const container = document.getElementById("container-noticias");
    if (!container) return;

    container.innerHTML = ""; // Limpa o container

    if (listaDeNoticias.length === 0) {
        container.innerHTML = "<p class='sem-noticias'>Nenhuma notícia encontrada para esta categoria.</p>";
        return;
    }

    listaDeNoticias.forEach(noticia => {
        const card = document.createElement("article");
        card.classList.add("card-noticia");
        
        card.innerHTML = `
            <span class="tag-categoria">${noticia.categoria.toUpperCase()}</span>
            <h3>${noticia.titulo}</h3>
            <p>${noticia.resumo}</p>
            <div class="meta-noticia">
                <span class="data">${noticia.data}</span>
                <a href="#" class="btn-ler-mais">Ler matéria completa →</a>
            </div>
        `;
        container.appendChild(card);
    });
}

// 4. Função de filtragem por categoria
function configurarFiltros() {
    const botoesFiltro = document.querySelectorAll(".btn-filtro");

    botoesFiltro.forEach(botao => {
        botao.addEventListener("click", (e) => {
            // Remove classe ativa de todos e adiciona no clicado
            botoesFiltro.forEach(b => b.classList.remove("ativo"));
            e.target.classList.add("ativo");

            const categoriaSelecionada = e.target.getAttribute("data-categoria");

            if (categoriaSelecionada === "todas") {
                renderizarNoticias(noticias);
            } else {
                const noticiasFiltradas = noticias.filter(n => n.categoria === categoriaSelecionada);
                renderizarNoticias(noticiasFiltradas);
            }
        });
    });
}

// 5. Simulação de inscrição na Newsletter
function configurarNewsletter() {
    const form = document.getElementById("form-newsletter");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const emailInput = document.getElementById("email-input");
        
        if (emailInput && emailInput.value) {
            alert(`Obrigado! O email ${emailInput.value} foi cadastrado para receber nossas análises sobre o Agro Sustentável.`);
            emailInput.value = ""; // Limpa o campo
        }
    });
}

// 6. Funcionalidade extra: Alternador de Modo Escuro (Dark Mode)
function configurarModoEscuro() {
    const btnToggle = document.getElementById("btn-dark-mode");
    if (!btnToggle) return;

    btnToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        
        // Altera o texto do botão conforme o modo
        if (document.body.classList.contains("dark-theme")) {
            btnToggle.textContent = "☀️ Modo Claro";
        } else {
            btnToggle.textContent = "🌙 Modo Escuro";
        }
    });
}
