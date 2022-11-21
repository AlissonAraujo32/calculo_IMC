const io = require('./io')

io.write('Escreva o numero total de eleitores')
const totalEleitores = io.readInt()
io.write(totalEleitores)

io.write('Escreva o números de votos brancos')
let totalVotosBrancos = io.readInt()

io.write('Total de votos nulos')
let totalVotosNulos = io.readInt()

io.write('Escreva o número de votos validos')
let totalVotosValidos = io.readInt()

let percentualVotosBrancos = totalVotosBrancos / totalEleitores * 100

let percentualVotosNulos = totalVotosNulos / totalEleitores * 100

let percentualVotosValidos = totalVotosValidos / totalEleitores * 100

io.write(`Percentual de votos brancos ${percentualVotosBrancos} %`)

io.write('Percentual de votos nulos')
io.write(percentualVotosNulos + '%')

io.write('Percentual de votos validos')
io.write(percentualVotosValidos + '%')