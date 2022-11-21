const io = require('./io')

let a = 10
let b = 20
let auxiliar = a

a = b
b = auxiliar

io.write('valor de A:' + a)
io.write('valor de b:' + b)