const ROSAhtml = document.getElementById("ROSA");
const context = ROSAhtml.getContext("2d");
const tFrames = 49;
const frames = [];
const iFrame = 0;

for (let i = 0; i < tFrames; i++) {
    const img = new Image();
    const indice = (iFrame + i).toString().padStart(5, '0');
    img.src = `ROSA/ROSAvideo-${indice}.webp`;
    frames.push(img);
}


frames[0].onload = () => {
    context.drawImage(frames[0], 0, 0);
}

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const altura = document.documentElement.scrollHeight - window.innerHeight;
    const progresso = Math.min(Math.max(scrollTop / altura, 0), 1);
    const index = Math.min(Math.floor(progresso * tFrames), tFrames - 1);
   
    if (frames[index].complete){
    requestAnimationFrame(() => {
        context.clearRect(0, 0, ROSAhtml.width, ROSAhtml.height)
        context.drawImage(frames[index], 0, 0);
    });
}
});