const foco = new IntersectionObserver((textos) => {
    textos.forEach(texto => {
        const txt = texto.target.querySelector('.textoROSA');

        if (txt) {
            if (texto.isIntersecting) {
                txt.classList.add('visivel');
            } else {
                txt.classList.remove('visivel');
            }
        }
    });
} , {threshold: 0.1});

document.querySelectorAll('header').forEach(header => {
    foco.observe(header);
});