//Faça um Programa que leia três números e mostre-os em ordem decrescente.
let num1 = parseFloat(1)
let num2 = parseFloat(9)
let num3 = parseFloat(90)
if (num1 >= num2 & num1 >= num3 & num2 >= num1 & num2 >= num3 ){
    console.log("Valor 1 :", num1, "Valor 2 :", num2, "Valor 3 :", num3)
}else if (num2 >= num1 & num2 >= num3 & num2 >= num1 & num2 >= num3 ){
    console.log("O maior valor maior é", num2)
}else{
    console.log("O maior valor maior é", num3)
}