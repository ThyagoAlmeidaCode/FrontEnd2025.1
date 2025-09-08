 // Menu Dropdown
 function toggleDropdown() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}

// Fechar o dropdown se clicar fora dele
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Validação de Formulário
function validateForm() {
    let isValid = true;
    
    // Validar nome
    const name = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    if (name.value.trim() === "") {
        nameError.style.display = "block";
        isValid = false;
    } else {
        nameError.style.display = "none";
    }
    
    // Validar email
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        emailError.style.display = "block";
        isValid = false;
    } else {
        emailError.style.display = "none";
    }
    
    // Validar mensagem
    const message = document.getElementById("message");
    const messageError = document.getElementById("messageError");
    if (message.value.trim() === "") {
        messageError.style.display = "block";
        isValid = false;
    } else {
        messageError.style.display = "none";
    }
    
    if (isValid) {
        alert("Formulário enviado com sucesso!");
        return true;
    } else {
        return false;
    }
}

// Carrossel de Imagens
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const carouselInner = document.getElementById('carouselInner');
const carouselControls = document.getElementById('carouselControls');

// Criar indicadores
slides.forEach((_, i) => {
    const indicator = document.createElement('button');
    indicator.addEventListener('click', () => goToSlide(i));
    carouselControls.appendChild(indicator);
});

// Inicializar primeiro indicador como ativo
document.querySelector('.carousel-controls button').classList.add('active');

function goToSlide(n) {
    currentSlide = n;
    carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Atualizar indicadores
    document.querySelectorAll('.carousel-controls button').forEach((btn, i) => {
        btn.classList.toggle('active', i === currentSlide);
    });
}

// Avançar slides automaticamente
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    goToSlide(currentSlide);
}, 5000);

// Simular AJAX - Carregar conteúdo dinâmico
function loadNewContent() {
    const newsContainer = document.getElementById('newsContainer');
    const refreshBtn = document.querySelector('.refresh-btn');
    
    // Simular loading
    const originalText = refreshBtn.innerHTML;
    refreshBtn.innerHTML = '<span>⏳</span> Carregando...';
    refreshBtn.disabled = true;
    
    // Simular requisição AJAX com setTimeout
    setTimeout(() => {
        // Adicionar novas notícias
        const newNews = [
            {
                title: "Web Components ganham popularidade",
                content: "Cada vez mais desenvolvedores adotam Web Components para criar elementos reutilizáveis."
            },
            {
                title: "Node.js 18 traz novidades",
                content: "A nova versão LTS do Node.js inclui melhorias de performance e novas APIs."
            }
        ];
        
        newNews.forEach(news => {
            const newsItem = document.createElement('div');
            newsItem.className = 'news-item';
            newsItem.innerHTML = `
                <h4>${news.title}</h4>
                <p>${news.content}</p>
            `;
            newsContainer.prepend(newsItem);
        });
        
        // Restaurar botão
        refreshBtn.innerHTML = originalText;
        refreshBtn.disabled = false;
        
        // Mostrar mensagem de sucesso
        const notification = document.createElement('div');
        notification.style = "background: #d4edda; color: #155724; padding: 10px; border-radius: 5px; margin-top: 10px;";
        notification.textContent = "Novas notícias carregadas com sucesso!";
        newsContainer.parentNode.insertBefore(notification, newsContainer.nextSibling);
        
        // Remover notificação após 3 segundos
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }, 1500);
}