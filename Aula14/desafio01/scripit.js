/* Desafio 01:
    Crie uma pagina que. ao clicar em um botão mostre os numeros de 1 a 10 na tela 
*/

document.getElementById('botao').addEventListener('click',() => {
    let valor = document.getElementById('numero').value;

    for(let i = 1; i <= valor; i++){
        document.getElementById('mensagem').innerText += `${i}`;
    }
})