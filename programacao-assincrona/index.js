// op assincrona ---> op que ainda não terminou 


/* Promises
*  surge da seguinte ideia: "eu peço pra executar algo,
*  e surge a PROMESSA que em algum momento a resposta vai ser retornada"
*  essa resposta pode conter 3 estados: pending, fulfilled e rejected. 
*/

// sintaxe basica 
new Promise((resolve, rejected) =>{
    //bloco de codigo
    // resolve se der tudo ok
    resolve()

    // rejected se nao 
    rejected()
})

// essa promise não precisa ser necessariamente uma operacao assincrona, segue o exemplo


const promiseDeNumeroQualquer  = new Promise( (resolve, rejected) => {
    const numeroQualquer = parseInt(Math.random() * 100)
    resolve(numeroQualquer)
})

// MODOS DE RETORNO : catch, then, finally ==> baseia-se na mesma estrutura do try/catch

promiseDeNumeroQualquer
    .then( (value) => {
        console.log(value)
    })
    .catch( (error) => {
        console.log(error)
    })
    .finally( () => {
        console.log("finished")
    })


// exemplo com o assincronismo

const promiseDeNumeroQualquerAssinc  = new Promise( (resolve, rejected) => {
    setTimeout(() => {
        const numeroQualquer = parseInt(Math.random() * 10000000)
        resolve(numeroQualquer)
    }, 1000)
    
})

promiseDeNumeroQualquer
    .then( (value) => {
        console.log(value)
    })
    .catch( (error) => {
        console.log(error)
    })
    .finally( () => {
        console.log("finished")
    })

