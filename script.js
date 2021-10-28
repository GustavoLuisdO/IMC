function calcular(){
  var peso = document.getElementById('peso').value
  var altura = document.getElementById('altura').value
  var resultado = document.getElementById('resultado')

  if(peso == "" || altura == ""){
    resultado.innerHTML = `Insira os valores!`
    return;
  }

  var imc = peso/(altura*altura)

  if(imc <= 18.5){
    resultado.innerHTML = `IMC = ${imc.toFixed(2)} | ABAIXO DO PESO`
  }
  else if(imc > 18.5 && imc <= 24.9){
    resultado.innerHTML = `IMC = ${imc.toFixed(2)} | PESO NORMAL`
  }
  else if(imc > 24.9 && imc <= 29.9){
    resultado.innerHTML = `IMC = ${imc.toFixed(2)} | SOBREPESO`
  }
  else if(imc > 29.9 && imc <= 39.9){
    resultado.innerHTML = `IMC = ${imc.toFixed(2)} | OBESIDADE`
  }
  else if(imc > 39.9){
    resultado.innerHTML = `IMC = ${imc.toFixed(2)} | OBESIDADE GRAVE`
  }
}
