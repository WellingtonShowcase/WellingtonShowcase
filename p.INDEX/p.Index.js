var botao = document.querySelector('.botaoentrar')
var tela = document.querySelector('.WELLINGTONshowcase')


botao.addEventListener('click', function(event){
    event.stopPropagation();
    tela.classList.add('clicar')
})