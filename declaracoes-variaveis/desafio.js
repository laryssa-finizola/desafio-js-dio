/* FAÇA UM  PROGRAMA PARA CALCULAR O VALOR DE UMA VIAGEM
VOCÊ TERÁ 3 VARIAVEIS:
A) PREÇO DO COMBUSTIVEL;
B) GASTO MÉDIO DE COMBUSTIVEL POR KM
C) DISTANCIA EM KM DA VIAGEM 

IMPRIMA NO CONSOLE O VALOR QUE SERÁ GASTO DE COMBUSTIVÉL PARA REALIZAR ESSA VIAGEM
*/

let precoCombustivel = 5.00;
const kmPorLitro = 11;
let gastoCombustivelPorKm = precoCombustivel / kmPorLitro;
const distanciaViagem = 140;

let gastoCombustivelTotal = gastoCombustivelPorKm * distanciaViagem;
console.log(gastoCombustivelTotal.toFixed(2));

//toFixed serve para o arredondamento de casas decimais.