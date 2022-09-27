//Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar, sabendo que a decisão 
//é sempre pelo mais barato.

let valor1 = parseFloat(90)
let valor2 = parseFloat(91)
let valor3 = parseFloat(70)

if (valor1 <= valor2 & valor1 <= valor3){
    console.log("Compre esse produto pois é o mais barato. Valor:", valor1)
}else if (valor2 <= valor1 & valor2 <= valor3){
    console.log("Compre esse produto pois é o mais barato. Valor:", valor2)
}else{
    console.log("Compre esse produto pois é o mais barato. Valor:", valor3)
}