/* Desafio:
    Criar um programa que:
        1 - Exiba a soma, subtraçao, multimplicação e a divisão de dois numero informados pelo usuario:

        2 - O resultado de cada operação deve aparecer na pagina HTML
*/

let valor_um =  Number(prompt("Digite o primeiro valor: "));
let valor_dois = Number(prompt("Digite o segundo valor: "));

/* console.log(typeof valor_um);
console.log(typeof valor_dois);
 */
/* let soma = parseInt(valor_um) + parseInt(valor_dois) */ 
let soma = valor_um + valor_dois
let subtracao = parseInt(valor_um) - parseInt(valor_dois) 
//let subtracao = valor_um - valor_dois
let multiplicacao = valor_um * valor_dois
let divisao = valor_um / valor_dois

console.log(typeof divisao);

document.getElementById("soma").innerText = "Soma: " + soma;
document.getElementById("subtracao").innerText = "Subtracao: " + subtracao;
document.getElementById("multiplicacao").innerText = "Multiplicacao: " + multiplicacao;
document.getElementById("divisao").innerText = "Divisao: " + divisao;
