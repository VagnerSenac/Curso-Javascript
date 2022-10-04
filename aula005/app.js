function QuemEhEssePokemon(pokemon){
    if(pokemon == "pikachu"){
        document.querySelector("#resposta1").innerHTML = 'Parabéns, você acertou.'
       
    }else{
        document.querySelector("#resposta2").innerHTML = 'Infelismente você errou.'
     
    }
    document.querySelector("#pokemon-imagem").style.filter="brightness(1)"
    document.querySelector("#nome-pokemon").innerHTML = "Pikachu"
}