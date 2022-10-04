// Faça um Programa que converta metros para centímetros
function calcular(){
let metro = parseFloat(document.querySelector("#metros").value)
let centimetro = (metro / 60)
document.querySelector("#resultado").innerHTML = ''
document.querySelector("#resultado").innerHTML = centimetro + ' cm'
}
