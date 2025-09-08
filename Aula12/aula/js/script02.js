/* 

    Variáveis: São como caixa onde podemos armazenar dados.
    Porque variável: Por que o conteúdo pode mudar (Variaveis) 

    Tipos de variáveis: 
        - Var
        - Let
        - Const

*/

/* Forma antiga (var) */
/* Palavra var + nome_variavel = conteudo da variavel */
var numero = 10;

/* Forma atual (let) */
/* Palavra let + nome_variavel = conteudo da variavel */
let nome = "Maria";

/* Exebição console */
console.log("O valor é: " + numero)
console.log("O nome é: " + nome)

/* Exeibição na tela */
document.getElementById("mensagem").innerText = "O valor é: " + numero + " e o nome é: " + nome

/* Tipos basico de variveis 
    String - Texto
    Number - Numero (inteiros, flutuantes)
    Boolean - Verdadeiro ou Falso

*/
let valor_um =  50; /* Number */
let valor_dois = "50"; /* String */
document.getElementById("mensagem").innerText = "O valor 1 é: " + valor_um + " e o valor 2 é: " + valor_dois

console.log(typeof valor_dois) /* Para saber o tipo da variavel */

let idade = prompt("Informe sua idade");
document.getElementById("mensagem").innerText = "Sua idade é: " + idade

/* Constante */
const ano = 2025;
document.getElementById("mensagem").innerText = "O ano atual é: " + ano


/* Desafio */
/* Criar um codigo js que altera a cor de um paragrafo */