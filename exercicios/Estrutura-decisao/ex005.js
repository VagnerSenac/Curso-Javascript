//Faça um Programa que leia três números e mostre o maior e o menor deles.
let num1 = parseFloat(90)
let num2 = parseFloat(0)
let num3 = parseFloat(990)
if (num1 >= num2 & num1 >= num3){
    console.log("O maior valor maior é", num1)
}else if (num2 >= num1 & num2 >= num3){
    console.log("O maior valor maior é", num2)
}else{
    console.log("O maior valor maior é", num3)
}
if (num1 <= num2 & num1 <= num3){
    console.log("O  valor menor é", num1)
}else if (num2 <= num1 & num2 <= num3){
    console.log("O  valor menor é", num2)
}else{
    console.log("O valor menor é", num3)
}