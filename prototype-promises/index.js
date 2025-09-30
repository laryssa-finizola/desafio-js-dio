// leitura do arquivo "tarefas.csv"

const fs = require ('fs')
const promiseLeituraArquivo = fs.promises.readFile('tarefas.csv')

promiseLeituraArquivo
    .then( (arquivo) => arquivo.toString('utf8'))
    .then( (textoDoArquivo) => textoDoArquivo.split('\n').slice(1))
    .then( (linhasSemCabecalho) => linhasSemCabecalho.map((linha) => {
        const [nome, status] = linha.split(';')
        return {
            nome, 
            status: status === 'true'
        }
    }))
    .then((listaDeTarefasObj) => {console.log(listaDeTarefasObj)})
    .catch( (error) => {console.log(error)})


