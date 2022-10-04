//Faça um Programa que peça um número e então mostre a mensagem O número informado foi [número].


function numeroInserido(){
let numero = parseFloat(document.querySelector("#numero").value)
document.querySelector("#resultado").innerHTML = ''
document.querySelector("#resultado").innerHTML = 'O número digitado foi '+ numero 
}