console.log(window);

//alert(`sua resoluçao é: ${window.innerHeight} x ${window.innerWidth}`);
//como utilizar atributos de um objeto


let meuTitulo = document.getElementById('Titulo');

let nav = window.navigator.vendor;


if(confirm('deixe uma mensagem')){

    let msg = prompt('msg');
    meuTitulo.innerText = msg + `voce esta usando navegador ${nav}`;
    meuTitulo.style.background = 'green';

}else{
    meuTitulo.innerText = 'sem mensagem';
    meuTitulo.style.background = 'purple'

}