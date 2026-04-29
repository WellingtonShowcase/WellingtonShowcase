document.addEventListener('DOMContentLoaded', () => {
const rodape = document.querySelector('#rodape');
const logo = document.querySelector('#ROSALOGO');

if (!rodape || !logo) return;

const foco = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
        rodape.classList.add('visivel');
    } else {
        rodape.classList.remove('visivel');
        }
    });
}, { threshold: 0.5 });

foco.observe(logo);
});