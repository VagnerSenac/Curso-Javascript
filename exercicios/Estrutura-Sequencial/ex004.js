// Faça um Programa que peça as 4 notas bimestrais e mostre a média.

function media(){
let n1 = parseFloat(document.querySelector("#notaUm").value)
let n2 = parseFloat(document.querySelector("#notaDois").value)
let n3 = parseFloat(document.querySelector("#notaTres").value)
let n4 = parseFloat(document.querySelector("#notaQuatro").value)
let media = (n1 + n2 + n3 + n4) /4
document.querySelector("#resultado").innerHTML = ''
document.querySelector("#resultado").innerHTML = 'A média é '+ media 
}
