document.querySelector('button').addEventListener('click', recuperaConteudoAjax);

function recuperaConteudoAjax(){
    const XHR = new XMLHttpRequest;

    XHR.open('GET', 'http://127.0.0.1:5502/ajax/conteudo.txt', true);
    XHR.onload = function(){
        if(this.status == 200){
            // document.querySelector('#dadoRecuperado').innerHTML = this.responseText;
            let dados = JSON.parse(this.responseText);
            dados.forEach(function(valor){
                if(valor.idade < 18){
                    alert(valor.nome + " é menor de idade")
                }else{
                    alert(valor.nome + " é maior de idade")
                }
            });

        }
    }
    XHR.send();
}