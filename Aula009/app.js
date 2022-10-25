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