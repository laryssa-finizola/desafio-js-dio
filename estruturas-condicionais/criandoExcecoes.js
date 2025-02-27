// criando um código com else if

let numero = 90;
let numeroDivisivelPor5 = (numero % 5) === 0;

//estruturas condicionais é quando tentamos ver se um elemento é ou não verdadeiro
if (numero === 0){
    console.log('O número é inválido!');
} else if (numeroDivisivelPor5 == true) {
    console.log('O número é divisivél por 5');
} else{
    console.log('O número não é divisivél por 5');
}