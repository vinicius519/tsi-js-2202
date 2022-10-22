const entradaTarefa = document.querySelector('#tarefa');
const btnAddTarefa = document.querySelector('.btn');
const listaDeTarefas = document.querySelector('.collection');
const filtroDeTarefa = document.querySelector('#filtro');
const btnLimpaTudo = document.querySelector('.limpar-tarefas');

function carregaMonitoresDeEventos() {

    //Evento para adicionar a tarefa
    btnAddTarefa.addEventListener('click', adicioneTarefa);

    //Evento para fazer o x funcionar (apagar uma única tarefa)
    listaDeTarefas.addEventListener('click', apagarTarefa);
    btnLimpaTudo.addEventListener('click' , apagarTudo);
    filtroDeTarefa.addEventListener('keyup', filtrar);
}
carregaMonitoresDeEventos();

    function filtrar(evento){

        const procurado = evento.target.value.toLowerCase();

        document.querySelectorAll('collection-item');

    /////////////////
    tarefa.forEach(function(tarefa){
        textoTarefa = tarefa.innerText;
        if(textTarefa.toLowerCase().innerOf(procurado) != -1 ){

            tarefa.style.display = 'block';
        }else{
            tarefa.style.display = 'nome';
        }
    });
}
function apagarTudo(evento){
    evento.preventDefault();

listaDeTarefas.innerHTML = '';

}

function apagarTarefa(evento){

    /*se o elemento pai tiver a classe apagar-tarefa ou seja
    for o elemento "a", apague li, ou seja, a tarefa */
    if(evento.target.parentElement.classList.contains('apaga-tarefa')){
        evento.target.parentElement.parentElement.remove();
    }

}

function adicioneTarefa(evento){

    evento.preventDefault();
    //Verifica se usuário entrou com uma tarefa
    if(entradaTarefa.value === '' ){

        alert('Entre com uma tarefa');
        return false;
     }

    //Cria li com a nova tarefa
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(entradaTarefa.value));

    //Cria onde vai ficar o x para apagar a tarefa
    const a = document.createElement('a');
    a.className = 'apaga-tarefa secondary-content';

    //cria icone com x para apagar a tarefa
    const i = document.createElement('i');
    i.className = 'fa fa-remove';

    //Monta o elemento li para colocar em ul
    a.appendChild(i);
    li.appendChild(a);
    listaDeTarefas.appendChild(li);

    gravarTarefa(entradaTarefa.value);

    //Apaga o input para entrada
     entradaTarefa.value = '';

     
}


function gravarTarefa(tarefa){

    
    let tarefas = [];

    let tarefaDoStorage = localStorage.getItem('tarefas');
    if( tarefaDoStorage != null){
        tarefas = JSON. parse(tarefaDoStorage);
    }

    tarefas.push(tarefa);

    localStorage.setItem('terafas', JSON.stringify(tarefas) );
}


//////////////////////////////////////////////////////////

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
  <title>Lista de Tarefas</title>
</head>
<body>
  <div class="container">
    <div class="row">
      <div class="col s12">
        <div id="main" class="card">
          <div class="card-content">
            <span class="card-title">Lista de Tarefas</span>
            <div class="row">
              <form id="form-tarefa">
                <div class="input-field col s12">
                  <input type="text" name="tarefa" id="tarefa">
                  <label for="tarefa">Nova Tarefa</label>
                </div>
                <input type="submit" value="Add Task" class="btn">
              </form>
            </div>
          </div>
          <div class="card-action">
            <h5 id="task-title">Tarefas</h5>
            <div class="input-field col s12">
              <input type="text" name="filtro" id="filtro">
              <label for="filtro">Filtrar</label>
            </div>
            <ul class="collection"></ul>
            <a href="#" class="limpar-tarefas btn black">Limpar</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script src="https://code.jquery.com/jquery-3.2.1.js"
  integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
  crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
  <script src="listaDeTarefas.js"></script>
</body>
</html>
