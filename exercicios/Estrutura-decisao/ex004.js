//Faça um Programa que leia três números e mostre o maior deles.
let num1 = parseFloat(90)
let num2 = parseFloat(70)
let num3 = parseFloat(60)
if (num1 >= num2 & num1 >= num3){
    console.log("O maior valor maior é", num1)
}else if (num2 >= num1 & num2 >= num3){
    console.log("O maior valor maior é", num2)
}else{
    console.log("O maior valor maior é", num3)
}