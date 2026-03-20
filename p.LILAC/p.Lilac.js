window.addEventListener("load", () => {
    const carregar = document.getElementById("loadingframe");
    carregar.classList.add("paginacarregada");
    setTimeout(() => {
        carregar.remove();
    }, 500);
    });



var i = document.getElementsByClassName('imagem').length
var botaogaleria = document.getElementsByClassName('lilacicon')[0];
var galeria = document.getElementsByClassName('imagem');
var pagina = document.getElementsByTagName('body')[0];
var videofundo = document.getElementsByClassName('lilacvideo')[0];
var videofundosmart = document.getElementsByClassName('lilacvideosmart')[0];
var frame = document.getElementsByClassName('carrossel')[0];




botaogaleria.addEventListener('click', function(event){
    event.stopPropagation();
    videofundo.classList.add('videoclick');
    videofundosmart.classList.add('videoclick');
    for (let i=0; i<galeria.length; i++) {
    galeria[i].style.display = 'inline-block';

    galeria[i].classList.remove('ativado');
    frame.classList.remove('ativado'); 
    galeria[i].style.animation = 'none';
    void galeria[i].offsetWidth;
    galeria[i].style.animation = '';
    galeria[i].classList.add('ativado');
    frame.classList.add('ativado');   
}
});


pagina.addEventListener('click', function(event){
    event.stopPropagation();
    videofundo.classList.remove('videoclick');
    videofundosmart.classList.remove('videoclick');
    for (let i=0; i<galeria.length; i++) {
    galeria[i].style.display =  'none';
    galeria[i].classList.remove('ativado');
    frame.classList.remove('ativado');
}
});