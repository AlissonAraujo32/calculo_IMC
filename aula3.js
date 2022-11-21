const io = require("./io");

// QUESTÃO UM

/*
let dias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado']

io.write("Digite um número inteiro")
let numero = io.readInt()

if(numero > 7 || numero < 1){
    io.write('Valor inválido')
} else {
    io.write('O dia correspondente ao seu número é: ' + dias[numero - 1])
}
*/
//OUTRA FORMA DE FAZER, QUESTÃO UM

/*
io.write("Digite um número inteiro");
let numero = io.readInt();

switch (numero) {
  case 1:
    io.write("O dia correspondente ao seu número é Domingo");
    break;
  case 2:
    io.write("O dia correspondente ao seu número é Segunda");
    break;
  case 3:
    io.write("O dia correspondente ao seu número é Terça-feira");
    break;
  case 4:
    io.write("O dia correspondente ao seu dia é Quarta-feira");
    break;
    case 5:
        io.write("O dia correspondente ao seu número é Quinta-feira");
        break;
  case 6:
    io.write("O dia correspondente ao seu número é Sexta-feira");
    break;
  case 7:
    io.write("O dia correspondente ao seu número é Sabado");
    break;
  default:
    io.write("Valor invalido");
}
*/

// QUESTÃO DOIS/ ANO BISsEXTO
/*
io.write('Digite um ano direi se ele é bissexto')
let ano = io.readInt()

if((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0){
    io.write('Oano é bissexto')
} else {
    io.write('O ano não é bissexto')
}
*/

// CLACULE PESO E IDADE / TERCEIRA QUESTÃO
/*
let pessoasMais90Quilos = 0
let somaIdades = 0

for(let iterador = 0; iterador < 7; iterador ++){
    io.write('Digite a idade da pessoa'+ iterador + 1)
    let idade = io.readInt()
    io.write('Digite o peso da pessoa' + iterador + 1)
    let peso = io.readFloat()

    if(peso > 90){
        pessoasMais90Quilos = pessoasMais90Quilos + 1
    }
    somaIdades = somaIdades + idade
}

let mediaIdades = somaIdades / 7
io.write('Este grupo possue' + pessoasMais90Quilos + 'pessoas com mais de 90 quilos. e a media da idade do grupo é:' + Math.round(mediaIdades))
*/

//NÚMEROS PRIMOS / QUESTÃO 4

io.write('Digite um número para saber se ele é primo')
let numero = io.readInt()
let numeroAux = 2
let ehPrimo = true

while(numeroAux < numero / 2 && ehPrimo){
    if(numero % numeroAux === 0){
        ehPrimo = false
    }
    numeroAux = numeroAux + 1
}

let appendText = ehPrimo ? "é " : "não é "
io.write("O número " + appendText + "primo")
