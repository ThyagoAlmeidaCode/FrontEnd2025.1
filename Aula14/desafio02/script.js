/* A função permite afrupar determinadas tarefas 
    Toda função tem:
        - Um nome
        - Um conjunto de parâmetros
        - Um conjunto de instruções
        - Começa sempre com a palavra function

    Para criar uma função é necesario que tenha o nome do primo que assiste chaves
*/

/* Cria a funnção */
/* function soma(){
    return 3 + 2;
} */


/* function multiplicar(valor_um, valor_dois){
    return valor_um * valor_dois */
    
/* } */
/* Chama a funcao */
/* document.getElementById('mensagem').innerText = multiplicar(120,5)
 */

/* 
    Desafio 02: 
    Criar uma pagina onde o usuario digite um numero e mostre na tela a tabuada desse numero(Multiplicar)

*/

function tabuada(){
    let valorTabuada = document.getElementById('numero').value;
    let resultado = document.getElementById('mensagem');

    for(let i = 1; i <= 10; i++){
        resultado.innerText += `${valorTabuada}  x ${i} = ${i * valorTabuada} \n`;
    }
}


