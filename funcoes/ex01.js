function exibirNome(){
    console.log("Laryssa")
}

// exemplo 2: com parametro
function mostraNome(nome){
    console.log("Seu nome é " + nome)
}

//com return
function multiplica(a,b){
    return a * b;
}

function incrementarJuros(valor, percentualJuros){
    const valorAcrescimo = (percentualJuros/100) * valor
    return valor + valorAcrescimo
}
exibirNome();
mostraNome("Ana")
mostraNome("Maria")

const mult = multiplica(2,4)
console.log(mult)

console.log("valor com juros = " + incrementarJuros(100,10))