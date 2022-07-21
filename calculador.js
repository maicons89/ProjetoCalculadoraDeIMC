function calculate() {
  var height = document.getElementById("height").value / 100;
  var weight = document.getElementById("weight").value;

  var imc = weight / height ** 2;
  var text = "";
  if (imc < 18.5) {
    text = "Voce esta magro";
  } else if (imc < 24.9) {
    text = "Voce esta normal";
  } else if (imc < 29.9) {
    text = "Voce esta com sobrepeso";
  } else if (imc < 39.9) {
    text = "Voce estpa com obesidade";
  } else if (imc > 39.9) {
    text = "Voce esta com obesidade morbida";
  }
  document.getElementById("text_area").innerText = text;
}
