const arts = document.querySelectorAll("article");
const infos = document.querySelectorAll("article .material-symbols-outlined");


infos.forEach(info => {
    let ativado = false;
    info.addEventListener("click", () => {

        const artigo = info.closest("article");
        const titulo = artigo.querySelector('.titulo');
        const texto = artigo.querySelector('.texto');
        const focus = artigo.querySelectorAll("img, video");

        if (!ativado) {
            titulo.style.opacity = 1;
            texto.style.opacity = 1;
        focus.forEach(f => {
            f.style.filter = "blur(5px) brightness(30%)";
            f.style.transition = "filter 0.3s ease-in-out";
        });

        } else {
            titulo.style.opacity = 0;
            texto.style.opacity = 0;
        focus.forEach(f => {
            f.style.filter = "none";
        });
    }
    ativado = !ativado
    });
});






arts.forEach((article) => {
const caixa = article.querySelector(".midias");
const frame = article.querySelectorAll(".imagens > *");
const prox = article.querySelector(".r");
const ante = article.querySelector(".l");

let index = 0;
const framestotal = frame.length;

function slide(){
    caixa.style.transform = `translateX(-${index * 100}%)`;
}

prox.addEventListener("click", (i) => {
    index = (index + 1) % framestotal;
    slide()
});

ante.addEventListener("click", (i) => {
    index = (index - 1 + framestotal) % framestotal;
    slide()
});
});