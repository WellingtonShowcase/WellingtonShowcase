var botaogaleria = document.getElementById('botao');
var galeria = document.getElementById('galeria');



botaogaleria.addEventListener('click', function(event){
    event.stopPropagation();
    galeria.classList.add('ativado');  

});


galeria.addEventListener('click', function(event){
    event.stopPropagation();
});


document.addEventListener('click', function(){
    galeria.classList.remove('ativado');

});