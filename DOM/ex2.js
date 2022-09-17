let btnCalcular = document.getElementById('calcular');

btnCalcular.addEventListener('click', function(evento){

    evento.preventDefault();
    
    let serv = document.getElementById('servico');
    let prazo = document.getElementById('prazo');
    let res = document.getElementById('resultado')

    /*recupera os dados da matriz*/
    let preco = calculaPreco( serv.value, prazo.value);

    res.innerText = ` O preco é ${preco}`;


    console.log(serv.value);
  
    //ver dados do evento (click) no console

    console.log(evento);

});

    function calculaPreco( servico, prazo){

        let tabela = [['$$$', '$$', '$'],
                    ['$$$$', '$$$', '$$'],
                    ['Não faz', 'Não faz', '$$$']];

            return tabela[servico][prazo];
    }




/*
function executa(){
    alert('Clicou');
}

console.log(btnCalcular);
*/