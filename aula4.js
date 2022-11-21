const io = require('./io')
/*
function funcaoNumeros(arrayNumeros){
    let somaDosPares = 0
    let i = 0
    // filter: filtra os elementos e retorna true ou falso
    let numerosImpares = arrayNumeros.filter(function (numero){
        if(numero % 2 !== 0){
            return true
        }
        return false
    })
    // forEach: passa por todas as posições do array e realiza um calculo
    arrayNumeros.forEach(function (numero){
        if(numero % 2 === 0){
            somaDosPares = somaDosPares + numero
        }
    })

    io.write(numerosImpares)
    io.write(somaDosPares)

    while(i < somaDosPares){
        io.write('JavaScript é muito bom')
        i++
    }

}

let numeros = [1, 2, 3, 4, 5]
funcaoNumeros(numeros)
*/

// EXERCICIO 2 / preço com desconto

// map altera o valor do elemento de uma array
function aplicaDesconto(arrayPrecos){
    arrayPrecos = arrayPrecos.map(function(preco){
        if(preco > 500){
            return preco -(preco * (15/100))
        }
        return preco
    })
    io.write(arrayPrecos)
}

let vetor = [1000, 40, 340, 501, 500, 1093, 245, 21]
aplicaDesconto(vetor)