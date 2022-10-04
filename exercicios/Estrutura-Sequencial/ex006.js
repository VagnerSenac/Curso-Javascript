// Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.
function calcular(){    
let raio = parseFloat(document.querySelector("#raio").value)
area = 3.14 * (raio * raio)
document.querySelector("#resultado").innerHTML = ''
document.querySelector("#resultado").innerHTML = 'Sua área é de ' + area + ' Cm'
	
}