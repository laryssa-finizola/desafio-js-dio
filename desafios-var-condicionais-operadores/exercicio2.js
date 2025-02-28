/* O IMC é um critério da OMS para dar indicação sobre a 
condição de peso de uma pessoa adulta

formula do imc: 
imc = peso / ( altura* altura)

elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a 
tabela abaixo: 

condições: 
- abaixo de 18.5: abaixo do peso
entre 18.5 e 25: peso normal
entre 25 e 30: acima do peso
entre 30 e 40: obeso
acima de 40: obesidade grave

*/

let peso = 80;
let altura = 1.68;

let imc = peso / Math.pow(altura,2);
console.log(imc.toFixed(2));

//classificando...
if (imc < 18.5){
    console.log('abaixo do peso');
} else if (imc > 18.5 && imc < 25){
    console.log('peso normal');
} else if (imc >= 25 && imc < 30){
    console.log('acima do peso');
} else if(imd = 30 && imc < 40){
    console.log('obesidade');
} else {
    console.log('obesidade grave');
}