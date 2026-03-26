const arts = document.querySelectorAll("article");



infos.forEach(info => {
    let ativado = false;
    info.addEventListener("click", () => {

        const infos = document.querySelectorAll("article .material-symbols-outlined");
        const titulo = artigo.querySelector('.titulo');
        const texto = artigo.querySelector('.texto');
        const focus = artigo.querySelectorAll("img, video");
        const midias = artigo.querySelector(".imagens");
        const imagens = aritigo.querySelectorAll(".imagens img, .imagens video");
        const pontos = aritigo.querySelector(".pontos");

        let index = 0
        let ativado = false

        pontos.innerHTML = "";

        imagens.forEach((_, i) => {
            const ponto = document.createElement("span");
            ponto.classList.add("ponto");

            ponto.addEventListener("click", (e) => {
                e.stopPropagation();
                index = i;
                atualizarCarrossel();
            });

            pontosContainer.appendChild(ponto);
        });

        const pontos = pontosContainer.querySelectorAll(".ponto");


        function atualizarCarrossel(){
            const lateral = imagens{0}.clientWidth;
            midias.style.transform = 'translateX(-${index * largura}px)';

            pontos.forEach(p => p.classList.remove("ativo"));
            if (pontos[index]) pontos[index].classList.add("ativo")
        }

        info.addEventListener("click", (e) => {
            e.stopPropagation();
        })

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