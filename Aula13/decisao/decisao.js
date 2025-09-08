
/* If else */
let idade = 23;
let resultado = document.getElementById('resultado');

if (idade >= 18) {
    resultado.innerText = 'Maior de idade';
}else if(idade >= 13 && idade < 18){
    resultado.innerText = 'Adolescente';
}else{
    resultado.innerText = 'Menor de idade';
}

/* Switch */

let materia = 'Geografia';
let resultadoMateria = document.getElementById('materia');

switch(materia){
    case 'Português':
        resultadoMateria.innerText = 'Português';
        break;
    case 'Matemática':
        resultadoMateria.innerText = 'Matemática';
        break;
    case 'Geografia':
        resultadoMateria.innerText = 'Geografia';
        break;
    default:
        resultadoMateria.innerText = 'Materia nao encontrada';
}
/* Desafio: 
    Criar uma página onde o usuario digita uma nota de 0 a 10 e exiba se ele foi aprovado ou reprovado.
    Menor que 5 - Reprovado
    Entre 5 e 6.9 - Recuperacao
    Maior que 7 - Aprovado
 */

let nota = parseInt(prompt('Digite sua nota: '));
let resultadoNota = document.getElementById('resultadoNota');

if(nota < 5){
    resultadoNota.innerText = 'Reprovado';
}else if(nota >= 5 && nota <= 6.9){
    resultadoNota.innerText = 'Recuperacao';
}else if(nota >= 7 && nota <= 10){
    resultadoNota.innerText = 'Aprovado';    
}else{
    resultadoNota.innerText = 'Nota nao encontrada';
}






