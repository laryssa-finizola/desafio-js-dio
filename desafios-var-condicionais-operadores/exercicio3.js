/* ELABORA UM ALGORITMO QUE CALCULE O QUE DEVE SER PAGO POR UM PRODUTO, CONSIDERANDO O PREÇO NORMAL 
DA ETIQUETA E A ESCOLHA DA CONDIÇÃO DE PAGAMENTO.
UTILIZE OS CÓDIGOS DA TABELA A SEGUIR PARA LER QUAL CONDIÇÃO DE PAGAMENTO ESCOLHIDA E EFETUAR O CÁLCULO

CONDIÇÃO DE PAGAMENTO: 
- Á VISTA DÉBITO: recebe 10% de desconto ( forma 1)
- à VISTA DINHEIRO OU PIX, RECEBE 15% DE DESCONTO(forma 2)
- EM DUAS VEZES, PREÇO NORMAL SEM JUROS(forma 3)
- ACIMA DE DUAS VEZES, PREÇO NORMAL + JUROS DE 10%(forma 4)
*/

let precoProduto = 100;
let modoDePagamento = 4;

if ( modoDePagamento === 1){
    console.log(precoProduto - (precoProduto * 0.1));
} else if(modoDePagamento === 2){
    console.log(precoProduto - (precoProduto * 0.15));
} else if(modoDePagamento === 3){
    console.log(precoProduto);
} else {
    console.log(precoProduto + (precoProduto * 0.1));
}

