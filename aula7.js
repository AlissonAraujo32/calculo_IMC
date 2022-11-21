const io = require("./io");

// cadastro de produtos
let arrayNomes = [];
let arrayPrecos = [];

function cadastrarProdutos() {
  let digitouNegativo = false;

  while (digitouNegativo === false) {
    io.write("Nome do produto: ");
    let nome = io.read();
    io.write("preço: ");
    let preco = io.readFloat();

    if (preco >= 0) {
      arrayNomes.push(nome);
      arrayPrecos.push(preco);
    } else {
      digitouNegativo = true;
    }
  }
}

let executando = true

while (executando) {
  io.write("Digite a opção: ")
  let opcao = io.read()

  if (opcao === "a") {
    cadastrarProdutos()
  } else if (opcao === "b") {
    io.write(arrayNomes);
    io.write(arrayPrecos);
  } else if(opcao === 'sair'){
    executando = true
  }
}
