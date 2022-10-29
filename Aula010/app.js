function BuscarCep(){
    let cep = document.querySelector('#cepDigitado').value
    $.ajax({
        type: "GET",
        url: "https://cep.awesomeapi.com.br/json/" + cep,
        data: "json",
        success: function (dados) {
           let cepBuscado = {
                "cep": dados.cep,
                "rua": dados.address_type,
                "endereco" : dados.address,
                "numero" : dados.ddd,
                "bairro" : dados.district,
                "cidade" : dados.city
            }
        }
    });
}
function MostrarCep(cepBuscado){
    let cartao
    cartao = `<p> ${cepBuscado.cep} </p>`
    cartao += `<p> ${cepBuscado.rua} </p>`
    cartao += `<p> ${cepBuscado.endereco} </p>`
    cartao += `<p> ${cepBuscado.numero} </p>`
    cartao += `<p> ${cepBuscado.bairro} </p>`
    cartao += `<p> ${cepBuscado.cidade} </p>`
  
    $('.ResultadoBusca').append(cartao)
}
