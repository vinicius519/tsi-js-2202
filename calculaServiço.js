/*criar uma calculadora de valor a ser cobrado
do cliente 
o valor do serviço pode variar conforme o prazo.
os valores e prazos devem ser armazenados em uma matrix.
o calculo deve ficar abrigatoriamente em uma funçao.

*/
let tabela = [['$$$', '$$', '$'],
            ['$$$$', '$$$', '$$'],
            ['Não faz', 'Não faz', '$$$']];

let servico = prompt('entre com o serviço: \n0 - troca de oleo \n1 - balanceamento \n2 - cambagem');
let prazo = prompt('entre com o serviço: \n0 - um dia \n1 - dois dias \n2 - tres dias');


if(validaEntrada(servico) && validaEntrada(prazo)){
    alert("O serviço ficara em: " + tabela[servico][prazo]);
}else{

    alert("ERRO: verifique os valores inseridos e tente novamente");
}


console.log(validaEntrada(servico));

function validaEntrada(dadoUsuario){

    return dadoUsuario >= 0 && dadoUsuario <=2 ? true : false;
}