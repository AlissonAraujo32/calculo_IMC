function calculate() {
  let altura = document.getElementById("altura").value / 100;
  let peso = document.getElementById("peso").value;

  let imc = peso / altura ** 2;

  let text = ''
  
  if (imc < 18.5) {
    text = ("Você esta magro");
  } else if (imc < 24.9) {
    text = ("Você esta normal");
  } else if (imc < 39.9) {
    text = ("Você esta com obesidade");
  } else if (imc > 39.9) {
    text = ("Você esta com comobidade mórbida");
  }
  document.getElementById('text_area').innerText = text
}
