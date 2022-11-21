const io = require('./io')

let posicaoFibonacci = io.readInt()
let array = Array(posicaoFibonacci).fill(0)

let descobrirNumFibonacci = function(valorAcumulado, elemento, posicao, vetor){
    if(posicao <= 1){
        vetor[posicao] = valorAcumulado
        return  valorAcumulado
    }
    vetor[posicao] = vetor[posicao - 1] + vetor[posicao - 2]
    return vetor[posicao]
}

let numFibonacci = array.reduce(descobrirNumFibonacci, 1)

io.write(numFibonacci)