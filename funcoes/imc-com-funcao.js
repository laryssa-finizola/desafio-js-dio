function calcularIMC(peso, altura){
    return peso * Math.pow(altura, 2);
}

function classificacaoIMC(imc){
    if (imc < 18.5){
        return ('abaixo do peso');
    } else if (imc > 18.5 && imc < 25){
        return ('peso normal');
    } else if (imc >= 25 && imc < 30){
        return ('acima do peso');
    } else if(imd = 30 && imc < 40){
        return ('obesidade');
    } else {
       return ('obesidade grave');
    }

}


function main(){
    const peso = 80;
    const altura = 1.80

    const imc = calcularIMC(peso, altura)
    console.log(classificacaoIMC(imc))
}

main();