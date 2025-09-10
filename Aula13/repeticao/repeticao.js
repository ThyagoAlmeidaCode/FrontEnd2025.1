

/* for (let i = 0; i < numero; i++){
    document.getElementById('repeticao').innerHTML += "Volta ao mundo nº: " + i + "<br>";
} */

/* while (numero < 10){
    document.getElementById('repeticao').innerHTML += "Volta ao mundo nº: " + numero + "<br>";
    numero++; *//* Incrementando */
/* } */


let numero = 0;
do {
    document.getElementById('repeticao').innerHTML += "Volta ao mundo nº: " + numero + "<br>";
    numero++; /* Incrementando */
} while (numero < 10);

/* A diferença entre o while e o do while eh que o do while executa o bloco de codigo pelo menos uma vez */

/* 
    Desafio 01:
    Crie uma pagina que. ao clicar em um botão mostre os numeros de 1 a 10 na tela

    Desafio 02: 
    Criar uma pagina onde o usuario digite um numero e mostre na tela a tabuada desse numero(Multiplicar)

*/