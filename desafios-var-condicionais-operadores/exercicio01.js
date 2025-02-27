/* 
    faça um algoritmo que verifique 3 notas tirada por um determinado em um semestre da faculdade e imprima a média e a classificação
    de acordo com a tabela abaixo:
     
    classificacao: 
    - media menor que 5, reprovado 
    - media entre 5 e 7, recuperação
    - media acima de 7, aprovado 
*/


let nota_1 = 3.0;
let nota_2 = 2.3;
let nota_3 = 3.0;

media = (nota_1 + nota_2 + nota_3) / 2;
console.log(media);

if (media < 5 ){
    console.log('O aluno foi reprovado');
} else if (media >= 5 && media <= 7){
    console.log('Recuperação');
} else{
    console.log('Parabéns! Aprovado por média');
}