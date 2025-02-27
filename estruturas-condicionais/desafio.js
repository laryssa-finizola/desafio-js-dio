/* DESAFIO 2
FAÇA UM PROGRAMA QUE CALCULE O VALOR DE UMA VIAGEM

VARIAVEIS
1- PREÇO ETANOL
2- PREÇO GASOLINA
3- TIPO DE COMBUSTIVEL QUE ESTA NO CARRO
4- GASTO MEDIO DE COMBUSTIVEL POR  KM
5- DISTANCIA EM KM DA VIAGEM

IMPRIMIR NO CONSOLE O VALOR QUE SERÁ GASTO NA VIAGEM

*/

let precoEtanol = 3.00;
let precoGasolina = 5.00;
let tipo = 'gasolina'
let kmPorLitro = 11;
let gastoEtanolporKm = precoEtanol/kmPorLitro;
let gastoGasolinaPorKm = precoGasolina/kmPorLitro;
let distanciaTotal = 100;
let valorTotalGasto = 0;

if (tipo === 'etanol'){
    valorTotalGasto = gastoEtanolporKm*distanciaTotal;
} else if (tipo === 'gasolina'){
    valorTotalGasto = gastoGasolinaPorKm*distanciaTotal;
} else{
    console.log('Inválido.')
}

console.log(valorTotalGasto.toFixed(2));