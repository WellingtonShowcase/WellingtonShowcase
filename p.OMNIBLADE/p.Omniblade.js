const video = document.getElementById('video');
const svg = document.getElementById('svg');
const deslocamento = 0.1;
const tempototal = 2.44;


function sincronizaSVG() {
    const tempo = video.currentTime;

    const pulsar = Math.floor((tempo - deslocamento + tempototal) % tempototal) / tempototal;

    svg.style.opacity = pulsar < 0.2 ? 1 : 0;

    requestAnimationFrame(sincronizaSVG);
}

    video.addEventListener("play", () => {
        sincronizaSVG();

    });