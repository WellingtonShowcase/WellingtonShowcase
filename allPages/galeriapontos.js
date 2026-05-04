const arts = document.querySelectorAll("article");



arts.forEach((artigo) => {


        const info = artigo.querySelector(".material-symbols-outlined");
        const titulo = artigo.querySelector('.titulo');
        const texto = artigo.querySelector('.texto');
        const focus = artigo.querySelectorAll("img, video");
        const midias = artigo.querySelector(".imagens");
        const imagens = artigo.querySelectorAll(".imagens img, .imagens video");
        const contpontos = artigo.querySelector(".pontos");

        let index = 0;
        let ativado = false;

        contpontos.innerHTML = "";

        imagens.forEach((_, i) => {
            const ponto = document.createElement("span");
            ponto.classList.add("ponto");

            ponto.addEventListener("click", (e) => {
                e.stopPropagation();
                index = i;
                atualizarCarrossel();
            });

            contpontos.appendChild(ponto);
        });

        const pontos = contpontos.querySelectorAll(".ponto");


        function atualizarCarrossel() {
            const largura = imagens[0].clientWidth;
            midias.style.transform = `translateX(-${index * largura}px)`;

            pontos.forEach(p => p.classList.remove("ativo"));
            if (pontos[index]) pontos[index].classList.add("ativo")
        }

atualizarCarrossel();


    if (info){
        info.addEventListener("click", (e) => {
            e.stopPropagation();


    if (!ativado) {
        titulo.style.opacity = 1;
        texto.style.opacity = 1;

        focus.forEach(f => {
            f.style.filter = "blur(5px) brightness(20%)";
            f.style.transition = "filter 0.3s ease-in-out";
        });

        } else {
            titulo.style.opacity = 0;
            texto.style.opacity = 0;
            focus.forEach(f => f.style.filter = "none");
        
    }

    ativado = !ativado;

    });

    }






const caixa = midias;
const frame = artigo.querySelectorAll(".imagens > *");
const prox = artigo.querySelector(".r");
const ante = artigo.querySelector(".l");
const total = frame.length;

function slide() {
    const largura = imagens[0].clientWidth;
    caixa.style.transform = `translateX(-${index * largura}px)`;



pontos.forEach(p => p.classList.remove("ativo"));
if (pontos[index]) pontos[index].classList.add("ativo");
}

if (prox) {
prox.addEventListener("click", () => {
    index = (index + 1) % total;
    slide();
});

}


if (ante) {
ante.addEventListener("click", () => {
    index = (index - 1 + total) % total;
    slide();
});

}

});