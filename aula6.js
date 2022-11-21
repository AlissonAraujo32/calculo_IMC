const io = require('./io')

let pesos = []
let i = 0

while(i < 6){
    io.write('Digite um peso:')
    let peso = io.readFloat()
    pesos.push(peso)
    i++
}

io.write(pesos)

let soma = pesos.reduce(function(acumulador, elemento){
    return acumulador + elemento
}, 0)
io.write(soma)

let media = soma / pesos.length

io.write(media)

if(media > 60){
    io.write('Maior que 60')
} else if(media < 60){
    io.write('Menor que 60')
} else{
    io.write('Igual a 60')
}