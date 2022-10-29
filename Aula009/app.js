function CotacaoDoDia(){
    let moeda = document.getElementById("moeda-cotacao").value 

    $.ajax({
        type: "GET",
        url: "https://economia.awesomeapi.com.br/json/last/" + moeda,
        dataType: "json",
        success: function (dados) {
            let objMoedaEstraida = Object.values(dados)
            let venda = objMoedaEstraida[0].ask
            document.getElementById("resultado-cotacao").innerHTML = "R$ " + venda
        }
    });
   
}


function ConverterValor(){
    let valor = $('#valor-converter').val()
    $.ajax({
        type: "GET",
        url: "https://economia.awesomeapi.com.br/json/last/USD-BRL",
        data: "json",
        success: function (dados) {
            let objMoedaExtraida = Object.values(dados)
            let dolar = objMoedaExtraida[0].ask
            let convertido = dolar * valor
            convertido = new Intl.NumberlFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(convertido)
            $('#valor-final').html(convertido)
            
        }
    });
}