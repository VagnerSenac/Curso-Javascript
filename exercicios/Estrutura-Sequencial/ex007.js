/* Faça um Programa que pergunte quanto você ganha por hora e o número de
 horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês. */
function calcular(){ 
let horaGanha = parseFloat(document.querySelector("#horaGanha").value)
let horaMes = parseFloat(document.querySelector("#horaMes").value)
total = horaGanha * horaMes
document.querySelector("#resultado").innerHTML = ''
document.querySelector("#resultado").innerHTML = 'Seu salário no referido mês é R$ ' + total 

 }