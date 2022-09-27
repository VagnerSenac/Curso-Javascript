//Faça um programa que leia e valide as seguintes informações:
//Nome: maior que 3 caracteres;
//Idade: entre 0 e 150;
//Salário: maior que zero;
//Sexo: 'f' ou 'm';
//Estado Civil: 's', 'c', 'v', 'd';
function CadastrarCliente(){
    let nome = document.querySelector("#nome").value
    if(nome.length < 3){
        document.querySelector("#erro-nome").innerHTML = "<em>O nome deve possuir mais de 3 caracteres</em>"
        document.querySelector("nome").focus()
        return
    }else{
        document.querySelector("#erro-nome").innerHTML = ""
    }
alert("Cadastro efetuado com sucesso!!!")

}


//Idade: entre 0 e 150;
let idade = prompt("Informe sua idade")
while(idade < 0 || idade > 150){
    idade = prompt("Informe sua idade")
}

let salario = prompt("Informe seu salário")
//Salário: maior que zero;
while(salario <= 0){
    salario = prompt("Informe seu salário")
}
let sexo = prompt("Informe o sexo (f ou m)")
//Sexo: 'f' ou 'm';
while(sexo != 'f' && sexo != 'm'){
    sexo = prompt("Informe o sexo (f ou m)")
}


let estadoCivil = prompt("Informe o seu estado civil")
//Estado Civil: 's', 'c', 'v', 'd';
while(estadoCivil != 's' && estadoCivil != 'c' && estadoCivil != 'v' && estadoCivil != 'd'){
    estadoCivil = prompt("Informe o seu estado civil")
}