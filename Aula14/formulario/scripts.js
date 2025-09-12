/* Conectar ao Formulario */
document.getElementById('meuFormulario').addEventListener('submit', (event) => {
    /* Evita q o formulario atualize */
    event.preventDefault();
    /* Chama a função */
    validaForm();
});


/* Cria a função de validação */

function validaForm() {
    let nome = document.getElementById('nome');
    /* let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value; */
    let mensagem = document.getElementById('mensagem');

    let valido = true;

    if (nome.value === ''){
        nome.classList.add('error');
        nome.classList.remove('success');
        mensagem.textContent = 'Por favor, insira seu nome';
        valido = false;
    }else{
        nome.classList.add('success');
        nome.classList.remove('error');        
    }

    if(valido){
        mensagem.textContent = 'Formulário enviado com sucesso!';
        mensagem.classList.add('success');
        mensagem.classList.remove('error');
    }

}