// Faça um Programa que peça dois números e imprima a soma
function numeroSomado(){
let n1 = parseFloat(document.querySelector("#numeroUm").value)
let n2 = parseFloat(document.querySelector("#numeroDois").value)
let total = n1 + n2
document.querySelector("#resultado").innerHTML = ''
document.querySelector("#resultado").innerHTML = 'A soma dos valores é '+ total 
}