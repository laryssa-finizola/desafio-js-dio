// exemplo promise assincrono


// exemplo com o assincronismo

const promiseDeNumeroQualquerAssinc  = new Promise( (resolve, rejected) => {
    setTimeout(() => {
        const numeroQualquer = parseInt(Math.random() * 100)
        resolve(numeroQualquer)
    }, 1000)
    
})
// existe tb uma possibilidade de aninhamento dessas estruturas 
promiseDeNumeroQualquerAssinc
    .then( (value) => {
        console.log(value)
        return value + 10
    })
    .then( (value) => {
        console.log(value)
    })
    .catch( (error) => {
        console.log(error)
    })
    .finally( () => {
        console.log("finished")
    })
