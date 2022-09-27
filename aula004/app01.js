
function Multiplicar(){
    let n1 = document.querySelector("#n1").value
    let n2 = document.querySelector("#n2").value
    let resultado = n1 * n2
    document.querySelector("#resultado").innerHTML = `<strong>${resultado}</strong>`

}
function Subtracao(){
    let n1 = document.querySelector("#n1").value
    let n2 = document.querySelector("#n2").value
    let resultado = n1 - n2
    document.querySelector("#resultado").innerHTML = `<strong>${resultado}</strong>`

}
function Soma(){
    let n1 = document.querySelector("#n1").value
    let n2 = document.querySelector("#n2").value
    let resultado = parseInt(n1) + parseInt(n2)
    document.querySelector("#resultado").innerHTML = `<strong>${resultado}</strong>`

}
function Divisao(){
    let n1 = document.querySelector("#n1").value
    let n2 = document.querySelector("#n2").value
    let resultado = n1 / n2
    document.querySelector("#resultado").innerHTML = `<strong>${resultado}</strong>`

}