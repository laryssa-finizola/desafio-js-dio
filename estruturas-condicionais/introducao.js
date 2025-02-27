// boolean - true or false

camisaAzul = true;
camisaAzul = false;

// para ser numero par precisa ser multiplo de 2
let numero = 0;

// para saber se é par, é necessário dividir o número por 2 e verificar se vai ter resto ou não

let eNumeroPar = (numero % 2) === 0; //% é um operador para representação do resto
// quando colocado 2 iguais (== 0), o programa desconsidera o tipo de variavel que estamos tratando, eu posso simples mente mencionar que (numero % 2) === '0'
//quando há 3 iguais há comparação considerando o tipo
console.log(eNumeroPar);

//estruturas condicionais é quando tentamos ver se um elemento é ou não verdadeiro
if (eNumeroPar == true){
    console.log('O número é par');
} else {
    console.log('O número é ímpar');
}