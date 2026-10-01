document.addEventListener('DOMContentLoaded', () => {
const RosaGaleria = document.querySelector('#ROSAgaleria');
const logo = document.querySelector('#ROSALOGO');
const aviso = document.querySelector('#aviso');

if (!RosaGaleria || !logo) return;

const foco = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {

    if (entrada.isIntersecting) {
        RosaGaleria.classList.add('visivel');
        aviso.classList.add('visivel')
    } else {
        RosaGaleria.classList.remove('visivel');
        aviso.classList.remove('visivel')
        }
    });
}, { threshold: 0.5 });

foco.observe(logo);
});