// Função para mostrar alerta
function showAlert() {
    alert("Isso é um alerta gerado por JavaScript! Esta é a interatividade que o JS proporciona.");
}

// Função para mostrar/esconder texto
function toggleText() {
    const textElement = document.getElementById('toggleText');
    const buttonElement = event.target;
    
    if (textElement.classList.contains('hidden')) {
        textElement.classList.remove('hidden');
        buttonElement.textContent = 'Esconder Texto';
    } else {
        textElement.classList.add('hidden');
        buttonElement.textContent = 'Mostrar Texto';
    }
}

// Função para incrementar contador
let count = 0;
function incrementCounter() {
    count++;
    const counterElement = document.getElementById('clickCounter');
    counterElement.textContent = count + (count === 1 ? ' clique' : ' cliques');
}