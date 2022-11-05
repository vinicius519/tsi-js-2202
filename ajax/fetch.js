document.querySelector('button').addEventListener('click', recuperaDados);

function recuperaDados(evento){
    evento.preventDeFault();

    //fazemos a chamada                             //então(depois)
    fetch('http://127.0.0.1:5500/ajax/conteudo.txt').then(function(ret){

    //pegamos apenas o conteudo do retorno
    return ret.text; 

    //então
    }).then(function(cont){


        //trabalhamos com o conteudo retornado
        let dados = JSON.parse(cont);

        dados.forEach(function(aluno){

            saida = aluno.idade >=18 ?
                `${aluno.nome} é maior de idade <br>`
                :
                `${aluno.nome} é menor de idade <br>`

        })


        document.querySelector('#dadosRecuperado').innerHTML = saida;
    });
}