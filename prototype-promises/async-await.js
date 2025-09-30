// consiste em uma forma mais dinamica de executar o then  / catch / finally 

// forma mais legivel de escrita e manipulação das promises

//leitura do arquivo via path
const fs = require ('fs')
const path = require ('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')


async function buscarArquivo() {
    try{
        const arquivo = await fs.promises.readFile(filePath) //abstrai a manipulacao do promise
        const textoDoArquivo = arquivo.toString('utf8')
        console.log(textoDoArquivo)
    } catch (error){
        console.log(error)
    } finally {
        console.log('finalizado')
    }
    
}

buscarArquivo()